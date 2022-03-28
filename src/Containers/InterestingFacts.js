import React, {Component} from "react"
import FactsList from '../Components/FactsList';
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
            "https://api.chucknorris.io/jokes/random?category=political",
            "https://api.chucknorris.io/jokes/random?category=science"
        ];

        this.state = {
            facts: [],          
            cn: []
        };        
    }

    getRemoteURLs = () => {
                
        const urls = {
            "facts": [],
            "cn": []
        };
        
        for (let i = 1; i <= 24; i++) {
            const maxRnd = (i <= 12) ? 3 : 8;
            const rnd = Math.floor(Math.random() * (0 - maxRnd) + maxRnd);

            if (i <= 12) {
                urls["facts"].push(this.baseFactsUrls[rnd]);
            } else {
                urls["cn"].push(this.cnUrls[rnd]);
            }
        }

        return urls;
    }

    async componentDidMount() {       
        const remoteURLs = this.getRemoteURLs();
        console.log(remoteURLs);

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

            //console.log("facts", facts);
            //console.log("cndata", cnData);

            this.setState({
                "facts": facts,
                "cn": cnData 
            });
        }
        catch(err) {
            console.error("oops", err);
        }                 
    }

    render () {
        return (
            <>            
                <div id="mainContainer">
                    <div className="tc ma2">
                        <h1 className="f2 gold">Interesting Facts everyone should know!</h1>
                    </div>  
                    <FactsList type="facts" facts={this.state.facts} />    
                    <div className="tc ma2">
                        <h1 className="f2 gold">Wisdom of the ancients!</h1>
                    </div>     
                    <FactsList type="cn" facts={this.state.cn} />        
                </div>                      
            </>
        );
    }
}

export default InterestingFacts