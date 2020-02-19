import React, {Component} from "react";
import Balance from "./Balance";
import AccountList from "./Accounts/AccountList";

class DynamicComponent extends Component {

    components = {
        Balance: Balance,
        AccountList: AccountList
    }

    render () {
        return(React.createElement(
            this.components[this.props.tag]
        ));
    }
}

export default DynamicComponent;