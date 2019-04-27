import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { loginBuyer } from '../../actions';
import Button from '../../components/Button';

class LoginScreen extends React.Component {
    onLogin = async () => {
        await this.props.loginBuyer();
        this.props.navigation.navigate('Buyer');
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.onLogin}
                    text='Login Buyer'
                    type='round'
                />
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

export default connect(
    null,
    { loginBuyer }
)(LoginScreen);
