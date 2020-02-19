import React from "react";
import TransactionListItem from "./TransactionListItem";
import selectTransactions from "../../selectors/transactions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import DataListFilters from "../Filters/DataListFilters";

const AccountTransactionList = (props) => (
    <div>
        <DataListFilters 
            activeFilters={["transactionFilters"]}
        />
        {props.transactions.map((transaction) =>
            <TransactionListItem 
                key={transaction.id} transaction={transaction}
            />
        )}
    </div>
);

const mapStateToProps = (state, props) => {

    return {
        transactions: selectTransactions(state.accounts.find((account) => account.id === props.match.params.id).transactions, state.filters)
    }
};

    

export default withRouter(connect(mapStateToProps)(AccountTransactionList));

