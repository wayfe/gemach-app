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
            error: []
        }
    }

    onNameChange = (e) => {
        const re = /^([^0-9]*)$/;

        const inputValue = e.target.value;

        const inputName = e.target.name;

        if (!inputValue || re.test(inputValue)) {
            this.setState(() => ({[inputName] : inputValue}));
        }

    }

    onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(() => ({[name] : value}));
    }

    onNumChange = (e) => {

        const re = /^[0-9\b]+$/;

        const name = e.target.name;
        
        const num = e.target.value;

        if (!num || re.test(num)) {
            this.setState(() => ({ [name] : num }));
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        const phoneRegex = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;

        const error = [];
        
        ["name", "phoneNum", "address", "city", "state", "zip"].forEach((input) => {
            if (input === "phoneNum" && !phoneRegex.test(this.state.phoneNum)) {
                error.push(input)
            } else if (!this.state[input]) {
                error.push(input)
            }
        });

        if (error.length > 0) {
            this.setState(() => ({error : error, errorMessage: "hmmm, something looks wrong here..."}));
        } else {
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
    }

    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error.includes("name") && <p>{this.state.errorMessage}</p>}
                    <input 
                        type="text"
                        placeholder="name"
                        name="name"
                        autoFocus
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />

                    {this.state.error.includes("phoneNum") && <p>{this.state.errorMessage}</p>}
                    <input 
                        type="text"
                        placeholder="phone"
                        name="phoneNum"
                        value={this.state.phoneNum}
                        onChange={this.onNumChange}
                    />

                    {this.state.error.includes("address") && <p>{this.state.errorMessage}</p>}
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

                    {this.state.error.includes("city") && <p>{this.state.errorMessage}</p>}
                    <input 
                        type="text"
                        placeholder="city"
                        name="city"
                        value={this.state.city}
                        onChange={this.onNameChange}
                    />

                    {this.state.error.includes("state") && <p>{this.state.errorMessage}</p>}
                    <input 
                        type="text"
                        placeholder="state"
                        name="state"
                        value={this.state.state}
                        onChange={this.onNameChange}
                    />

                    {this.state.error.includes("zip") && <p>{this.state.errorMessage}</p>}
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


