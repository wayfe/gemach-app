import selectAccounts from "../../selectors/accounts";

import accounts from "../fixtures/accounts";

test("should filter by text value", () => {
    const filters = {
        text: "a",
    };
    const result = selectAccounts(accounts, filters);
    expect(result).toEqual(
        [accounts[0], accounts[2]]
    );
});

