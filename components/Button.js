import React from 'react';
import { Text, View, TouchableNativeFeedback, TouchableHighlight, Platform } from 'react-native';

import Colors from '../constants/Colors';
import Styles from '../constants/Styles';

export default Button = ({ text, type = 'round', onPress, style }) => {
    const btnStyle = type === 'round' ? { ...Styles.btnRound } : { ...Styles.btnSmall };
    const padding = type === 'small' ? { paddingVertical: 6, paddingHorizontal: 12 } : { paddingVertical: 12, paddingHorizontal: 36 };
    const font = type === 'small' ? { color: '#fff', textAlign: 'center', fontSize: 12 } : { color: '#fff', textAlign: 'center', fontSize: 18 }
    const TouchableByPlatform = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight;
    const bgColor = Colors.primary;

    return (
        <View style={{ ...btnStyle, backgroundColor: bgColor, ...style }}>
            <TouchableByPlatform
                onPress={onPress}
                underlayColor='rgba(255,255,255,.2)'
                activeOpacity={1}
                background={TouchableNativeFeedback.Ripple('rgba(255,255,255,.6)', true)}>
                <View style={padding}>
                    <Text style={font}>{text}</Text>
                </View>
            </TouchableByPlatform>
        </View>
    );
};
