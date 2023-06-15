const defaultState = {
    customers: []
}

export const customerReducer = (state =defaultState, action) => {
    switch (action.type) {
        case "ADD_CUSTOMER":
            return {...state, customers: [...state.customers, action.payload]};
        case "REMOVE_CUSTOMER":
            return {...state, customers: [...state.customers.filter(obj => obj.id !== action.payload)]};
        default:
            return state;
    }
};