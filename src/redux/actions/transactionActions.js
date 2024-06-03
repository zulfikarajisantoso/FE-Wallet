import { DEPOSITE_AMOUNT_WALLET, GET_TRANSACTION_HISTORY, WITHDRAW_AMOUNT_WALLET, GET_ALL_BALANCE} from './types';
import axiosBase from '../../api/axiosBase';

export const getListTransaction = () => async (dispatch) => {
 
  try {
    const res = await axiosBase.get('/api/admin/transactions');
    dispatch({ type: GET_TRANSACTION_HISTORY, payload: res?.data });
    return { success: true }; // Return success response
  } catch (err) {
    return { success: false }; // Return error response
  }
};



export const deposit = (amount) => async (dispatch) => {
  
  try {
    const res = await axiosBase.post('/api/wallet/deposit',{"amount": amount});
    dispatch({ type: DEPOSITE_AMOUNT_WALLET, payload: res.data });
    return { success: true }; // Return success response
  } catch (err) {
    return { success: false, error : err.response?.data.error }; // Return error response
  }
};



export const withdraw = (amount) => async (dispatch) => {
  
  try {
    const res = await axiosBase.post('/api/wallet/withdraw',{"amount": amount});
 
    dispatch({ type: WITHDRAW_AMOUNT_WALLET, payload: res.data });
    return { success: true }; // Return success response
  } catch (err) {
    console.log(err)
    return { success: false, error : err.response?.data.error }; // Return error response
  }
};


export const getBalance = () => async (dispatch) => {
  
  try {
    const res = await axiosBase.get('/api/getbalance');
    dispatch({ type: GET_ALL_BALANCE, payload: res.data.balance.balance });
    return { success: true }; // Return success response
  } catch (err) {
    return { success: false, error : err.response?.data.error }; // Return error response
  }
};
