import React from "react";
import TransactionListItem from "./TransactionListItem";
import selectTransactions from "../../selectors/transactions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const AccountTransactionList = (props) => (
    <div>
        {props.transactions.map((transaction) =>
            <TransactionListItem 
                key={transaction.id} transaction={transaction}
            />
        )}
    </div>
);

const mapStateToProps = (state, ownProps) => {

    return {
        transactions: selectTransactions(ownProps.transactions, state.filters)
    }
};

    

export default withRouter(connect(mapStateToProps)(AccountTransactionList));

