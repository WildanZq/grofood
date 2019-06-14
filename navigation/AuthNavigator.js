import { createStackNavigator } from 'react-navigation';

import RoleScreen from '../screens/RoleScreen';
import BuyerLoginScreen from '../screens/buyer/LoginScreen';
import SupplierLoginScreen from '../screens/supplier/LoginScreen';

const AuthNavigator = createStackNavigator(
    {
        SelectRole: {
            screen: RoleScreen,
            navigationOptions: { header: null }
        },
        BuyerLogin: {
            screen: BuyerLoginScreen,
            navigationOptions: { header: null }
        },
        SupplierLogin: {
            screen: SupplierLoginScreen,
            navigationOptions: { header: null }
        }
    },
    {
        initialRouteName: 'BuyerLogin',
    }
);

export default AuthNavigator;
