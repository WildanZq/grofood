import React from 'react';
import { Text, View, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native';

const Title = ({ text='Judul', back=false, navigation }) => {
    const onSearch = () => {
        navigation.navigate('Search');
    };
    const backBtn = back ? 
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Image source={require('../assets/back.png')} style={{ width: 15, height: 16, marginRight: 12 }} />
        </TouchableWithoutFeedback> : 
        null;

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {backBtn}
                <Text style={styles.title}>{text}</Text>
            </View>
            <TouchableWithoutFeedback onPress={onSearch} >
                <View>
                    <Image
                        source={ require('../assets/search.png') }
                        style={{ height: 20, width: 20 }} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 26,
        paddingHorizontal: 16,
        backgroundColor: '#FFF'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000'
    }
});

export default Title;
