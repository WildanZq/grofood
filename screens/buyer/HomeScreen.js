import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';

import Title from '../../components/Title';
import BuyerNavigator from '../../components/BuyerNavigator';
import HorizontalFoodList from '../../components/HorizontalFoodList';

class HomeScreen extends React.Component {
    state = {
        nearby: [
            {
                id: 1,
                title: 'Aaaa aa'
            },
            {
                id: 2,
                title: 'Bbbbb bbbbb bb'
            },
            {
                id: 3,
                title: 'CcCCCCCc c c cc'
            },
            {
                id: 4,
                title: 'Dddddd dd'
            },
            {
                id: 5,
                title: 'Eeeeee e'
            },
        ],
        popular: [
            {
                id: 1,
                title: 'Aaaa aa'
            },
            {
                id: 2,
                title: 'Bbbbb bbbbb bb'
            },
            {
                id: 3,
                title: 'CcCCCCCc c c cc'
            },
            {
                id: 4,
                title: 'Dddddd dd'
            },
            {
                id: 5,
                title: 'Eeeeee e'
            },
        ]
    };

    render() {
        return (
            <View style={{ flexDirection: 'column', height: '100%' }}>
                <ScrollView style={{ height: '100%' }}>
                    <Title text='GroFood' />
                    <View style={{ marginHorizontal: 16, justifyContent: 'center', marginBottom: 8 }}>
                        <Image
                            source={require('../../assets/poster.png')}
                            style={{ width: '100%', maxWidth: 400 }} />
                    </View>
                    <HorizontalFoodList title='Nearby' data={this.state.nearby} navigation={this.props.navigation} />
                    <HorizontalFoodList title='Popular' data={this.state.popular} navigation={this.props.navigation} />
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
