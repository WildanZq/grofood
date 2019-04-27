import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import BuyerNavigator from '../../components/BuyerNavigator';
import Title from '../../components/Title';

class LoginScreen extends React.Component {
    render() {
        return (
            <View style={{ flexDirection: 'column', height: '100%' }}>
                <ScrollView style={{ height: '100%' }}>
                    <Title text='Favourites' />
                </ScrollView>
                <BuyerNavigator active='favourites' navigation={this.props.navigation} />
            </View>
        );
    }
}

export default LoginScreen;
