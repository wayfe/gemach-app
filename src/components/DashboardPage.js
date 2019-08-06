import React from "react";
import DataListFilters from "./Filters/DataListFilters";
import AccountList from "./Accounts/AccountList";
import Balance from "./Balance";

const DashboardPage = () => (
    <div>
        <Balance />
        <DataListFilters 
            activeFilters={["text"]}
        />
        <AccountList />
    </div>
);

export default DashboardPage;