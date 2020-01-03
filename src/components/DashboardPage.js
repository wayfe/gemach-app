import React from "react";
import DataListFilters from "./Filters/DataListFilters";
import AccountList from "./Accounts/AccountList";
import Balance from "./Balance";
import ToggleCollapseBar from "./ToggleCollapseBar";

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }
    }

    onClick = () => {
        this.setState((prevState) => ({clicked: !prevState.clicked}))
    }

    render () {
        return (
            <div>
                <Balance />
                
                <div className="content-container">
                <ToggleCollapseBar 
                    title="Accounts"
                    onClick={this.onClick}
                />
                { !this.state.clicked &&
                    <div className="content-box">
                        <div className="content-box__text">
                            <DataListFilters 
                                activeFilters={["text"]}
                            />
                            <AccountList />
                        </div>
                    </div>
                }
                </div>
            </div>
        )
    }
}

export default DashboardPage;