import AsyncStorage from '@react-native-community/async-storage';
import {
    SIGN_OUT,
    LOG_IN,
    UPDATE_TRANSACTION
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

export const checkTransaction = val => async dispatch => {
    if (val !== null) {
        dispatch({ type: UPDATE_TRANSACTION, payload: { val } });
    }
    dispatch({ type: UPDATE_TRANSACTION, payload: { data: [
        {
            id: 1,
            supplier: {
                img: 'https://cdn.idntimes.com/content-images/post/20181003/ed69e7356cb2c2f6ea450c68fba692b8.jpg',
                title: 'Warung Sumber Rejeki'
            },
            total: 320000,
            date: '27-4-2019'
        },
        {
            id: 2,
            supplier: {
                img: 'https://apollo-singapore.akamaized.net/v1/files/x8x2zlpckici1-ID/image;s=966x691;olx-st/_2_.jpg',
                title: 'Warung Makmur'
            },
            total: 470000,
            date: '28-4-2019'
        }
    ] } });
};

export const updateTransaction = values => async dispatch => {
    let data = [];
    try {
        const transaction = await AsyncStorage.getItem('transaction');
        if (transaction) {
            data = JSON.parse(transaction);
        }
    } catch (error) {
        data = [];
    }

    data.push(values);

    await AsyncStorage.setItem('transaction', JSON.stringify(data));
    dispatch({ type: UPDATE_TRANSACTION, payload: { data } });
}
