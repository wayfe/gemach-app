import React from "react";
import DataListFilters from "../Filters/DataListFilters";
import ReconciliationList from "./ReconciliationList";
import Balance from "../Balance";
import { connect } from "react-redux";
import {getBal, getPendingBal} from "../../selectors/balance";
import selectAccounts from "../../selectors/accounts";


const ReconciliationPage = (props) => (
    <div>
        <DataListFilters 
            activeFilters={["text", "transactionFilters"]}
        />
        <ReconciliationList 
            accounts={props.accounts}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        accounts: selectAccounts(state.accounts, state.filters)
    }
}

export default connect(mapStateToProps)(ReconciliationPage);
