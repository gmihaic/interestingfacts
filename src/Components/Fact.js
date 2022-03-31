import React, {Component} from "react"

class Fact extends Component {
    
    constructor(props) {
       
        super();

        this.props = props;             
    }

    render() {              
        return (           
                <div className={this.props.className}>{this.props.fact}</div>            
        );
    }
}

export default Fact