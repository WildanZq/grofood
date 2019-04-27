import React from 'react';
import { View, StyleSheet } from 'react-native';

import Button from '../components/Button';

export default class LoginScreen extends React.Component {
    onBuyerLogin = () => {
        this.props.navigation.navigate('BuyerLogin');
    };

    onSupplierLogin = () => {
        this.props.navigation.navigate('SupplierLogin');
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Button
                        onPress={this.onBuyerLogin}
                        text='Buyer'
                        type='round'
                        style={{ marginRight: 10 }}
                    />
                    <Button
                        onPress={this.onSupplierLogin}
                        text='Supplier'
                        type='round'
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#F5FCFF'
    }
});
