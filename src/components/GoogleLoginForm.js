import React from "react";
import {connect} from "react-redux";
import { startGoogleLogin } from "../actions/auth";

export const GoogleLoginForm = (props) => (
    <div>
        <div className="login-buttons">
            <button className="login-button__google" onClick={props.startGoogleLogin}>
                <img className="google-logo" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzIiIGhlaWdodD0iMzIiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTg2LjAyMDk5LDc1LjU4NTk0djIyLjU5MThoMzIuMTg3MDJjLTQuMTk5MjIsMTMuNjg5NDUgLTE1LjY0MjA5LDIzLjQ5NDYzIC0zMi4xODcwMiwyMy40OTQ2M2MtMTkuNjk0MzMsMCAtMzUuNjcyMzYsLTE1Ljk3ODAzIC0zNS42NzIzNiwtMzUuNjcyMzZjMCwtMTkuNjk0MzMgMTUuOTU3MDMsLTM1LjY3MjM2IDM1LjY3MjM2LC0zNS42NzIzNmM4Ljg2MDM1LDAgMTYuOTQzODUsMy4yNTQ0IDIzLjE3OTY5LDguNjA4NGwxNi42Mjg5MSwtMTYuNjQ5OWMtMTAuNDk4MDUsLTkuNTc0MjIgLTI0LjQ4MTQ0LC0xNS40MTExNCAtMzkuODA4NTksLTE1LjQxMTE0Yy0zMi42Njk5MiwwIC01OS4xNDU5OSwyNi40NzYwNyAtNTkuMTQ1OTksNTkuMTI1YzAsMzIuNjQ4OTMgMjYuNDc2MDcsNTkuMTI1IDU5LjE0NTk5LDU5LjEyNWM0OS42MzQ3NywwIDYwLjU5NDczLC00Ni40MjIzNiA1NS43MjM2NCwtNjkuNDU1MDh6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>
                <div>{props.type.charAt(0).toUpperCase() + props.type.substring(1) + " with"}</div>&nbsp;
                <span>Google</span>
                </button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch, props) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin())
});

export default connect(undefined, mapDispatchToProps)(GoogleLoginForm);
