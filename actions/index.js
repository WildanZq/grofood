import AsyncStorage from '@react-native-community/async-storage';
import {
    SIGN_OUT,
    LOG_IN
} from './types';

export const signOut = async () => {
    await AsyncStorage.multiRemove(['userRole']);
    return {
        type: SIGN_OUT
    };
};

export const loginBuyer = formValues => async dispatch => {
    await AsyncStorage.setItem('userRole', 'buyer');
    dispatch({ type: LOG_IN, payload: { userRole: 'buyer' } });
}

export const loginSupplier = formValues => async dispatch => {
    await AsyncStorage.setItem('userRole', 'supplier');
    dispatch({ type: LOG_IN, payload: { userRole: 'supplier' } });
}
