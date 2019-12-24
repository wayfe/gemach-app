import React from "react";
import {connect} from "react-redux";
import AccountForm from "./AccountForm";
import { addAccount, startAddAccount } from "../../actions/accounts";
import uuid from "uuid";

const AddAccountPage = (props) => (
    <div className="content-container">
        <div className="content-box">
            <div className="content-box__text">
                <h1 className="content-box_title">Add Account:</h1>
                <AccountForm 
                    onSubmit={(account) => {
                        const newAccount = {id: uuid(), ...account}
                        props.dispatch(startAddAccount(newAccount)).then(() => {
                            props.history.push(`/accounts/${newAccount.id}`)
                        }) 
                    }}
                />
            </div>
        </div>
    </div>
);

export default connect()(AddAccountPage);