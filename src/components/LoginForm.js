import React from "react";
import {connect} from "react-redux";
import { startLogin, startCreateUser } from "../actions/auth";
import GoogleLoginForm from "./GoogleLoginForm";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            type: "sign in"
        }
    }

    onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(() => ({[name] : value}));
    }

    onClick = (e) => {
        const type = e.target.id;
        this.setState(() => ({type}));
    }

    onSubmit = (e) => {
        e.preventDefault();

        const email = this.state.email.toString();
        const password = this.state.password.toString();

        if (this.state.type === "sign in") {
            this.props.dispatch(startLogin(email, password));
        } else {
            this.props.dispatch(startCreateUser(email, password));
        }
    }

    render () {
        return (
            <div>
                <div className="login-signUp-buttons">
                    <div 
                        className={this.state.type === "sign in" ? "inactive" : "active"} 
                        onClick={this.onClick}
                        id="sign up"
                    >
                        Sign up
                    </div>
                    <div 
                        className={this.state.type === "sign up" ? "inactive" : "active"}
                        onClick={this.onClick}
                        id="sign in"
                    >
                        Sign in
                    </div>
                </div>
                <div className="content-box">
                    <div className="content-box__text">
                        <GoogleLoginForm type={this.state.type}/>
                        <form onSubmit={this.onSubmit}>
                            <hr/>
                            <div className="login-inputs">
                                <input 
                                type="text"
                                placeholder="email"
                                name="email"
                                autoFocus
                                value={this.state.email}
                                onChange={this.onInputChange}
                                />
                                <input 
                                type="password"
                                placeholder="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onInputChange}
                                />
                            </div>
                            <div className="login-buttons">
                                <button className="login-button__email">{this.state.type.charAt(0).toUpperCase() + this.state.type.substring(1)}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(LoginForm);


