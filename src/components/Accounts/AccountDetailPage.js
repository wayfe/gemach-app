import React from "react";
import {startEditAccount} from "../../actions/accounts";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import TransactionsList from "../Transactions/TransactionsList";
import AccountInfo from "./AccountInfo";
import AccountForm from "./AccountForm";
import DataListFilters from "../Filters/DataListFilters";
import AddTransactionPage from "../Transactions/AddTransactionsPage";
import Balance from "../Balance";

class AccountDetailPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            clicked: false
        }
    }

    onEditAccount = () => {
        this.setState(() => ({
            clicked: true
        }))
    }

    onSubmit = (account) => {
        this.props.dispatch(startEditAccount(this.props.account.id, account));
        this.setState(() => ({
            clicked: false
        }))
    }

    render() {
        return (
            <div>
                {this.state.clicked === false ?
                    <div>
                        <AccountInfo 
                            account={this.props.account} 
                        />
                        <button
                            onClick={this.onEditAccount}
                        >edit account info</button>
                    </div> 
                    :
                    <AccountForm 
                        account={this.props.account}
                        onSubmit={this.onSubmit}
                    />
                }
                <Balance 
                    transactions={this.props.account.transactions}
                />
                <AddTransactionPage 
                    account={this.props.account}
                />
                {this.props.account.transactions.length > 0 &&
                    <div>
                        <DataListFilters 
                            activeFilters={["transactionFilters"]}
                        /> 
                        <TransactionsList 
                            transactions={this.props.account.transactions}
                        />
                    </div> 
                } 
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        account: state.accounts.find((account) => account.id === props.match.params.id)
    };
};

export default withRouter(connect(mapStateToProps)(AccountDetailPage));


