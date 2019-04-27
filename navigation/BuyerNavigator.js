import { createStackNavigator } from 'react-navigation';

import BuyerHomeScreen from '../screens/buyer/HomeScreen';
import FavouriteScreen from '../screens/buyer/FavouriteScreen';
import SupplierDetailScreen from '../screens/buyer/SupplierDetailScreen';
import CheckoutScreen from '../screens/buyer/CheckoutScreen';
import TransactionScreen from '../screens/buyer/TransactionScreen';

const BuyerNavigator = createStackNavigator(
    {
        Home: {
            screen: BuyerHomeScreen,
            navigationOptions: { header: null }
        },
        Favourites: {
            screen: FavouriteScreen,
            navigationOptions: { header: null }
        },
        SupplierDetail: {
            screen: SupplierDetailScreen,
            navigationOptions: { header: null }
        },
        Checkout: {
            screen: CheckoutScreen,
            navigationOptions: { header: null }
        },
        Transaction: {
            screen: TransactionScreen,
            navigationOptions: { header: null }
        }
    },
    {
        transitionConfig: () => ({
            transitionSpec: {
                duration: 0,
            },
        }),
        initialRouteName: 'Home',
    }
);

export default BuyerNavigator;
