export const getBal = (transactions) => {

    const deposits = transactions.filter(transaction => transaction.type === "deposit");
    const withdrawals = transactions.filter(transaction => transaction.type === "withdrawal");

    const incoming =  deposits === [] ? 0 : deposits
        .map((transaction) => transaction.amount)
        .reduce((accumulator, currentVal) => accumulator + currentVal, 0);

    const outgoing = withdrawals === [] ? 0 : withdrawals
        .map((transaction) => transaction.amount)
        .reduce((accumulator, currentVal) => accumulator + currentVal, 0);

    return incoming - outgoing;
};

export const getPendingBal = (transactions) => {
    const pendingTransactions = transactions.filter(transaction => transaction.isCleared === false);

    const deposits = pendingTransactions.filter(transaction => transaction.type === "deposit");
    const withdrawals = pendingTransactions.filter(transaction => transaction.type === "withdrawal");

    const incoming =  deposits === [] ? 0 : deposits
        .map((transaction) => transaction.amount)
        .reduce((accumulator, currentVal) => accumulator + currentVal, 0);

    const outgoing = withdrawals === [] ? 0 : withdrawals
        .map((transaction) => transaction.amount)
        .reduce((accumulator, currentVal) => accumulator + currentVal, 0);

    return incoming - outgoing;

    return incoming - outgoing;
};