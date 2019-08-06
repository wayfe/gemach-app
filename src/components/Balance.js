import React from "react";
import numeral from 'numeral';
import {connect} from "react-redux";
import {getBal, getPendingBal} from "../selectors/balance";


const Balance = (props) => (
    <div>
        <p>Available Balance: {numeral((props.totalBalance - props.pendingBalance) /100).format('$0,0.00')}</p>
        <p>Current Balance: {numeral(props.totalBalance /100).format('$0,0.00')}</p>
        <p>Total Pending Transactions: {numeral(props.pendingBalance /100).format('$0,0.00')}</p>
    </div>
)

const mapStateToProps = (state, props) => {
    const transactions = props.transactions ? props.transactions : [].concat.apply([], state.accounts.map((account) => account.transactions))
    return {
        totalBalance: getBal(transactions),
        pendingBalance: getPendingBal(transactions)
    }
}

export default connect(mapStateToProps)(Balance);
