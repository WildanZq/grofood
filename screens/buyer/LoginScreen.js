import React from 'react';
import { View, Image, TextInput, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
import { connect } from 'react-redux';

import { loginBuyer } from '../../actions';
import Button from '../../components/Button';

class LoginScreen extends React.Component {
    state = {
        username: '',
        password: '',
        usernameError: true,
        passwordError: true
    };

    onUsernameChange = () => {
        if (this.state.username === '') {
            this.setState({ usernameError: 'Username must be filled' });
        } else {
            this.setState({ usernameError: '' });
        }
    };

    onPasswordChange = () => {
        if (this.state.password === '') {
            this.setState({ passwordError: 'Password must be filled' });
        } else {
            this.setState({ passwordError: '' });
        }
    };

    onLogin = async () => {
        if (this.state.usernameError || this.state.passwordError) {
            Alert.alert('', 'Fill all the input');
            return;
        }

        const login = await this.props.loginBuyer();
        if (login)
            this.props.navigation.navigate('Buyer');
        else
            Alert.alert('', 'Username or Password not correct');
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center', width: '100%' }}>
                    <Image
                        source={require('../../assets/Logo.png')}
                        style={{ height: 46, marginBottom: 100 }} />
                    <TextInput
                        textContentType='username'
                        placeholder='Username'
                        onChangeText={username => this.setState({ username })}
                        onChange={this.onUsernameChange}
                        value={this.state.username}
                        style={{ borderBottomWidth: 2, borderBottomColor: '#F98903', width: '100%', paddingBottom: 6, marginBottom: 14 }} />
                    <TextInput 
                        secureTextEntry={true}
                        textContentType='password'
                        placeholder='Password'
                        onChangeText={password => this.setState({ password })}
                        onChange={this.onPasswordChange}
                        value={this.state.password}
                        style={{ borderBottomWidth: 2, borderBottomColor: '#F98903', width: '100%', paddingBottom: 6 }} />
                    <Button
                        onPress={this.onLogin}
                        text='Login'
                        type='round'
                        style={{ height: 46, justifyContent: 'center', width: '100%', marginTop: 40 }}
                    />
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text>Dont have an account? </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignupBuyer')}>
                            <View>
                                <Text style={{ color: '#0085D0', fontWeight: 'bold' }}>Sign Up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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
        paddingHorizontal: 26,
        backgroundColor: '#fff'
    }
});

export default connect(
    null,
    { loginBuyer }
)(LoginScreen);
