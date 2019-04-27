import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Buyer</Text>
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
    {}
)(HomeScreen);
