import selectTransactions from "../../selectors/transactions";
import moment from "moment";

import accounts from "../fixtures/accounts";

const transactions = accounts[0].transactions;

test("should filter by dates", () => {
    const filters = {
        sortBy: "date",
        startDate: undefined,
        endDate: moment(0).add(2, "days"),
        transactionType: {deposit : true, withdrawal: true}
    }
    const result = selectTransactions(transactions, filters);
    expect(result).toEqual(
        [
            transactions[1]
        ]
    );
});

test("should sort by date", () => {
    const filters = {
        sortBy: "date",
        startDate: undefined,
        endDate: undefined,        
        transactionType: {deposit : true, withdrawal: true}
    }
    const result =  selectTransactions(transactions, filters);
    expect(result).toEqual(
        [
            transactions[2], transactions[0], transactions[1]
        ]
    );
});

test("should sort by amount", () => {
    const filters = {
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined,
        transactionType: {deposit : true, withdrawal: true}
    }
    const result =  selectTransactions(transactions, filters);
    expect(result).toEqual(
        [
            transactions[2], transactions[1], transactions[0]
        ]
    );
});