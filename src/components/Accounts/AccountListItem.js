import React from "react";
import {Link} from "react-router-dom";
import {getBal} from "../../selectors/balance";
import {connect} from "react-redux";
import numeral from 'numeral';

export const AccountListItem = (props) => (
    <div>
        <Link to={`/accounts/${props.account.id}`}><h3>{props.account.name}</h3></Link>
        {props.account.transactions.length > 0 && <p>Balance: {numeral(getBal(props.account.transactions) /100).format('$0,0.00')}</p>}
    </div>
);

export default AccountListItem;
