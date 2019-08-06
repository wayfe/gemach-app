import accountsReducer from "../../reducers/accounts";

import accounts from "../fixtures/accounts";

test("should set default state", () => {
    const state = accountsReducer(undefined, {type: "@@INIT"});
    expect(state).toEqual([]);
});

test("should remove account by id", () => {
    const action = {type: "REMOVE_ACCOUNT", id: accounts[1].id};
    const state = accountsReducer(accounts, action);
    expect(state).toEqual([accounts[0], accounts[2]]);
})

test("should edit account by id", () => {
    const updates = {name: "Wieselthier"}
    const action = {type: "EDIT_ACCOUNT", id: accounts[1].id, updates};
    const state = accountsReducer(accounts, action);
    expect(state[1]).toEqual({
        ...accounts[1], name: updates.name
    });
})

test("should not edit other accounts", () => {
    const updates = {name: "Wieselthier"}
    const action = {type: "EDIT_ACCOUNT", id: "8889", updates};
    const state = accountsReducer(accounts, action);
    expect(state).toEqual(accounts);
})

test("should add account", () => {
    const account = accounts[2];
    const currentState = [accounts[0], accounts[1]]
    const action = {type: "ADD_ACCOUNT", account};
    const state = accountsReducer(currentState, action);
    expect(state).toEqual([
        accounts[0], accounts[1], accounts[2]
    ]);
})

