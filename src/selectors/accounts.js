
//Get Visible Data
export default (accounts, {text}) => {
    return accounts.filter((account) => {
        const textMatch = account.name.toLowerCase().includes(text.toLowerCase());

        return textMatch;
    }).sort((a,b) => {return a.name > b.name ? 1 : -1})
}

