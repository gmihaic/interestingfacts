import React, {Component} from "react"

class Fact extends Component {
    
    constructor(props) {
       
        super();

        this.props = props;             
    }

    getFactClassName = () => {
        let divClass = this.props.className;

        if (this.props?.factType) {
            divClass += " fact" + this.props.factType;
        }

        return divClass;
    }
    
    render() {              

        let imgContent = "";

        if (this.props?.factType || this.props.factTypeId == "cn") {
            //factContent = "" + factContent;
            imgContent = <img alt="" src={"/fact" + ((this.props.factTypeId == "cn") ? "cn" : this.props.factType) + ".jpg"} />;
        }

        return (           
                <div className={this.getFactClassName()}>
                    <div className="factContent">
                    {imgContent} {this.props.fact}
                    </div>
                </div>            
        );
    }
}

export default Fact