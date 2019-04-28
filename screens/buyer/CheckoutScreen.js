import React from 'react';
import { View, ScrollView, Text, DatePickerAndroid, TimePickerAndroid, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { updateTransaction } from '../../actions';
import BuyerNavigator from '../../components/BuyerNavigator';
import Title from '../../components/Title';
import moneyFormat from '../../constants/moneyFormat';
import AsyncStorage from '@react-native-community/async-storage';

class CheckoutScreen extends React.Component {
    state = {
        selectedDate: 'Select a date',
        selectedTime: 'Select a time',
        loading: false
    };

    List = this.props.navigation.getParam('data', []).map((val, i) => {
        const mtop = i === 0 ? 0 : 14;
        return <View key={val.id} style={{ borderBottomWidth: 1, borderBottomColor: '#bebebe', marginTop: mtop, paddingBottom: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
                <Text style={{ fontSize: 16, color: '#000' }}>{val.name}</Text>
                <Text style={{ fontSize: 14 }}>{`${val.qty} pcs`}</Text>
            </View>
            <Text style={{ fontSize: 16, color: '#000' }}>{moneyFormat(val.price * val.qty)}</Text>
        </View>
    });

    selectDate = async () => {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: new Date(),
                minDate: new Date(),
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                this.setState({ selectedDate: `${day}-${month + 1}-${year}` });
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    };

    selectTime = async () => {
        try {
            const { action, hour, minute } = await TimePickerAndroid.open({
                hour: 14,
                minute: 0,
                is24Hour: false
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                const m = (minute < 10) ? `0${minute}` : minute;
                const h = (hour < 10) ? `0${hour}` : hour;
                this.setState({ selectedTime: `${h}:${m}`,  });
            }
        } catch ({ code, message }) {
            console.warn('Cannot open time picker', message);
        }
    };

    handlePay = async () => {
        if (this.state.selectedDate === 'Select a date' || this.state.selectedTime === 'Select a time') {
            Alert.alert('', 'Select a pick up time');
            return;
        }

        this.setState({ loading: true });

        const { navigation } = this.props;
        await this.props.updateTransaction({
            menu: navigation.getParam('data', []),
            total: navigation.getParam('total', 0),
            supplier: navigation.getParam('supplier', {}),
            date: this.state.selectedDate,
            time: this.state.selectedTime,
            type: 'ongoing'
        });

        this.props.navigation.navigate('Transaction');
        this.setState({ loading: false });
    };

    render() {
        return (
            <View style={{ flexDirection: 'column', height: '100%' }}>
                <ScrollView style={{ height: '100%' }}>
                    <Title text='Checkout' navigation={this.props.navigation} back />
                    <View style={{ paddingHorizontal: 16 }}>
                        {this.List}
                        <View style={{ marginTop: 18 }}>
                            <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>Pick up time</Text>
                            <View style={{ flexDirection: 'row', marginTop: 12 }}>
                                <TouchableOpacity onPress={this.selectDate}>
                                    <View style={{ marginRight: 20, flexDirection: 'row', alignItems: 'center' }}>
                                        <Image
                                            source={ require('../../assets/date.png') }
                                            style={{ height: 26, width: 26, marginRight: 6 }} />
                                        <Text style={{ color: '#444', fontSize: 16, marginLeft: 4 }}>{this.state.selectedDate}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.selectTime}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image
                                            source={require('../../assets/time.png')}
                                            style={{ height: 26, width: 26, marginRight: 6 }} />
                                        <Text style={{ color: '#444', fontSize: 16, marginLeft: 4 }}>{this.state.selectedTime}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
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
                    shadowOpacity: .25
                }}>
                    <View>
                        <Text>Total</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#000' }}>{moneyFormat(this.props.navigation.getParam('total', 0))}</Text>
                    </View>
                    {this.state.loading ? <View style={{ backgroundColor: '#F98903', borderRadius: 7, paddingVertical: 8, paddingHorizontal: 24 }}>
                        <ActivityIndicator size='small' color='#fff' />
                    </View> : <Button text='Pay' onPress={this.handlePay} /> }
                </View>
                <BuyerNavigator navigation={this.props.navigation} />
            </View>
        );
    }
}

export default connect(
    null,
    { updateTransaction }
)(CheckoutScreen);
