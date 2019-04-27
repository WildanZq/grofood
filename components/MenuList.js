import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import Dialog from "react-native-dialog";

import moneyformat from '../constants/moneyFormat';
import Button from './Button';

class MenuList extends React.Component {
    state= {
        data: this.props.data,
        dialogVisible: false,
        dialogData: {},
        qty: '',
        error: false,
        foodList: []
    };

    onClick = (val, qty) => {
        this.setState({
            dialogVisible: true,
            dialogData: val, 
            qty: qty
        });
    };

    handleCancel = () => {
        this.setState({
            dialogVisible: false
        });
    };

    handleBuy = () => {
        if (isNaN(parseInt(this.state.qty)) || (this.state.qty < this.state.dialogData.minOrder && parseInt(this.state.qty) !== 0)) {
            this.setState({ error: true });
            return;
        }

        if (this.state.foodList.filter(val => val.id === this.state.dialogData.id).length) {
            let newList = this.state.foodList;
            newList.filter(val => val.id === this.state.dialogData.id)[0].qty = this.state.qty;
            this.setState({ foodList: newList });
        } else {
            this.state.foodList.push({...this.state.dialogData, qty: this.state.qty});
        }

        this.props.buy({...this.state.dialogData, qty: parseInt(this.state.qty)});
        this.setState({
            dialogVisible: false,
            qty: '',
            error: false
        });
    };

    List = (list) => {
        return this.state.data.map((val, i) => {
            const Img = val.img ?
                <View style={{ backgroundColor: '#b4b4b4', width: 66, height: 66, borderRadius: 8, overflow: 'hidden' }}>
                    <Image
                        source={{ uri: val.img }}
                        style={{ height: 66, width: 66, borderRadius: 8 }} />
                </View> :
                <View style={{ backgroundColor: '#b4b4b4', width: 62, height: 62, borderRadius: 8 }}></View>;

            const data = list.filter(data => data.id === val.id);
            const Btn = <View style={{ position: 'absolute', right: 0 }}>
                {data.length ? parseInt(data[0].qty) !== 0 && data[0].qty !== '' ?
                    <TouchableOpacity onPress={() => this.onClick(val, data[0].qty)} >
                        <View style={{ paddingVertical: 4, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: '#F98903', borderRadius: 4 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#fff', marginRight: 4 }}>{data[0].qty}</Text>
                            <Image
                                source={ require('../assets/edit.png') }
                                style={{ height: 11, width: 11 }} />
                        </View>
                    </TouchableOpacity> : 
                    <Button text='Buy' type='small' onPress={() => this.onClick(val)} /> : 
                    <Button text='Buy' type='small' onPress={() => this.onClick(val)} /> }
            </View>;

            return (
                <View key={val.id} style={{ flexDirection: 'row', marginBottom: 12, alignItems: 'center', width: Dimensions.get('window').width-32 }}>
                    {Img}
                    <View style={{ paddingLeft: 12, justifyContent: 'center' }}>
                        <Text style={{ color: '#000', fontSize: 16, marginBottom: 4 }}>{val.name}</Text>
                        <Text>{moneyFormat(val.price)}</Text>
                    </View>
                    {Btn}
                </View>
            );
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Menu</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View>
                        {this.List(this.state.foodList)}
                    </View>
                </ScrollView>
                <Dialog.Container visible={this.state.dialogVisible}>
                    <Dialog.Title>{`Buy ${this.state.dialogData.name}`}</Dialog.Title>
                    <Dialog.Description>
                        {`Minimum ${this.state.dialogData.minOrder} orders`}
                    </Dialog.Description>
                    <Dialog.Input
                        keyboardType='numeric'
                        placeholder='Qty'
                        onChangeText={qty => this.setState({ qty })}
                        value={this.state.qty}
                        style={{ borderBottomWidth: 1, borderColor: this.state.error ? 'red' : '#ccc' }} />
                    <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                    <Dialog.Button label="Buy" onPress={this.handleBuy} />
                </Dialog.Container>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    }
});

export default MenuList;
