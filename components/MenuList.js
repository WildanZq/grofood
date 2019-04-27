import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';

import Button from './Button';

const MenuList = ({ data }) => {
    const onClick = (id) => {
        const item = data.filter(val => val.id === id)[0];
        navigation.navigate('SupplierDetail', { data: item });
    };

    const List = data.map((val, i) => {
        const Img = val.img ?
            <View style={{ backgroundColor: '#b4b4b4', width: 66, height: 66, borderRadius: 8, overflow: 'hidden' }}>
                <Image
                    source={{ uri: val.img }}
                    style={{ height: 66, width: 66, borderRadius: 8 }} />
            </View> :
            <View style={{ backgroundColor: '#b4b4b4', width: 62, height: 62, borderRadius: 8 }}></View>;

        return (
            <View key={val.id} style={{ flexDirection: 'row', marginBottom: 12, alignItems: 'center', width: Dimensions.get('window').width-32 }}>
                {Img}
                <View style={{ paddingLeft: 12, justifyContent: 'center' }}>
                    <Text style={{ color: '#000', fontSize: 16, marginBottom: 4 }}>{val.name}</Text>
                    <Text>Rp{val.price}</Text>
                </View>
                <Button style={{ position: 'absolute', right: 0 }} text='Beli' type='small' />
            </View>
        );
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menu</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View>
                    {List}
                </View>
            </ScrollView>
        </View>
    );
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
