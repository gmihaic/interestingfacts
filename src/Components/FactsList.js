import React, {Component} from "react"
import Fact from "./Fact"
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

    getFactType = (idx) => {

        if (this?.props?.factTypes && this.props.factTypes[idx]) {
            return this?.props.factTypes[idx];
        }

        return null;
    }

    render() {              
        return (
            <>
                <div className="factsContainer pa2 shadow-2">                   
                    {
                        this.props.facts.map((fact, idx) => {                                                                                 
                            return (
                                <Fact 
                                    key={"key-" + this.props.typeId + "-F" + idx}
                                    className={this.getFactContainerClasses()}
                                    factTypeId={this.props.typeId}
                                    fact={fact}  
                                    factType={this.getFactType(idx)}                                  
                                />                         
                            );
                        })
                    }                   
                </div>
            </>
        );
    }
}

export default FactsList;