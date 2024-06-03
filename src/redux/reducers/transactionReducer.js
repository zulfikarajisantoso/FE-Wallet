import { GET_TRANSACTION_HISTORY, DEPOSITE_AMOUNT_WALLET, WITHDRAW_AMOUNT_WALLET, GET_ALL_BALANCE } from "../actions/types";

const initialState = {
  transactions: [],
  balance: '',
  totalBalance: 0 ,
  error: null,
};

const transactionReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TRANSACTION_HISTORY:
      return {
        ...state,
        transactions: payload,
        error: null,
      };
    case DEPOSITE_AMOUNT_WALLET:
      return {
        ...state,
        balance: payload,
      };
    case WITHDRAW_AMOUNT_WALLET:
      return {
        ...state,
        balance: payload,
        error: null,
      };
    case GET_ALL_BALANCE:
      return {
        ...state,
        totalBalance: payload,
        error: null,
      };


    default:
      return state;
  }
};

export default transactionReducer;
