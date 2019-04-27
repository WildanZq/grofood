import React from 'react';
import { View, ScrollView, Image, TouchableWithoutFeedback, Text, Alert } from 'react-native';
import { connect } from 'react-redux';

import moneyFormat from '../../constants/moneyFormat';
import Button from '../../components/Button';
import BuyerNavigator from '../../components/BuyerNavigator';
import MenuList from '../../components/MenuList';

class SupplierDetailScreen extends React.Component {
    state = {
        total: 0,
        foodList: []
    };

    handleBuy = (data) => {
        if (this.state.foodList.filter(val => val.id === data.id).length) {
            let newList = this.state.foodList;
            newList.filter(val => val.id === data.id)[0].qty = data.qty;
            this.setState({ foodList: newList });
        } else {
            this.state.foodList.push({...data, qty: data.qty});
        }

        let total = 0;
        this.state.foodList.map(val => {
            total += val.price * val.qty
        });
        this.setState({ total });
    };

    handleCheckout = () => {
        const list = this.state.foodList.filter(val => val.qty != 0 && !isNaN(val.qty))
        if (list.length === 0) {
            Alert.alert('', 'Add a food first');
            return;
        }

        this.props.navigation.navigate('Checkout', { data: this.state.foodList, total: this.state.total, supplier: this.props.navigation.getParam('data', {}) });
    };

    render() {
        const { navigation } = this.props;
        const data = navigation.getParam('data', {});
        const Img = data.img ? <View style={{ backgroundColor: '#b4b4b4' }}>
                <Image
                    source={{ uri: data.img }}
                    style={{ height: 190, width: '100%' }} />
            </View> :
            <View style={{ backgroundColor: '#b4b4b4', width: '100%', height: 190 }}></View>;
        return (
            <View style={{ flexDirection: 'column', height: '100%' }}>
                <ScrollView style={{ height: '100%' }}>
                    {Img}
                    <View style={{ marginHorizontal: 16, marginTop: 16, marginBottom: 20 }}>
                        <Text style={{ fontSize: 24, color: '#000', fontWeight: 'bold' }}>{data.title}</Text>
                        <Text style={{ fontSize: 14, color: '#000', marginTop: 4 }}>{data.address}</Text>
                        <Text style={{ fontSize: 14, color: '#747474' }}>{`Open ${data.open} - ${data.close}`}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={require('../../assets/phone.png')}
                                style={{ width: 22, height: 22 }} />
                            <Text style={{ fontSize: 12, marginTop: 4 }}>Contact</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={require('../../assets/map.png')}
                                style={{ width: 22, height: 22 }} />
                            <Text style={{ fontSize: 12, marginTop: 4 }}>Direction</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={require('../../assets/fav_active.png')}
                                style={{ width: 22, height: 22 }} />
                            <Text style={{ fontSize: 12, marginTop: 4 }}>Favourite</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ backgroundColor: '#F98903', flexDirection: 'row', borderRadius: 4, paddingVertical: 4, paddingHorizontal: 6, alignItems: 'center' }}>
                                <Text style={{ color: '#fff', marginRight: 4, fontSize: 12, fontWeight: 'bold' }}>4.2</Text>
                                <Image
                                    source={require('../../assets/star.png')}
                                    style={{ width: 12, height: 12 }} />
                            </View>
                            <Text style={{ fontSize: 12, marginTop: 4 }}>4k Reviews</Text>
                        </View>
                    </View>
                    <MenuList data={data.menu} buy={this.handleBuy} />
                </ScrollView>
                <TouchableWithoutFeedback
                    onPress={() => this.props.navigation.goBack()}>
                    <View style={{ position: 'absolute', top: 22, left: 12, backgroundColor: '#fff', borderRadius: 20 }}>
                        <Image
                            source={require('../../assets/back_dark.png')}
                            style={{ width: 32, height: 32 }} />
                    </View>
                </TouchableWithoutFeedback>
                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#eee',
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    elevation: 8,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowRadius: 6,
                    shadowOpacity: .25 }}>
                    <View>
                        <Text>Total</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#000' }}>{moneyFormat(this.state.total)}</Text>
                    </View>
                    <Button text='Checkout' onPress={this.handleCheckout} />
                </View>
                <BuyerNavigator navigation={this.props.navigation} />
            </View>
        );
    }
}

export default connect(
    null,
    {}
)(SupplierDetailScreen);
