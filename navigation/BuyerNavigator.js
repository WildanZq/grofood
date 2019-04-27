import { createStackNavigator } from 'react-navigation';

import BuyerHomeScreen from '../screens/buyer/HomeScreen';

const BuyerNavigator = createStackNavigator(
    {
        Home: {
            screen: BuyerHomeScreen,
            navigationOptions: { header: null }
        },
    },
    {
        initialRouteName: 'Home',
    }
);

export default BuyerNavigator;
