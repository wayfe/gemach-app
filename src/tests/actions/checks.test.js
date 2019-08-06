import { addCheck, removeCheck, clearChecks } from "../../actions/checks";

test("should set up addCheck action object", () => {
    const action  = addCheck({id: "someId"})
    expect(action).toEqual({
        type: "ADD_CHECK",
        id: "someId"
    })
});

test("should set up removeCheck action object", () => {
    const action  = removeCheck({id: "someId"})
    expect(action).toEqual({
        type: "REMOVE_CHECK",
        id: "someId"
    })
});

test("should set up clearCheck action object", () => {
    const action  = clearChecks({})
    expect(action).toEqual({
        type: "CLEAR_CHECKS",
    })
});