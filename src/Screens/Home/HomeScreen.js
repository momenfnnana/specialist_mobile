import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { HeaderTitle } from '@Component/HeaderTitle';
import { Footer } from '@Component/Footer';
import { Colors, Constant } from '@Src/Constant';
import FooterData from '@FakeData/Footer'
const HomeScreen = () => {
    const [home, setHome] = useState(true);
    const [person, setPerson] = useState(false);
    const [calender, setCalender] = useState(false);
    const togglePersonScreen = () => {
        setPerson(true)
        setHome(false)
        setCalender(false)
    }
    const toggleCalenderScreen = () => {
        setPerson(false)
        setHome(false)
        setCalender(true)
    }
    const toggleHomeScreen = () => {
        setPerson(false)
        setHome(true)
        setCalender(false)
    }
    return (
        <View style={{ flex: 1 }}>
            <HeaderTitle title="الرئيسية" backButtonVisible={true} />
            <View style={{ top: Constant.space }}>
                <Footer
                    HomeVisible={home}
                    personVisible={person}
                    NotificationVisible={calender}
                    togglePersonScreen={togglePersonScreen}
                    toggleCalenderScreen={toggleCalenderScreen}
                    toggleHomeScreen={toggleHomeScreen}
                />
            </View>
        </View>
    )
}
export default HomeScreen;