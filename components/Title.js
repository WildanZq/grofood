import React from 'react';
import { Text, View, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native';

const Title = ({ text='Judul', back=false, navigation }) => {
    const onSearch = () => {
        navigation.navigate('Search');
    };
    const backBtn = back ? <Image source={require('../assets/back_dark.png')} style={{ width: 12, marginRight: 6 }} /> : null;

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
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
