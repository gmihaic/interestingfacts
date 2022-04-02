import React, {Component} from "react"
import "./Loader.css"

class Loader extends Component {
    constructor(props) {
       
        super();

        this.props = props;        
    }

    render() {

        if (this.props.loading) {
            return (
                <>
                    <div className="loaderContainer">
                        <img width="50" height="50" src="https://gmihaic.github.io/interestingfacts/loader.png" />
                    </div>                   
                </>
            );
        }

        return (
            <>
                {this.props.children}
            </>
        );
    }
}

export default Loader;