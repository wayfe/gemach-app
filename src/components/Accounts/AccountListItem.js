import React from "react";
import {Link} from "react-router-dom";
import {getBal} from "../../selectors/balance";
import {connect} from "react-redux";
import numeral from 'numeral';

export const AccountListItem = (props) => (
        <div className="list-item-info">
            <hr/>
            <Link className="link" to={`/accounts/${props.account.id}`}>
                <h3>{props.account.name}</h3>
                {props.account.transactions.length > 0 && <p>{numeral(getBal(props.account.transactions) /100).format('$0,0.00')}</p>}
                {props.account.transactions.length > 0 && <p>date of last transaction</p>}
            </Link>
        </div>

);

export default AccountListItem;
