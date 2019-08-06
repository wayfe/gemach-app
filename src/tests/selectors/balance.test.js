import { getBal, getPendingBal } from "../../selectors/balance";

import accounts from "../fixtures/accounts";

const transactions = accounts[0].transactions;

test("should return total balance", () => {
    const result = getBal(transactions);
    expect(result).toEqual(
        22000
    );
});

test("should return pending balance", () => {
    const result = getPendingBal(transactions);
    expect(result).toEqual(
        14000
    );
});
