import React from "react";
import {withRouter} from "react-router-dom";
import Balance from "../Balance";
import {connect} from "react-redux";
import { getBal, getPendingBal } from "../../selectors/balance";

const AccountSummary = (props) => (
    <div>
        <Balance 
            totalBalance={props.totalBalance}
            pendingBalance={props.pendingBalance}
        />
    </div>
)

const mapStateToProps = (state, props) => {
    const transactions = state.accounts.find((account) => account.id === props.match.params.id).transactions;

    return {
        totalBalance: getBal(transactions),
        pendingBalance: getPendingBal(transactions)
    }
}

export default withRouter(connect(mapStateToProps)(AccountSummary));