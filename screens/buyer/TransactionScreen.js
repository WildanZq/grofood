import React from 'react';
import { View, ScrollView, ActivityIndicator, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import { checkTransaction } from '../../actions';
import BuyerNavigator from '../../components/BuyerNavigator';
import Title from '../../components/Title';
import moneyFormat from '../../constants/moneyFormat';
import AsyncStorage from '@react-native-community/async-storage';

class TransactionScreen extends React.Component {
    state = {
        data: [],
        dataOngoing: [],
        loading: true
    };
    
    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        const transactions = await AsyncStorage.getItem('transaction');
        await this.props.checkTransaction(JSON.parse(transactions));
        let dataOngoing = [];
        let data = [];
        if (transactions) {
            dataOngoing = JSON.parse(transactions).filter(val => val.type === 'ongoing');
            data = JSON.parse(transactions).filter(val => val.type !== 'ongoing');
        }

        this.setState({ data, dataOngoing, loading: false });
    };

    Loading = (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, paddingTop: 34 }}>
            <ActivityIndicator size='large' color='#F98903' />
        </View>
    );

    TransactionList = () => {
        const data = this.state.data.map((val, i) => {
            return <View key={i} style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Image
                    source={{ uri: val.supplier.img }}
                    style={{ height: 66, width: 66, borderRadius: 8 }} />
                <View style={{ justifyContent: 'center', marginLeft: 12 }}>
                    <Text style={{ color: '#000', fontSize: 16, marginBottom: 4 }}>{val.supplier.title}</Text>
                    <Text>{moneyFormat(val.total)}</Text>
                </View>
                <Text style={{ position: 'absolute', right: 0, bottom: 12 }}>{`${val.date} ${val.time}`}</Text>
            </View>;
        });

        const dataOngoing = this.state.dataOngoing.map((val, i) => {
            const Menu = val.menu.map((menuVal, menuI) => {
                return <View key={menuI} style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Image
                        source={{ uri: menuVal.img }}
                        style={{ height: 66, width: 66, borderRadius: 8 }} />
                    <View style={{ justifyContent: 'center', marginLeft: 12 }}>
                        <Text style={{ color: '#000', fontSize: 16, marginBottom: 4 }}>{menuVal.name}</Text>
                        <Text>{`${menuVal.qty} pcs`}</Text>
                    </View>
                    <Text style={{ position: 'absolute', right: 0, bottom: 22, color: '#000' }}>{moneyFormat(menuVal.price * menuVal.qty)}</Text>
                </View>;
            });

            return <View key={i}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderColor: '#eee', marginBottom: 6 }}>
                    <Text style={{ fontSize: 18, color: '#000', marginBottom: 4 }}>{val.supplier.title}</Text>
                    <Text>{`${val.date} ${val.time}`}</Text>
                </View>
                {Menu}
            </View>
        });

        return (
            <View style={{ paddingHorizontal: 16 }}>
                {!this.state.dataOngoing.length && !this.state.data.length ? 
                    <View>
                        <Text>There's no transaction yet.</Text>
                    </View> : null}
                {this.state.dataOngoing.length ? <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16, marginBottom: 12 }}>On Going</Text> : null}
                {dataOngoing}
                {this.state.data.length ? <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16, marginBottom: 12 }}>History</Text> : null}
                {data}
            </View>
        );
    };

    render() {
        return (
            <View style={{ flexDirection: 'column', height: '100%' }}>
                <ScrollView style={{ height: '100%' }}>
                    <Title text='Transaction' navigation={this.props.navigation} />
                    { this.state.loading ? this.Loading : this.TransactionList() }
                </ScrollView>
                <BuyerNavigator active='transaction' navigation={this.props.navigation} />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { transactions: state.transactions };
};

export default connect(
    mapStateToProps,
    { checkTransaction }
)(TransactionScreen);
