import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import BuyerNavigator from '../../components/BuyerNavigator';

class LoginScreen extends React.Component {
    render() {
        return (
            <View style={{ flexDirection: 'column', height: '100%' }}>
                <ScrollView style={{ height: '100%' }}>
                    <Text>Favourites</Text>
                </ScrollView>
                <BuyerNavigator active='favourites' navigation={this.props.navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});

export default LoginScreen;
