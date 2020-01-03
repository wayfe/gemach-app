import React from "react";
import {connect} from "react-redux";
import AccountForm from "./AccountForm";
import { startAddAccount } from "../../actions/accounts";
import uuid from "uuid";

const AddAccountPage = (props) => (
    <div className="content-container">
        <div className="toggle-collapse">
            <h3>Add Account:</h3>
        </div>
        <div className="content-box">
            <div className="content-box__text">
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