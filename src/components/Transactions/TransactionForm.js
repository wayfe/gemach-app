import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import uuid from "uuid";
import moment from "moment";
import {SingleDatePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class TransactionForm extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: props.transaction ? props.transaction.id : uuid(),
            payType: props.transaction ? props.transaction.payType : "check",
            checkNo: props.transaction ? props.transaction.checkNo : "",
            disabled: props.transaction && props.transaction.payType === "cash" ? "disabled" : false,
            date: props.transaction ? moment(props.transaction.date) : moment(),
            amount: props.transaction ? (props.transaction.amount / 100).toString() : "",
            note: props.transaction ? props.transaction.note : "",
            calendarFocused: false,
            buttonText: this.props.buttonText,
            isCleared: props.transaction ? props.transaction.isCleared : false,
            clicked: false
        }

    }

    passToParent = (inputName, inputValue) => {
        this.props.onChange && 
        this.props.onChange({key: inputName, value: inputValue})
    }
    
    onPayTypeChange = (e) => {
        e.persist();
        const promise = new Promise((resolve) => {
            resolve(this.setState((prevState)=> ({
                payType: e.target.value,
                checkNo: "",
                disabled: !prevState.disabled,
                isCleared: !prevState.isCleared
            })))
        });
        promise.then(() => {
            this.passToParent("payType", e.target.value)
        });
    }

    onCheckNoChange = (e) => {
        const num = e.target.value;

        if (!num || num.match(/^[0-9\b]+$/)) {
            this.setState(() => ({checkNo : num}));
            this.passToParent("checkNo", num);
        }
    }

    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }

        this.passToParent("amount", amount);
    }

    onInputChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        
        const promise = new Promise((resolve) => {
            resolve(this.setState(() => ({ [inputName] : inputValue })))
        });
        promise.then(() => {
            this.passToParent(inputName, inputValue)
        });
    }

    onDateChange = (date) => {
        if (date) {
            this.setState(() =>({date}));      
        }
        this.passToParent("date", date.valueOf());
    }
    
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    }

    onClick = () => {
        this.setState(() => ({clicked : true}))

        if (this.state.amount && this.state.payType === "cash" || this.state.checkNo) {

            const transaction = {
                id: this.state.id, 
                amount: parseFloat(this.state.amount, 10) *100,
                note: this.state.note,
                date: this.state.date.valueOf(),
                type: this.props.transaction ? this.props.transaction.type : this.props.type,
                payType: this.state.payType,
                isCleared: this.state.isCleared,
                checkNo: this.state.checkNo
            }
            
            this.props.onSubmit(transaction);
        }
    }
    
    render() {
        return (
            <div>
                <select onChange={this.onPayTypeChange} defaultValue={this.state.payType}>
                    <option value="check">check</option>
                    <option value="cash">cash</option>
                </select>

                {(this.state.clicked || this.props.clicked) && (!this.state.checkNo && this.state.payType) === "check" && <p>required field!</p>}
                <input 
                    type="text"
                    name="checkNo"
                    placeholder="check #"
                    value={this.state.checkNo}
                    disabled={this.state.disabled}
                    onChange={this.onCheckNoChange}
                />

                {(this.state.clicked || this.props.clicked) && this.state.amount === "" && <p>required field!</p>}
                <input 
                    type="text" 
                    placeholder="Amount" 
                    name="amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker
                    date={this.state.date}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea 
                    name="note"
                    placeholder="Add Notes (optional)"
                    value={this.state.note}
                    onChange={this.onInputChange}
                ></textarea>
                {this.state.buttonText && <button
                    onClick={this.onClick}
                >{this.state.buttonText}</button>
                } 
            </div>
        );
    }
}

export default withRouter(connect()(TransactionForm));


