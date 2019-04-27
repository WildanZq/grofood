import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthNavigator from './AuthNavigator';
import BuyerNavigator from './BuyerNavigator';
import SupplierNavigator from './SupplierNavigator';

const AppNavigator = createSwitchNavigator(
    {
        Buyer: BuyerNavigator,
        Supplier: SupplierNavigator,
        Auth: AuthNavigator
    },
    {
        initialRouteName: 'Auth'
    }
);

export default createAppContainer(AppNavigator);
