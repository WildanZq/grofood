import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const HorizontalFoodList = ({ data, title, navigation }) => {
    const onClick = (id) => {
        const item = data.filter(val => val.id === id)[0];
        navigation.navigate('SupplierDetail', { data: item });
    };

    const List = data.map((val, i) => {
        const mLeft = i === 0 ? 16 : 6;
        const mRight = i === data.length-1 ? 16 : 6;
        const Img = val.img ?
            <View style={{ backgroundColor: '#b4b4b4', width: 82, height: 82, borderRadius: 8, overflow: 'hidden' }}>
                <Image
                    source={{ uri: val.img }}
                    style={{ height: 82, width: 82, borderRadius: 8 }} />
            </View> :
            <View style={{ backgroundColor: '#b4b4b4', width: 82, height: 82, borderRadius: 8 }}></View>;

        return (
            <TouchableOpacity key={val.id} onPress={() => onClick(val.id)} >
                <View style={{ overflow: 'hidden', width: 82, marginRight: mRight, marginLeft: mLeft }}>
                    {Img}
                    <View style={{ justifyContent: 'flex-start', overflow: 'hidden', height: 18, marginTop: 4 }}>
                        <Text style={{ color: '#000' }}>{val.title}</Text>
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
                    <Text style={{ color: '#0085D0', fontSize: 14, marginRight: 16 }}>See All</Text>
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
        paddingTop: 16,
    },
    wrapper: {
        flexDirection: 'row',
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
        marginLeft: 16
    }
});

export default HorizontalFoodList;
