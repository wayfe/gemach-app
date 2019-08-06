import React from "react";
import {connect} from "react-redux";
import {setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate, setTypeFilter} from "../../actions/filters";
import {DateRangePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class DataListFilters extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            activeFilters: props.activeFilters,
            calendarFocused: null,
            checked: {
                deposit: true,
                withdrawal: true
            }
        }
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    }

    onSortChange = (e) => {
        if (e.target.value === 'date') {
          this.props.sortByDate();
        } else if (e.target.value === 'amount') {
          this.props.sortByAmount();
        }
    }

    onTypeFilter = (e) => {
        const transactionType = e.target.value;
        const promise = new Promise((resolve) => {
            resolve(this.setState(() => ({
                checked: {...this.state.checked, [transactionType]: !this.state.checked[transactionType]}
            })))
        })
        promise.then(() => {
            this.props.setTypeFilter(this.state.checked);
        })
    }

    render() {
        return (
            <div>
                {this.state.activeFilters.includes("text") && 
                    <input 
                        type="text" 
                        value={this.props.filters.text} 
                        onChange={(e) => {this.props.setTextFilter(e.target.value);}}
                        placeholder="search by name"
                    />
                }    
                {this.state.activeFilters.includes("transactionFilters") &&
                    <div>
                        <select 
                            value={this.props.filters.sortBy} 
                            onChange={this.onSortChange}
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                        <DateRangePicker 
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                        />
                        <input type="checkbox" name="transactionType" value="deposit" defaultChecked onClick={this.onTypeFilter}/>
                        <label htmlFor="deposit">deposits</label>
                        <input type="checkbox" name="transactionType" value="withdrawal" defaultChecked onClick={this.onTypeFilter}/>
                        <label htmlFor="deposit">withdrawals</label>
                    </div>
                }
            </div> 
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});
  
const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTypeFilter: (transactionType) => dispatch(setTypeFilter(transactionType))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(DataListFilters);
