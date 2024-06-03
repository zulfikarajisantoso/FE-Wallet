import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Import thunk as a named export
import transactionReducer from './reducers/transactionReducer';

// Mendefinisikan rootReducer dengan combineReducers
const rootReducer = combineReducers({
  transaction: transactionReducer
});

// Membuat store dengan rootReducer dan middleware thunk
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
