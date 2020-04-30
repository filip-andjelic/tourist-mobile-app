import {StyleSheet} from "react-native";
import {themeMain5, light5} from "./colors.style";

export const TextStyle = StyleSheet.create({
    h1: {
        fontSize: 30,
        fontWeight: "900",
        marginVertical: 7,
        textAlign: "center"
    },
    label: {
        fontSize: 13,
        textAlign: "left",
        color: themeMain5,
        marginBottom: 3,
        paddingLeft: 10,
        fontWeight: "700",
    },
    input: {
        paddingHorizontal: 12,
        paddingVertical: 3,
        borderColor: themeMain5,
        borderWidth: 2,
        borderRadius: 6,
        backgroundColor: light5,
        color: themeMain5,
        fontSize: 14,
    }
});