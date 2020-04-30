import React from 'react';
import {ScrollView, View} from "react-native";

import {WrappersStyle} from "../style/wrappers.style";

export default class ScrollableScreenWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<ScrollView style={WrappersStyle.screenScrollableWrapper}>
            <View style={WrappersStyle.screenScrollableChild}>
                { !!this.props.content && this.props.content }
            </View>
        </ScrollView>);
    }
}