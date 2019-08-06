import { addAccount, editAccount, removeAccount } from "../../actions/accounts";

test("should set up remove account action object", () => {
    const action = removeAccount({id: "123abc"});
    expect(action).toEqual({
        type: "REMOVE_ACCOUNT",
        id: "123abc"
    });
});

test("should set up edit account action object", () => {
    const action = editAccount("123abc", {name: "new name value"});
    expect(action).toEqual({
        type: "EDIT_ACCOUNT",
        id: "123abc",
        updates: {name: "new name value"}
    });
});

test("should set up add account action object with provided values", () => {
    const accountData = {
        name: "Katz",
        phoneNum: 3473880059,
        address: "123",
        address2: "yada",
        city: "Brooklyn",
        state: "NY",
        zip: 11219, 
    }
    const action = addAccount(accountData);
    expect(action).toEqual({
        type: "ADD_ACCOUNT",
        account: {
            ...accountData, 
            id: expect.any(String),
            transactions: []
        }
    });
});

test("should set up add account action object with default values", () => {
    const action = addAccount();
    expect(action).toEqual({
        type: "ADD_ACCOUNT",
        account: {
            name = "", 
            phoneNum= "", 
            address = "", 
            address2 = "",
            city = "",
            state = "",
            zip = "",
            transactions = [],
            id: expect.any(String),
        }
    })
})
