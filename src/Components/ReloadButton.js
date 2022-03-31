import React, {Component} from "react"

class ReloadButton extends Component {
    
    constructor(props) {
       
        super();

        this.props = props;             
    }

    getLoadingButton = () => {
        if (this.props.loading) {
            return null;
        }

        return (
            <div className="buttonContainer">
                <button onClick={this.props.reloadFnc} className="f4 link dim ph3 pv2 mb2 dib white bg-dark-green">Read more about it!</button>
            </div>
        );
    }

    render() {
        return (
            <>
                {this.getLoadingButton()}
            </>
        );
    }
}

export default ReloadButton