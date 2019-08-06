import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
    const state = filtersReducer(undefined, {type : "@@INIT"});
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month"),
        transactionType: {deposit: true, withdrawal: true}
    });
});

test("should setup sort by value to = amount", () => {
    const state = filtersReducer(undefined, {type : "SORT_BY_AMOUNT"});
    expect(state.sortBy).toBe("amount");
});

test("should setup sort by value to = date", () => {
    const currentState = {
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month"),
        transactionType: {deposit: true, withdrawal: true}
    }
    const action = {type: "SORT_BY_DATE"}
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe("date");
});

test("should setup filter by text", () => {
    const currentState = {
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month"),
        transactionType: {deposit: true, withdrawal: true}
    }
    const text = "sample text"
    const action = {type : "SET_TEXT_FILTER", text}
    const state = filtersReducer(currentState, action);
    expect(state.text).toEqual(text);
});

test("should setup filter by startDate", () => {
    const currentState = {
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month"),
        transactionType: {deposit: true, withdrawal: true}
    }
    const startDate = moment(0).add(2, "months");
    const action = {type : "SET_START_DATE", startDate}
    const state = filtersReducer(currentState, action);
    expect(state.startDate).toEqual(moment(0).add(2, "months"));
});

test("should setup filter by endDate", () => {
    const currentState = {
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month"),
        transactionType: {deposit: true, withdrawal: true}
    }
    const endDate = moment(0).add(2, "days");
    const action = {type : "SET_END_DATE", endDate}
    const state = filtersReducer(currentState, action);
    expect(state.endDate).toEqual(moment(0).add(2, "days"));
});

test("should setup filter by transaction type", () => {
    const currentState = {
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month"),
        transactionType: {deposit: true, withdrawal: true}
    }
    const transactionType = "deposit";
    const action = {type : "SET_TYPE_FILTER", transactionType}
    const state = filtersReducer(currentState, action);
    expect(state).toEqual(
        {
            text: "",
            sortBy: "date",
            startDate: moment().startOf("month"),
            endDate: moment().endOf("month"),
            transactionType: transactionType
        }
    );
});