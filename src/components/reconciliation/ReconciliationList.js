import React from "react";
import ReconciliationListItem from "./ReconciliationListItem";
import {connect} from "react-redux";
import selectTransactions from "../../selectors/transactions";
import ClearChecksButton from "./ClearChecksButton";


const ReconciliationList = (props) => (
    <div>
        {props.pendingTransactions < 1 ? <p>Nothing to reconcile!</p> : 
            props.pendingTransactions.map((transaction) =>
            <ReconciliationListItem 
                key={transaction.id}
                transaction={transaction}
            />
        )}
        <ClearChecksButton />
    </div>
);

const mapStateToProps = (state, props) => {

    const transactions = props.accounts.map((account) => account.transactions);
    const transactionArray = [].concat.apply([], transactions);
    const pendingTransactionArray = transactionArray.filter(transaction => transaction.isCleared === false);

    return {
        pendingTransactions: selectTransactions(pendingTransactionArray, state.filters)
    }
}
    
export default connect(mapStateToProps)(ReconciliationList);