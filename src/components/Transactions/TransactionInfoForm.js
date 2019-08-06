import moment from "moment";
import {SingleDatePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import React from "react";
import numeral from 'numeral';

export default class TransactionInfoForm extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            note: props.transaction ? props.transaction.note : '',
            amount: props.transaction ? (props.transaction.amount / 100).toString() : '',
            date: props.transaction ? moment(props.transaction.date) : moment(),        
            calendarFocused: false,
        }

    }
    
    onInputChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        
        const promise = new Promise((resolve) => {
            resolve(this.setState(() => ({ [inputName] : inputValue })))
        });
        promise.then(() => {
            this.props.onChange({key: [inputName], value: inputValue});
        });
        
    }

    onDateChange = (date) => {
        if (date) {
            this.setState(() =>({date}));      
        }
        this.props.onChange({key: "date", value: date.valueOf()});
    }
    
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    }
    
    render(props) {
        return (
            <div>
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
            </div>
        )
    }
}




