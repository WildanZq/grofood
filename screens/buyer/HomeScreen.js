import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import BuyerNavigator from '../../components/BuyerNavigator';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flexDirection: 'column', height: '100%' }}>
                <ScrollView style={{ height: '100%' }}>
                    <Text>Ahahaha</Text>
                </ScrollView>
                <BuyerNavigator active='home' navigation={this.props.navigation} />
            </View>
        );
    }
}

export default connect(
    null,
    {}
)(HomeScreen);
