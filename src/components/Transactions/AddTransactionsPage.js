import React from "react";
import TransactionForm from "./TransactionForm";
import {connect} from "react-redux";
import { getBal } from "../../selectors/balance";
import {startAddTransaction} from "../../actions/accounts";


class AddTransactionsPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            type: undefined
        }
    }

    onClick = (e) => {
        const type = e.target.className;
        this.setState(() => ({type}));
    }

    render() {
        return (
            <div>
                {!this.state.type ? 
                    <div>
                        <button
                            className="deposit"
                            onClick={this.onClick}
                        >
                            {this.props.totalBalance >= 0 ? "Add Funds" : "Add Payment"}
                        </button>
                        {this.props.totalBalance >= 0 && 
                            <button
                                className="withdrawal"
                                onClick={this.onClick}
                            >
                                {this.props.totalBalance === 0 ? "Add Loan" : "Withdraw Funds"}
                            </button>
                        }
                    </div>
                    :
                    <TransactionForm 
                        type={this.state.type}
                        buttonText="submit"
                        onSubmit={(transactionObj) => {
                            console.log(transactionObj);
                            this.props.dispatch(startAddTransaction(this.props.account.id, transactionObj));
                            this.setState(() => ({
                                type: undefined
                            }));
                            }
                        } 
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const transactions = props.account.transactions;

    return {
        totalBalance: getBal(transactions),
    }
}

export default connect(mapStateToProps)(AddTransactionsPage);
