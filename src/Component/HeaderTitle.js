import React from 'react'
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import styles from './Component.style';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export const HeaderTitle = ({ title, backButtonVisible, goBack }) => {
    return (
        <View style={styles.Headercontainer}>
            <ImageBackground style={styles.HeaderImageBackground} source={require('../../assets/images/HeaderTitle.png')}>
                <View>
                    <Text style={styles.Headertitle}>{title}</Text>
                    {backButtonVisible === true ?
                        (<TouchableOpacity onPress={goBack} style={styles.HeaderBackButton}>
                            <AntDesign name="arrowright" size={24} color={Colors.white} />
                        </TouchableOpacity>) :
                        null
                    }
                </View>
            </ImageBackground>
        </View>
    )
}