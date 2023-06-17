const defaultState = {
    customers: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER";
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
export const ASYNC_ADD_CUSTOMERS = "ASYNC_ADD_CUSTOMERS";

export const customerReducer = (state =defaultState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]};
        case ADD_MANY_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]};
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(obj => obj.id !== action.payload)};
        default:
            return state;
    }
};

export const addCustomerAction  = (payload) => ({type: ADD_CUSTOMER, payload: payload});
export const addManyCustomersAction  = (payload) => ({type: ADD_MANY_CUSTOMERS, payload: payload});
export const asyncAddManyCustomersAction  = () => ({type: ASYNC_ADD_CUSTOMERS});
export const removeCustomerAction  = (payload) => ({type: REMOVE_CUSTOMER, payload: payload});