import React, {Component} from "react"
import "./FactsList.css"

class FactsList extends Component {
    
    constructor(props) {
       
        super();

        this.props = props;        
    }

    getFactContainerClasses = () => {

        let classes = "fact tc dib br3 pa3 ma2 grow bw2 shadow-5";

        if (this?.props?.type === "facts") {
            classes = classes + " bg-light-green";
        } else {
            classes = classes + " bg-gold";
        }        

        return classes;
    }

    render() {              
        return (
            <>
                <div className="factsContainer pa2 shadow-2">                   
                    {
                        this.props.facts.map((fact, idx) => {                                                      
                            return (                              
                               <div key={`keyF${idx}`} className={this.getFactContainerClasses()}>{fact}</div>
                            );
                        })
                    }                   
                </div>
            </>
        );
    }
}

export default FactsList;