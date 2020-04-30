// External dependencies
import { StyleSheet, Dimensions } from "react-native";
// Internal dependencies
import {light4, light5, overlayLight03} from "./colors.style";
import {ConstantsService} from "../service/Constants.service";

const window = Dimensions.get('window');

export const WrappersStyle = StyleSheet.create({
    applicationWrapper: {
        flex: 1,
        backgroundColor: light4,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '100%',
        minWidth: '100%'
    },
    navigationWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: ConstantsService.navbarHeight,
        width: '100%',
        backgroundColor: light5,
    },
    navigationItemWrapper: {
        flexGrow: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderLeftColor: '#333333'
    },
    screenScrollableWrapper: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: overlayLight03,
        maxHeight: window.height,
        height: window.height,
    },
    screenScrollableChild: {
        paddingTop: 30,
        flexGrow: 1,
        width: '100%',
        minHeight: window.height - ConstantsService.navbarHeight,
        marginBottom: ConstantsService.navbarHeight
    }
});