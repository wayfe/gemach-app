import React from "react";
import {connect} from "react-redux";
import AccountListItem from "./AccountListItem";
import selectAccounts from "../../selectors/accounts";

export const AccountList = (props) => (
    <div>
        {props.accounts.length < 1 ? <p>No Accounts</p> : props.accounts.map((account) => 
            <AccountListItem key={account.id} account={account} />
        )}
    </div>
);

const mapStateToProps = (state) => {
    return {
        accounts: selectAccounts(state.accounts, state.filters)
    }
};

export default connect(mapStateToProps)(AccountList);



