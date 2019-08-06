export const addCheck = ({ id } = {}) => ({
    type: "ADD_CHECK",
    id
});

export const removeCheck = ({ id } = {}) => ({
    type: "REMOVE_CHECK",
    id
});

export const clearChecks = () => ({
    type: "CLEAR_CHECKS"
});