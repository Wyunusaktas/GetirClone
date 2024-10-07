import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    Contaier: {
        height: height * 0.064,
        backgroundColor: '#F7D102',

    },
    ConteinerOne: {
        width: '80%',
        height: '100%',
        backgroundColor: 'white',
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40
    },
    ContainerTwo: {
        width: '20%',
        height: '100%',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    headerArrow: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        borderLeftWidth: 2,
        borderLeftColor: '#F3F2FD',
        marginLeft: 10
    },
    image: {
        width: 30,
        height: 30,

    }
})

export default styles;