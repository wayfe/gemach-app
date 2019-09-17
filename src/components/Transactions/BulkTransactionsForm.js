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
            },
            validAmount: false,
            validAccountId: false,
            validCheckNo: false,
            removeButton: false
        }
    }

    onAccountSelect = (accountId) => {
        const promise = new Promise((resolve) => {
            resolve(this.setState(() => ({
                updatedInfo: {key: "accountId", value: accountId}, 
                validAccountId: true
            })));
        });

        promise.then(() => {
            this.props.onTransactionChange({...this.state.updatedInfo, id: this.props.id});
        });
    }

    onChange = (updatedInfo) => {
        const key = "valid" + updatedInfo.key.slice(0, 1).toUpperCase() + updatedInfo.key.slice(1);

        if (updatedInfo.key === "payType") {
            this.setState((prevState) => ({validCheckNo : !prevState.validCheckNo}))
        } else if (updatedInfo.key === "amount" || updatedInfo.key === "checkNo") {
            if (updatedInfo.value === "") {
                this.setState(() => ({[key]: false}));
            } else {
                this.setState(() => ({[key] : true}));
            }
        } 

        const promise = new Promise((resolve) => {
            resolve(this.setState(() => ({updatedInfo: updatedInfo })));
        });
        promise.then(() => {
            this.props.onTransactionChange({...this.state.updatedInfo, id: this.props.id});
        })
    }

    AddTransactionForm = () => {
        this.setState(() => ({clicked: true}));

        if (this.state.validAccountId && this.state.validAmount && this.state.validCheckNo) {
            this.setState(() => ({removeButton: true}));
            this.props.onAddTransactionForm(this.state.requiredFields);
        }
    }

    onDeleteForm = () => {
        this.props.onDeleteForm(this.props.id);
    }

    render() {
        return (
            <div>
                {this.state.clicked && !this.state.validAccountId && <p>required field!</p> }
                <AccountSelectForm 
                    onAccountSelect={this.onAccountSelect}
                />
                <TransactionForm 
                    onChange={this.onChange}
                    clicked={this.state.clicked}
                />
                <button
                    onClick={this.onDeleteForm}
                >delete</button>
                {!this.state.removeButton && <button
                    onClick={this.AddTransactionForm}
                >Add Another Transaction</button>
                }
            </div>
        )
    }
}  
   
export default BulkTransactionsForm;
