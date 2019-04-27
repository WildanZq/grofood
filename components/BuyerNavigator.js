import React from 'react';
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native';

import Colors from '../constants/Colors';

class BuyerNavigator extends React.Component {
    onNavigate = (screen) => {
        this.props.navigation.navigate(screen);
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => this.onNavigate('Home')}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={
                                this.props.active === 'home' ?
                                    require('../assets/home_active.png') : require('../assets/home.png')
                            }
                            style={{ height: 20, width: 20 }} />
                        <Text style={this.props.active === 'home' ? styles.textActive : styles.text}>Home</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.onNavigate('Transaction')}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={
                                this.props.active === 'transaction' ?
                                    require('../assets/transaction_active.png') : require('../assets/transaction.png')
                            }
                            style={{ height: 20, width: 20 }} />
                        <Text style={this.props.active === 'transaction' ? styles.textActive : styles.text}>Transactions</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.onNavigate('Favourites')}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={
                                this.props.active === 'favourites' ?
                                    require('../assets/fav_active.png') : require('../assets/fav.png')
                            }
                            style={{ height: 20, width: 20 }} />
                        <Text style={this.props.active === 'favourites' ? styles.textActive : styles.text}>Favourites</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.onNavigate('Profile')}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={
                                this.props.active === 'profile' ?
                                    require('../assets/profile_active.png') : require('../assets/profile.png')
                            }
                            style={{ height: 20, width: 20 }} />
                        <Text style={this.props.active === 'profile' ? styles.textActive : styles.text}>Profile</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 12,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: .25
    },
    text: {
        color: '#b4b4b4',
        fontSize: 12
    },
    textActive: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 12
    }
});

export default BuyerNavigator;
