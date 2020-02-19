import React from "react";
import ToggleCollapseBar from "../ToggleCollapseBar";
import {connect} from "react-redux";


const AccountDetailPage = (props) => (
    <div>
                <ToggleCollapseBar 
                    title={props.account.name}
                    tag="AccountInfo"
                />
                
                <ToggleCollapseBar 
                    title="Balance"
                    tag="Balance"
                />

                <ToggleCollapseBar 
                    title="Add Transactions"
                    tag="AddTransactionPage"
                />

                {props.account.transactions.length > 0 &&
                    <ToggleCollapseBar 
                        title="Transactions"
                        tag="TransactionList"
                    />
                } 
    </div>
)

const mapStateToProps = (state, props) => {
    return {
        account: state.accounts.find((account) => account.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(AccountDetailPage);


