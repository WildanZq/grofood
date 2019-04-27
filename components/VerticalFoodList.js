import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const VerticalFoodList = ({ data, title, navigation }) => {
    const onClick = (id) => {
        const item = data.filter(val => val.id === id)[0];
        navigation.navigate('SupplierDetail', { data: item });
    };

    const List = data.map((val, i) => {
        const Img = val.img ?
            <View style={{ backgroundColor: '#b4b4b4', width: 72, height: 72, borderRadius: 8, overflow: 'hidden' }}>
                <Image
                    source={{ uri: val.img }}
                    style={{ height: 72, width: 72, borderRadius: 8 }} />
            </View> :
            <View style={{ backgroundColor: '#b4b4b4', width: 72, height: 72, borderRadius: 8 }}></View>;

        return (
            <TouchableOpacity key={val.id} onPress={() => onClick(val.id)} >
                <View style={{ flexDirection: 'row', marginBottom: 12 }}>
                    {Img}
                    <View style={{ paddingLeft: 12, justifyContent: 'center', width: '100%' }}>
                        <Text style={{ color: '#000', fontSize: 18, marginBottom: 2 }}>{val.title}</Text>
                        <Text style={{ color: '#000', fontSize: 12 }}>{val.address}</Text>
                        <Text style={{ color: '#888', fontSize: 12 }}>{`Open ${val.open} - ${val.close}`}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    });

    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity>
                    <Text style={{ color: '#0085D0', fontSize: 14 }}>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.wrapper}>
                    {List}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 12,
        paddingHorizontal: 16
    },
    wrapper: {
        overflow: 'scroll',
    },
    titleWrapper: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    }
});

export default VerticalFoodList;
