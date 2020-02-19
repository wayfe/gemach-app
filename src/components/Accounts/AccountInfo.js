import React from "react";
import AccountForm from "./AccountForm";
import {startEditAccount} from "../../actions/accounts";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";

class AccountInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: false
        }
    }

    onEditAccount = () => {
        this.setState(() => ({
            clicked: true
        }))
    }

    onSubmit = (account) => {
        this.props.dispatch(startEditAccount(this.props.account.id, account));
        this.setState(() => ({
            clicked: false
        }))
    }

    render () {
        return (
            <div>
                {this.state.clicked === false ?
                    <div>
                        <p>{this.props.account.name}</p>
                        <p>{this.props.account.phoneNum}</p>
                        <p>{this.props.account.address}</p>
                        {this.props.account.address2 && <p>{this.props.account.address2}</p>}
                        <p>{this.props.account.city}</p>
                        <p>{this.props.account.state}</p>
                        <p>{this.props.account.zip}</p>
                        <button
                            onClick={this.onEditAccount}
                        >edit account info</button>
                    </div> 
                    :
                    <AccountForm 
                        account={this.props.account}
                        onSubmit={this.onSubmit}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        account: state.accounts.find((account) => account.id === props.match.params.id)
    };
};

export default withRouter(connect(mapStateToProps)(AccountInfo));

