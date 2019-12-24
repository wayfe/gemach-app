import React from "react";
import DataListFilters from "./Filters/DataListFilters";
import AccountList from "./Accounts/AccountList";
import Balance from "./Balance";

const DashboardPage = () => (
    <div>
        <Balance />
        <div className="content-container">
            <div className="content-box">
                <div className="content-box__text">
                    <DataListFilters 
                        activeFilters={["text"]}
                    />
                    <AccountList />
                </div>
            </div>
        </div>
    </div>
);

export default DashboardPage;