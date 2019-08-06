import React from "react";
import {Router, Route, Switch, Link, NavLink} from "react-router-dom";
import LoginPage from "../components/LoginPage";
import DashboardPage from "../components/DashboardPage";
import AddAccountPage from "../components/Accounts/AddAccountPage";
import AccountDetailPage from "../components/Accounts/AccountDetailPage";
import NotFoundPage from "../components/NotFoundPage";
import ReconciliationPage from "../components/reconciliation/ReconciliationPage";
import BulkTransactionsPage from "../components/Transactions/BulkTransactionsPage";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage}/>
                <PrivateRoute path="/transactions/create" component={BulkTransactionsPage}/>
                <PrivateRoute path="/accounts/create" component={AddAccountPage} />
                <PrivateRoute path="/accounts/:id" component={AccountDetailPage} />
                <PrivateRoute path="/reconciliation" component={ReconciliationPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;