import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom"
import numeral from "numeral";
import {addCheck, removeCheck} from "../../actions/checks"

const ChecksListItem = (props) => {
    return (
        <div>
            <input
                type="checkbox" 
                onClick={() => {
                    const id = props.transaction.id;
                    props.checks.includes(id) 
                        ? 
                    props.dispatch(removeCheck({id}))
                        :
                    props.dispatch(addCheck({id}));
                }}
            />
            <Link to={`/accounts/${props.account.id}`}><p>{props.account.name}</p></Link>
            <div>
                Transaction Type: {props.transaction.type}
                -
                date: {props.transaction.date}
                -
                amount: {numeral(props.transaction.amount /100).format('$0,0.00')}
                -
                check #: {props.transaction.checkNo}
                -
                transaction id#: {props.transaction.id}
            </div>
        </div>
    )
}
  
const mapStateToProps = (state, props) => {
    return {
        checks: state.checks,
        account: state.accounts.find((account) => account.transactions.map(transaction => transaction.id).includes(props.transaction.id)),
    }
}

export default connect(mapStateToProps)(ChecksListItem);



