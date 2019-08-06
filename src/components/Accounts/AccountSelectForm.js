import React from "react";
import {connect} from 'react-redux';
import selectAccounts from "../../selectors/accounts";
import DataListFilters from "../Filters/DataListFilters";

class AccountSelectForm extends React.Component {

    onChange = (e) => {
        const accountId = e.target.value;
        this.props.onAccountSelect(accountId);
    }

    render() {
        return (      
            <div>
               <DataListFilters
                    activeFilters={["text"]}
                />
                <select
                    onChange={this.onChange}
                >
                    <option>Select Account</option>
                    {this.props.accounts.map((account) => 
                        <option 
                            value={account.id}
                            key={account.id}
                        >{account.name}</option>
                    )}
                </select>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        accounts: selectAccounts(state.accounts, state.filters)
    }
}

export default connect(mapStateToProps)(AccountSelectForm)