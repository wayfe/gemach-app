import React from "react";
import ToggleCollapseBar from "./ToggleCollapseBar";

const DashboardPage = () => (
    <div>
        <ToggleCollapseBar
            title="Balance"
            tag="Balance"
        />
        <ToggleCollapseBar
            title="Accounts"
            tag="AccountList"
        />
    </div>
);

export default DashboardPage;
