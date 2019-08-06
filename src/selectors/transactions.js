import moment from "moment";

export default (transactions, { sortBy, startDate, endDate, transactionType }) => {
    return transactions.filter((transaction) => {
      const createdAtMoment = moment(transaction.date);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
      const typeMatch = transactionType[transaction.type] === true;
      
      return startDateMatch && endDateMatch && typeMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.date < b.date ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };
  