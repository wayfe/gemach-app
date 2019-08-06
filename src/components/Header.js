import React from "react";
import {NavLink} from "react-router-dom";
import {startLogout} from "../actions/auth";
import {connect} from "react-redux";

export const Header = ({startLogout}) => (
    <header>
        <h1>Gemach App</h1>
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard </NavLink>
        <br/>
        <NavLink to="/accounts/create" activeClassName="is-active">Add New Account</NavLink>
        <br/>
        <NavLink to="/transactions/create" activeClassName="is-active">Add New Transactions</NavLink>
        <br/>
        <NavLink to="/reconciliation" activeClassName="is-active">Reconciliation</NavLink>
        <br/>
        <button onClick={startLogout}>Logout</button>        
    </header>
)

const mapDispatchToProps = (dispatch, props) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);