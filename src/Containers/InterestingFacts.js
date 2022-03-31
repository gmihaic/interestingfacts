import React, {Component} from "react"
import FactsList from '../Components/FactsList';
import Loader from '../Components/Loader'
import ReloadButton from '../Components/ReloadButton'
import "./InterestingFacts.css"

class InterestingFacts extends Component {

    constructor() {

        super();

        this.baseFactsUrls = [
            "http://numbersapi.com/random/trivia",
            "http://numbersapi.com/random/year",
            "http://numbersapi.com/random/date",
            "http://numbersapi.com/random/math"
        ];

        this.cnUrls = [
            "https://api.chucknorris.io/jokes/random?category=career",
            "https://api.chucknorris.io/jokes/random?category=celebrity",
            "https://api.chucknorris.io/jokes/random?category=animal",
            "https://api.chucknorris.io/jokes/random?category=dev",
            "https://api.chucknorris.io/jokes/random?category=history",
            "https://api.chucknorris.io/jokes/random?category=money",            
            "https://api.chucknorris.io/jokes/random?category=science"
        ];

        this.state = {
            facts: [],          
            cn: [],
            loading: true           
        };        
    }

    getRemoteURLs = () => {
                
        const urls = {
            "facts": [],
            "cn": []
        };
        
        for (let i = 1; i <= 24; i++) {
            const maxRnd = (i <= 12) ? 3 : 7;
            const rnd = Math.floor(Math.random() * (0 - maxRnd) + maxRnd);

            if (i <= 12) {
                urls["facts"].push(this.baseFactsUrls[rnd]);
            } else {
                urls["cn"].push(this.cnUrls[rnd]);
            }
        }

        return urls;
    }
    
    loadRemoteData = async () => {
        const remoteURLs = this.getRemoteURLs();       
       
        try
        {
            //first get the facts        
            const facts = await Promise.all(
                remoteURLs["facts"].map(async (url) => {
                    const fetchedResponse = await fetch(url);
                    const fetchedResponseText = await fetchedResponse.text();
                    return fetchedResponseText;
                })
            )
            .catch((err) => {
                throw err;
            });
                        
            //now get cn
            const cnData = await Promise.all(
                remoteURLs["cn"].map(async (url) => {
                    const fetchedResponse = await fetch(url);
                    const fetchedResponseJSON = await fetchedResponse.json();
                    return fetchedResponseJSON.value;
                })
            )
            .catch((err) => {
                throw err;
            });           

            this.setState({
                "facts": facts,
                "cn": cnData,
                "loading": false
            });
        }
        catch(err) {
            console.error("oops", err);
        }
    }    

    componentDidMount() {     
                   
        this.loadRemoteData();                        
    }

    reloadFacts = () => {                
        this.setState({
            loading: true
        });

        this.loadRemoteData();
    }    

    render () {
        
        return (
            <>            
                <div id="mainContainer">
                    <div className="tc ma2">
                        <h1 className="f2 gold">Interesting Facts everyone should know!</h1>
                    </div>                     

                    <ReloadButton loading={this.state.loading} reloadFnc={this.reloadFacts}></ReloadButton>                          
                   
                    <Loader key={"lc1"} facts={this.state.facts} loading={this.state.loading}> 
                        <FactsList key={"fc1"} typeId="facts" type="facts" facts={this.state.facts} />    
                    </Loader>

                    <div className="tc ma2">
                        <h1 className="f2 gold">Wisdom of the ancients!</h1>
                    </div>                        

                    <Loader key={"lc2"} facts={this.state.cn} loading={this.state.loading}>
                        <FactsList key={"fc2"} typeId="cn" type="cn" facts={this.state.cn} />      
                    </Loader>

                </div>                      
            </>
        );
    }
}

export default InterestingFacts