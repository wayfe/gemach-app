import React from "react";
import {connect} from "react-redux";
import {clearChecks} from "../../actions/checks";
import {startEditTransaction} from "../../actions/accounts";

const ClearChecksButton = (props) => (
    <div>
        <button
            disabled={props.checks.length < 1}
            onClick={() => {
                props.accounts.forEach((account) => {
                    const transactions = account.transactions.filter(transaction => props.checks.includes(transaction.id));
                    transactions.forEach((transaction) => {
                        const clearedTransaction = {...transaction, isCleared: true}
                        props.dispatch(startEditTransaction(account.id, clearedTransaction));
                    });
                });
                props.dispatch(clearChecks());
            }}>
                clear {props.checks.length > 0 && props.checks.length} check{props.checks.length !== 1 && "s"}
        </button> 
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        checks: state.checks,
        accounts: state.accounts.filter(account => state.checks.some(id => account.transactions.map((transaction) => transaction.id).includes(id)))
    }
}

export default connect(mapStateToProps)(ClearChecksButton);

