import React from "react";
import AccountSelectForm from "../Accounts/AccountSelectForm";
import TransactionForm from "./TransactionForm";

class BulkTransactionsForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: false,
            updatedInfo: {
                key: "",
                value: "",
            }
        }
    }

    onAccountSelect = (accountId) => {
        const promise = new Promise((resolve) => {
            resolve(this.setState(() => ({updatedInfo: {key: "accountId", value: accountId}})));
        });

        promise.then(() => {
            this.props.onTransactionChange({...this.state.updatedInfo, id: this.props.id});
        });
    }

    onChange = (updatedInfo) => {
        const promise = new Promise((resolve) => {
            resolve(this.setState(() => ({updatedInfo: updatedInfo })));
        });
        promise.then(() => {
            this.props.onTransactionChange({...this.state.updatedInfo, id: this.props.id});
        })
    }

    AddTransactionForm = () => {
        this.setState(()=> ({
            clicked: true
        }));
        this.props.onAddTransactionForm()
    }

    onDeleteForm = () => {
        this.props.onDeleteForm(this.props.id);
    }

    render() {
        return (
            <div>
                <AccountSelectForm 
                    onAccountSelect={this.onAccountSelect}
                />
                <TransactionForm 
                    onChange={this.onChange}
                />
                <button
                    onClick={this.onDeleteForm}
                >delete</button>
                {this.state.clicked === false && <button
                    onClick={this.AddTransactionForm}
                >Add Another Transaction</button>
                }
            </div>
        )
    }
}  
   
export default BulkTransactionsForm;
