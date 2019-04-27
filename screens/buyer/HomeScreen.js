import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';

import Title from '../../components/Title';
import BuyerNavigator from '../../components/BuyerNavigator';
import HorizontalFoodList from '../../components/HorizontalFoodList';
import VerticalFoodList from '../../components/VerticalFoodList';

class HomeScreen extends React.Component {
    state = {
        nearby: [
            {
                id: 1,
                title: 'Aaaa aa',
                img: 'https://craftlog.com/m/i/5214819=s1280=h960'
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
        ],
        recomended: [
            {
                id: 1,
                title: 'Aaaca aa',
                address: 'Jl. Anu no 16'
            },
            {
                id: 2,
                title: 'Bbbbb bbbbb bb',
                address: 'Jl. Anu no 13'
            },
            {
                id: 3,
                title: 'CcCCCCCc c c cc',
                address: 'Jl. Anu no 12',
                img: 'https://craftlog.com/m/i/5214819=s1280=h960'
            },
            {
                id: 4,
                title: 'Dddddd dd',
                address: 'Jl. Anu no 18'
            },
            {
                id: 5,
                title: 'Eeeeee e',
                address: 'Jl. Anu no 19'
            },
        ]
    };

    render() {
        return (
            <View style={{ flexDirection: 'column', height: '100%' }}>
                <ScrollView style={{ height: '100%' }}>
                    <Title text='GroFood' navigation={this.props.navigation} />
                    <View style={{ marginHorizontal: 16, justifyContent: 'center', marginBottom: 4 }}>
                        <Image
                            source={require('../../assets/poster.png')}
                            style={{ width: '100%', maxWidth: 400 }} />
                    </View>
                    <HorizontalFoodList title='Nearby' data={this.state.nearby} navigation={this.props.navigation} />
                    <HorizontalFoodList title='Popular' data={this.state.popular} navigation={this.props.navigation} />
                    <VerticalFoodList title='Recomended' data={this.state.recomended} navigation={this.props.navigation} />
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
