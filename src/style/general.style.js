import {StyleSheet} from "react-native";
import {ConstantsService} from "../service/Constants.service";

export const GeneralStyle = StyleSheet.create({
    row: {flexDirection: 'row'},
    equalSizeChild50Perc: {
        flexGrow: 1,
        width: '50%'
    },
    centerAll: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    alignCenter: {
        alignItems: 'center',
    },
    justifyBetween: {
        justifyContent: 'space-between',
    },
    grow1: {
        flexGrow: 1
    },
    absoluteBottom: {
        position: 'absolute',
        bottom: 0,
    },
    absoluteTop: {
        position: 'absolute',
        top: 0,
    },
    widthHeight100perc: {
        width: '100%',
        height: '100%',
    },
    marginTop30: {
        marginTop: 30
    },
    padding10: {
        padding: 10,
    },
    horizontalGlobalPadding: {
        paddingHorizontal: ConstantsService.paddingHorizontal
    }
});