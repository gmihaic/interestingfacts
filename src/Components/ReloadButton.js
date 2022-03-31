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

        let buttonText = "Read more about it!";
        let buttonBg = "bg-dark-green";

        if (this.props?.isError) {
            buttonText = "There was an error, please refresh!";
            buttonBg = "bg-dark-red";
        }

        return (
            <div className="buttonContainer">
                <button onClick={this.props.reloadFnc} className={"f4 link dim ph3 pv2 mb2 dib white " + buttonBg}>{buttonText}</button>
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