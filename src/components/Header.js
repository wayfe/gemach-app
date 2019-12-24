import React from "react";
import {NavLink} from "react-router-dom";
import {startLogout} from "../actions/auth";
import {connect} from "react-redux";

export const Header = ({startLogout}) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <NavLink to="/dashboard" activeClassName="is-active"><p>Dashboard</p></NavLink>
                <NavLink to="/accounts/create" activeClassName="is-active"><p>Add New Account</p></NavLink>
                <NavLink to="/transactions/create" activeClassName="is-active"><p>Add New Transactions</p></NavLink>
                <NavLink to="/reconciliation" activeClassName="is-active"><p>Reconciliation</p></NavLink>
                <button className="logout-button" onClick={startLogout}>Logout</button>  
            </div> 
        </div>     
    </header>
)

const mapDispatchToProps = (dispatch, props) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);