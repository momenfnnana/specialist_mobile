import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@Src/Constant';
const ScreenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    Headercontainer: {
        top: "-5%",
        position: "relative",
        width: "100%",
    },
    HeaderImageBackground: {
        width: ScreenWidth,
        height: 150,
        top: "-7%",
        justifyContent: "flex-end"
    },
    Headertitle: {
        color: Colors.white,
        fontSize: 21,
        fontFamily: "ArbFONTS-Montserrat-Arabic-Regular",
        alignSelf: "center",
        marginBottom: "5%"
    },
    HeaderBackButton: {
        position: "absolute",
        right: "5%",
        top: "-15%"
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: Colors.primary,
        paddingVertical:20,
        marginHorizontal:"3%",
        borderRadius:50
    }
})
export default styles;