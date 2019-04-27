import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Title = ({ data, title, navigation }) => {
    const onClick = (id) => { };

    const List = data.map((val, i) => {
        const mLeft = i === 0 ? 16 : 6;

        return (
            <TouchableOpacity key={val.id} onPress={() => onClick(val.id)} >
                <View style={{ overflow: 'hidden', width: 82, marginRight: 6, marginLeft: mLeft }}>
                    <View style={{ backgroundColor: '#b4b4b4', width: 82, height: 82, borderRadius: 8 }}></View>
                    <View style={{ justifyContent: 'flex-start', overflow: 'hidden', height: 18, marginTop: 4 }}>
                        <Text>{val.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    });

    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
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
    },
    wrapper: {
        flexDirection: 'row',
        overflow: 'scroll',
    },
    titleWrapper: {
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
        marginLeft: 16
    }
});

export default Title;
