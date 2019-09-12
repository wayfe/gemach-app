import database from "../firebase/firebase";


// add account redux
export const addAccount = (account) => ({
    type: "ADD_ACCOUNT",
    account,
});

// add account firebase
export const startAddAccount = (accountData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            name = "", 
            phoneNum= "", 
            address = "", 
            address2 = "",
            city = "",
            state = "",
            zip = "",
            id = ""
        } = accountData;
        const account = { name, phoneNum, address, address2, city, state, zip, transactions: [] }
        return database.ref(`/users/${uid}/accounts/${id}`).set(account).then(() => {
            dispatch(addAccount({
                id,
                ...account
            }));
        });
    };                                                                                                                       
};

// remove account
export const removeAccount = ({ id } = {}) => ({
    type: "REMOVE_ACCOUNT",
    id
});

// edit account
export const editAccount = (id, updates) => ({
    type: "EDIT_ACCOUNT",
    id,
    updates
});

// edit account firebase
export const startEditAccount = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`/users/${uid}/accounts/${id}`).update(updates).then(() => {
            dispatch(editAccount(id, updates));
        })
    }
}

// add transactions
export const addTransaction = (id, transaction) => ({
    type: "ADD_TRANSACTION",
    id,
    transaction
});


export const startAddTransaction = (accountId, transaction = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            id = "",
            amount = "",
            note = "",
            date = "",
            type = "",
            payType = "",
            checkNo = "",
            isCleared = false,
        } = transaction
        const transactionData = { amount, note, date, type, payType, isCleared, checkNo}
        return database.ref(`/users/${uid}/accounts/${accountId}/transactions/${id}`).set(transactionData)
        .then(() => {
            dispatch(addTransaction(accountId, transaction));
        });
    };
};

// remove transactions
export const removeTransaction = (accountId, transactionId) => ({
    type: "REMOVE_TRANSACTION",
    accountId,
    transactionId
});

export const startRemoveTransaction = (accountId, transactionId) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`/users/${uid}/accounts/${accountId}/transactions/${transactionId}`).set(null).then(() => {
            dispatch(removeTransaction(accountId, transactionId));
        });
    }
}

// edit transactions
export const editTransaction = (accountId, transaction) => ({
    type: "EDIT_TRANSACTION",
    accountId,
    transaction
})

export const startEditTransaction = (accountId, transaction) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`/users/${uid}/accounts/${accountId}/transactions/${transaction.id}`).update(transaction).then(() => {
            dispatch(editTransaction(accountId, transaction));
        })
    }
}

// SET_ACCOUNTS
export const setAccounts = (accounts) => ({
    type: "SET_ACCOUNTS",
    accounts
});


export const startSetAccounts = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`/users/${uid}/accounts/`).once("value").then((snapshots) => {
            const accounts = [];
            snapshots.forEach((i) => {
                const transactionArray = [] 
                const transactions = i.val().transactions;

                for (var key in transactions) {
                    transactionArray.push({...transactions[key], id: key});
                }
                    
                const account = {...i.val(), id: i.key, transactions: transactionArray}
                    
                accounts.push(account);
            });
            console.log(accounts);
            dispatch(setAccounts(accounts));
        });
    };                                                                                                                       
};
