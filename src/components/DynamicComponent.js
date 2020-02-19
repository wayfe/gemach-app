import React, {Component} from "react";
import Balance from "./Balance";
import AccountList from "./Accounts/AccountList";
import AccountInfo from "./Accounts/AccountInfo";
import TransactionList from "./Transactions/TransactionsList";
import AddTransactionPage from "./Transactions/AddTransactionsPage";

class DynamicComponent extends Component {

    components = {
        Balance,
        AccountList,
        AccountInfo,
        TransactionList,
        AddTransactionPage
    }

    render () {
        return(React.createElement(
            this.components[this.props.tag],
        ));
    }
}

export default DynamicComponent;