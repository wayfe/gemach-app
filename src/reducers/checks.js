
const ChecksReducerDefaultState = [];

export default (state = ChecksReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_CHECK":
            return [
                ...state, action.id
            ];
        case "REMOVE_CHECK":
            return state.filter((id) => id !== action.id);
        case "CLEAR_CHECKS":
            return [];
        default:
            return state;
    }
};


