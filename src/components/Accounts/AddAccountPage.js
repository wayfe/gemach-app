import React from "react";
import {connect} from "react-redux";
import AccountForm from "./AccountForm";
import { addAccount, startAddAccount } from "../../actions/accounts";
import uuid from "uuid";

const AddAccountPage = (props) => (
    <AccountForm 
        onSubmit={(account) => {
            const newAccount = {id: uuid(), ...account}
            props.dispatch(startAddAccount(newAccount)).then(() => {
                props.history.push(`/accounts/${newAccount.id}`)
            }) 
        }}
    />
);

export default connect()(AddAccountPage);