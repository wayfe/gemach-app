import checksReducer from "../../reducers/checks";

const checks = ["123", "456", "789"]

test("should set default state", () => {
    const state = checksReducer(undefined, {type: "@@INIT"});
    expect(state).toEqual([]);
});

test("should add check", () => {
    const newCheck = "659"
    const action = {type: "ADD_CHECK", id: newCheck}
    const state = checksReducer(checks, action);
    expect(state).toEqual([...checks, newCheck]);
});

test("should remove check", () => {
    const check = "456";
    const action = {type: "REMOVE_CHECK", id: check}
    const state = checksReducer(checks, action);
    expect(state.includes(check)).toBe(false);
});

test("should clear checks", () => {
    const state = checksReducer(checks, {type: "CLEAR_CHECKS"});
    expect(state).toEqual([]);
})