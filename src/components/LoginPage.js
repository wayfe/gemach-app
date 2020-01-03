import React from "react";
import LoginForm from "./LoginForm";

export const LoginPage = (props) => (
    <div className="login-page">
        <div className="box-layout">
            <div className="box-layout__box">
                <LoginForm />
            </div>
        </div>
    </div>
);

export default LoginPage;
