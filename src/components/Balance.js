import React from "react";
import numeral from 'numeral';
import {connect} from "react-redux";
import {getBal, getPendingBal} from "../selectors/balance";


const Balance = (props) => (
    <div className="content-container">
        <div className="content-box">
            <div className="content-box__text">
                <div className="balance">
                    <div>Available Balance: <p className="balance-numeral">{numeral((props.totalBalance - props.pendingBalance) /100).format('$0,0.00')}</p></div>
                    <div>Current Balance: <p className="balance-numeral">{numeral(props.totalBalance /100).format('$0,0.00')}</p></div>
                    <div>Total Pending Transactions: <p className="balance-numeral">{numeral(props.pendingBalance /100).format('$0,0.00')}</p></div>
                </div>
            </div>
        </div>
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
