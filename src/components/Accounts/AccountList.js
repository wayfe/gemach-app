import React from "react";
import {connect} from "react-redux";
import AccountListItem from "./AccountListItem";
import selectAccounts from "../../selectors/accounts";
import DataListFilters from "../Filters/DataListFilters";

export const AccountList = (props) => (
    <div>
        <DataListFilters activeFilters={["text"]}/>
        <div className="item-list">
            {props.accounts.length < 1 ? <p>No Accounts</p> : props.accounts.map((account) => 
                <AccountListItem key={account.id} account={account} />
            )}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        accounts: selectAccounts(state.accounts, state.filters)
    }
};

export default connect(mapStateToProps)(AccountList);



