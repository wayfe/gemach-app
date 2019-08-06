import React from "react";
import numeral from 'numeral';
import moment from "moment";

const TransactionForm = (props) => (
    <div>
        <p>{props.transaction.type} - amount:{numeral(props.transaction.amount /100).format('$0,0.00')}</p>
        <p>{props.transaction.payType}</p> 
        {props.transaction.checkNo && <p>Check Number:{props.transaction.checkNo}</p>}
        <p>transaction date: {moment(props.transaction.date).format('MMMM Do, YYYY')}</p>
        {!props.transaction.isCleared && <p>PENDING!</p>}
    </div>
)

export default TransactionForm;