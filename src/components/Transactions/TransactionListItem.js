import React from "react";
import TransactionForm from "./TransactionForm";
import {startEditTransaction, startRemoveTransaction} from "../../actions/accounts";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import TransactionInfo from "./TransactionInfo";

class TransactionListItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: false
        }
    }

    onSubmit = (updatedTransaction) => {
        this.props.dispatch(startEditTransaction(this.props.account.id, updatedTransaction));
        this.setState(() => ({
            clicked: false
        }));
    }

    onClick = () => {
        this.setState(() => ({
            clicked: "clicked"
        }))
    }

    onDelete = () => {
        this.props.dispatch(startRemoveTransaction(this.props.account.id, this.props.transaction.id));
    }

    render() {
        return (
            <div>
                {this.state.clicked === "clicked" ?
                    <TransactionForm 
                        transaction={this.props.transaction}
                        onSubmit={this.onSubmit}
                        buttonText="save"
                    />
                    :
                    <div>
                        <TransactionInfo 
                            transaction={this.props.transaction}
                        />
                        <button
                            onClick={this.onClick}
                        >edit</button>
                        <button
                            onClick={this.onDelete}
                        >delete</button> 
                    </div>
                }
            </div>
        )   
    }
}

const mapStateToProps = (state, props) => {
    return {
        account: state.accounts.find((account) => account.id === props.match.params.id),
    }
}

export default withRouter(connect(mapStateToProps)(TransactionListItem));