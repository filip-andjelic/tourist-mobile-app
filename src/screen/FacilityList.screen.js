// External dependencies
import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Redirect} from "react-router-native";
// Internal dependencies
import {WrappersStyle} from "../style/wrappers.style";
import {ScreensStyle} from "../style/screens.style";
import {GeneralStyle} from "../style/general.style";

export default class FacilityListScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<ScrollView style={[WrappersStyle.screenScrollableWrapper, ScreensStyle.facilityListWrapper]}>
            <View style={WrappersStyle.screenScrollableChild}>
                <View style={GeneralStyle.row}>
                    <View style={GeneralStyle.equalSizeChild50Perc}></View>
                    <View style={GeneralStyle.equalSizeChild50Perc}></View>
                </View>
                <Text style={{
                    backgroundColor: '#e3e3e3bb',
                    paddingBottom: 30,
                    marginBottom: 130
                }}>FACILITY LIST
                    COMPONENT</Text>
                <Text style={{backgroundColor: '#e3e3e3bb', paddingBottom: 30, marginBottom: 130}}>FACILITY LIST
                    COMPONENT</Text>
                <Text style={{backgroundColor: '#e3e3e3bb', paddingBottom: 30, marginBottom: 130}}>FACILITY LIST
                    COMPONENT</Text>
                <Text style={{backgroundColor: '#e3e3e3bb', paddingBottom: 30, marginBottom: 130}}>FACILITY LIST
                    COMPONENT</Text>
                <Text style={{backgroundColor: '#e3e3e3bb', paddingBottom: 30, marginBottom: 130}}>FACILITY LIST
                    COMPONENT</Text>
                <Text style={{backgroundColor: '#e3e3e3bb', paddingBottom: 30, marginBottom: 130}}>FACILITY LIST
                    COMPONENT</Text>
                <Text style={{backgroundColor: 'red', marginBottom: 30}}>TRALALALAL</Text>
            </View>
        </ScrollView>);
    }
};
