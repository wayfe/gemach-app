import React from "react";

export default class AccountForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.account ? props.account.name : "",
            phoneNum: props.account ? props.account.phoneNum : "",
            address: props.account ? props.account.address : "",
            address2: props.account ? props.account.address2 : "",
            city: props.account ? props.account.city : "",
            state: props.account ? props.account.state : "",
            zip: props.account ? props.account.zip : "",
            error: ""
        }
    }

    onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(() => ({[name] : value}));
    }

    onNumChange = (e) => {
        const inputName = e.target.name;
        const num = e.target.value;
        if (num.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({[inputName] : num}));
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        // this.setState(() => ({error: undefined}));
        this.props.onSubmit({
            name: this.state.name,
            phoneNum: this.state.phoneNum,
            address: this.state.address,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        });
    }

    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="name"
                        name="name"
                        autoFocus
                        value={this.state.name}
                        onChange={this.onInputChange}
                    />
                    <input 
                        type="text"
                        placeholder="phone"
                        name="phoneNum"
                        value={this.state.phoneNum}
                        onChange={this.onInputChange}
                    />
                    <input 
                        type="text"
                        placeholder="address"
                        name="address"
                        value={this.state.address}
                        onChange={this.onInputChange}
                    />
                    <input 
                        type="text"
                        placeholder="address line 2"
                        name="address2"
                        value={this.state.address2}
                        onChange={this.onInputChange}
                    />
                    <input 
                        type="text"
                        placeholder="city"
                        name="city"
                        value={this.state.city}
                        onChange={this.onInputChange}
                    />
                    <input 
                        type="text"
                        placeholder="state"
                        name="state"
                        value={this.state.state}
                        onChange={this.onInputChange}
                    />
                    <input 
                        type="text"
                        placeholder="zip"
                        name="zip"
                        value={this.state.zip}
                        onChange={this.onNumChange}
                    />
                    <button>Save</button>
                </form>
            </div>
        );
    }
}

// if (!num || ) {
