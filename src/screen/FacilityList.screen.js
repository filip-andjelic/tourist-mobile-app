// External dependencies
import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Redirect} from "react-router-native";
// Internal dependencies
import {WrappersStyle} from "../style/wrappers.style";
import {ScreensStyle} from "../style/screens.style";
import {GeneralStyle} from "../style/general.style";
import {LoginAction} from "../service/Redux.Actions";
import {connect} from "react-redux";
import {FacilityCard} from "../components/FacilityCard";

class FacilityListScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (<ScrollView style={[WrappersStyle.screenScrollableWrapper,
            ScreensStyle.facilityListWrapper,
            {backgroundColor : "#e9ebee"}]}>
            <View style={WrappersStyle.screenScrollableChild}>
                <View style={GeneralStyle.row}>
                    <View style={GeneralStyle.equalSizeChild50Perc}></View>
                    <View style={GeneralStyle.equalSizeChild50Perc}></View>
                </View>
                {
                    this.props.facilities.map((facility)=>{
                        return(
                            <FacilityCard
                                facility={facility}
                            />
                        )
                    })
                }
            </View>
        </ScrollView>);
    }
};
const mapStateToProps = (state) => {
    return ({
        facilities: state ? state.facilities : '',
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        loginAction: params => dispatch(LoginAction(params)),
    });
};

export const Facilities = connect(
    mapStateToProps,
    mapDispatchToProps
)(FacilityListScreen);