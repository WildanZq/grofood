import { createStackNavigator } from 'react-navigation';

import SupplierHomeScreen from '../screens/supplier/HomeScreen';

const SupplierNavigator = createStackNavigator(
    {
        Home: {
            screen: SupplierHomeScreen,
            navigationOptions: { header: null }
        },
    },
    {
        initialRouteName: 'Home',
    }
);

export default SupplierNavigator;
