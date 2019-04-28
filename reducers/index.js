import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import transactionReducer from './transactionReducer';

export default combineReducers({
    form: formReducer,
    transactions: transactionReducer
});
