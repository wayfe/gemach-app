import moment from "moment";
import { 
    setTextFilter, 
    sortByAmount, 
    sortByDate, 
    setEndDate, 
    setStartDate,
    setTypeFilter 
} from "../../actions/filters";

test("Should set up text filter action object", () => {
    const text = "sample text"
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text
    })
});

test("Should set up sortByAmount action object", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    })
});

test("Should set up sortByDate action object", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })
});

test("Should set up setEndDate action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    })
});

test("Should set up setStartDate action object", () => {
    const action= setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    })
});

test("Should set up setTypeFilter action object", () => {
    const action= setTypeFilter("deposit");
    expect(action).toEqual({
        type: "SET_TYPE_FILTER",
        transactionType: "deposit"
    })
});
