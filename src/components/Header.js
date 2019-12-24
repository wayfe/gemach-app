import React from "react";
import {Link} from "react-router-dom";
import {startLogout} from "../actions/auth";
import {connect} from "react-redux";

export const Header = ({startLogout}) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link to="/dashboard"><p>Dashboard</p></Link>
                <Link to="/accounts/create"><p>Add New Account</p></Link>
                <Link to="/transactions/create"><p>Add New Transactions</p></Link>
                <Link to="/reconciliation"><p>Reconciliation</p></Link>
                <button className="logout-button" onClick={startLogout}>Logout</button>  
            </div> 
        </div>     
    </header>
)

const mapDispatchToProps = (dispatch, props) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);