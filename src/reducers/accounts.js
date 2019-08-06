
const AccountsReducerDefaultState = [];

export default (state = AccountsReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_ACCOUNT":
            return [
                ...state, action.account
            ];
        case "REMOVE_ACCOUNT":
            return state.filter(({ id }) => id !== action.id);
        case "EDIT_ACCOUNT":
            return state.map((account) => {
                if (account.id === action.id) {
                    return {
                        ...account, ...action.updates
                    };
                } else {
                    return account
                }
            });
        case "ADD_TRANSACTION":
        return state.map((account) => {
            if (account.id === action.id) {
                return {
                    ...account, transactions: [...account.transactions, action.transaction]
                };
            } else {
                return account
            }
        });
        case "REMOVE_TRANSACTION":
        return state.map((account) => {
            if (account.id === action.accountId) {
                return {
                    ...account, transactions: account.transactions.filter((transaction) => transaction.id !== action.transactionId)
                };
            } else {
                return account
            }
        });
        case "EDIT_TRANSACTION":
        return state.map((account) => {
            if (account.id === action.accountId) {
                return {
                    ...account, transactions: [...account.transactions.filter((transaction) => transaction.id !== action.transaction.id), action.transaction]
                };
            } else {
                return account
            }
        });
        case "SET_ACCOUNTS":
            return action.accounts;
        default:
            return state;
    }
};
