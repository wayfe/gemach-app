import React from "react";
import BulkTransactionsForm from "./BulkTransactionsForm";
import uuid from "uuid";
import {connect} from "react-redux";
import {startAddTransaction} from "../../actions/accounts";
import moment from "moment";

const defaultTransaction = () => ({id: uuid(), date: moment().valueOf(), payType: "check", isCleared: false});

class BulkTransactionPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bulkTransactions: [defaultTransaction()],
            type: "deposit"
        }
    }

    onAddTransactionForm = () => {
        this.setState(()=> ({
            bulkTransactions: [...this.state.bulkTransactions, defaultTransaction()]
        }));
    }

    onTransactionChange = (updatedInfo) => {
        const key = updatedInfo.key;
        const value = updatedInfo.value;
        this.setState(() => ({
            bulkTransactions: this.state.bulkTransactions.map((transaction) => {
                if (transaction.id === updatedInfo.id) {
                    if (key === "payType") {
                        delete transaction.checkNo
                        return {...transaction, [key]: value, isCleared: !transaction.isCleared}
                    }
                    return {
                        ...transaction, [key]: value
                    };   
                } else {
                    return transaction
                }
            })
        }));
    }

    onTypeChange = (e) => {
        const type = e.target.value;
        this.setState(() => ({type}))
    }

    onDeleteForm = (id) => {
        if (this.state.bulkTransactions.length === 1) {
            this.setState(() => ({bulkTransactions: [defaultTransaction()]}))
        } else {
            this.setState((prevState) => ({
                bulkTransactions: prevState.bulkTransactions.filter((transaction) => transaction.id !== id)
            }))
        }
    }

    render() {
        return (
            <div>
                <select onChange={this.onTypeChange}>
                    <option value="deposit">deposits</option>
                    <option value="withdrawal">withdrawals</option>
                </select>
                {this.state.bulkTransactions.map((transaction) =>
                    <BulkTransactionsForm
                        onAddTransactionForm={this.onAddTransactionForm}
                        onTransactionChange={this.onTransactionChange}
                        onDeleteForm={this.onDeleteForm} 
                        key={transaction.id}
                        id={transaction.id}
                    />
                )}
                <button
                    onClick={() => {
                        this.state.bulkTransactions
                        .reduce((promiseChain, transaction) => promiseChain.then(
                            () => this.props.dispatch(startAddTransaction(
                                    transaction.accountId, 
                                    {...transaction, type: this.state.type, amount: parseFloat(transaction.amount, 10)*100}
                                )
                            )
                        ), Promise.resolve());
                        this.setState(() => ({
                            bulkTransactions: [defaultTransaction()]
                        }))
                    }}
                >
                    Submit {this.state.bulkTransactions.length > 0 
                    && this.state.bulkTransactions.length} Transaction{this.state.bulkTransactions.length !== 1 && "s"}
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {

    return {accounts: state.accounts}
}

export default connect(mapStateToProps)(BulkTransactionPage);


