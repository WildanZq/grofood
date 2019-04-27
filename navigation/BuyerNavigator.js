import { createStackNavigator } from 'react-navigation';

import BuyerHomeScreen from '../screens/buyer/HomeScreen';
import FavouriteScreen from '../screens/buyer/FavouriteScreen';
import SupplierDetailScreen from '../screens/buyer/SupplierDetailScreen';

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
