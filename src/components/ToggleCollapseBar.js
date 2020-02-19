import React, {Component} from "react";
import DynamicComponent from "./DynamicComponent";

class ToggleCollapseBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
        }
    }

    onClick = () => {
        this.setState((prevState) => ({clicked: !prevState.clicked}));
    }

    render () {
        return (
            <div className="content-container">
                <div className={this.state.clicked ? "collapsed toggle-collapse" : "expanded toggle-collapse"}>
                    <span className="toggle-collapse-title">{this.props.title}</span>
                    <div onClick={this.onClick}>
                        <i className={this.state.clicked ? "fa fa-plus" : "fas fa-minus"} aria-hidden="true"></i>
                    </div>
                </div>

                {
                    !this.state.clicked && 
                    <div className="content-box">
                        <div className="content-box__text">
                            <DynamicComponent 
                                tag={this.props.tag}
                                props={this.props}
                            />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default ToggleCollapseBar;

 

