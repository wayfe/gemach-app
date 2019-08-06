import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import uuid from "uuid";
import moment from "moment";
import {SingleDatePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class TransactionForm extends React.Component {
    constructor(props) {
        super(props);
    
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
            isCleared: props.transaction ? props.transaction.isCleared : false
        }
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
            this.props.onChange &&
            this.props.onChange({key: "payType", value: e.target.value})
        });
    }

    onInputChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        
        const promise = new Promise((resolve) => {
            resolve(this.setState(() => ({ [inputName] : inputValue })))
        });
        promise.then(() => {
            this.props.onChange && 
            this.props.onChange({key: inputName, value: inputValue})
        });
    }

    onDateChange = (date) => {
        if (date) {
            this.setState(() =>({date}));      
        }
        this.props.onChange && this.props.onChange({key: "date", value: date.valueOf()});
    }
    
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    }

    onClick = () => {
        const transaction = {
            id: this.state.id, 
            amount: parseFloat(this.state.amount, 10) *100,
            note: this.state.note,
            date: this.state.date.valueOf(),
            type: this.props.transaction ? this.props.transaction.type : this.props.type,
            payType: this.state.payType,
            isCleared: this.state.isCleared
        }
        
        const transactionObj = transaction.payType === "cash" ? transaction
        : {...transaction, checkNo: this.state.checkNo}
    
        this.props.onSubmit(transactionObj);
    }
    
    render(props) {
        return (
            <div>
                <select onChange={this.onPayTypeChange} defaultValue={this.state.payType}>
                    <option value="check">check</option>
                    <option value="cash">cash</option>
                </select>
                <input 
                    type="text"
                    name="checkNo"
                    placeholder="check #"
                    value={this.state.checkNo}
                    disabled={this.state.disabled}
                    onChange={this.onInputChange}
                />
                <input 
                    type="text" 
                    placeholder="Amount" 
                    name="amount"
                    value={this.state.amount}
                    onChange={this.onInputChange}
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


