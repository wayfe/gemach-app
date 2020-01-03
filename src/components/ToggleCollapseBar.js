import React from "react";


class ToggleCollapseBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }
    }

    onClick = () => {
        this.setState((prevState) => ({clicked: !prevState.clicked}));
        this.props.onClick()
    }

    render () {
        return (
            <div className={this.state.clicked ? "collapsed toggle-collapse" : "expanded toggle-collapse"}>
                <span className="toggle-collapse-title">{this.props.title}</span>
                <div onClick={this.onClick}>
                    <i className={this.state.clicked ? "fa fa-plus" : "fas fa-minus"} aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

export default ToggleCollapseBar;

