// External dependencies
import React from 'react';
import {Text, View} from 'react-native';
import { Provider } from 'react-redux';
import {NativeRouter, Route} from "react-router-native";
// Internal dependencies
import {WrappersStyle} from "./src/style/wrappers.style";
import {LoginScreen} from "./src/screen/Login.screen";
import FacilityListScreen from "./src/screen/FacilityList.screen";
import Navigation from "./src/components/navigation.component";
import Store from './src/service/Redux.Store';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (<Provider store={Store}>
            <View style={WrappersStyle.applicationWrapper}>
                <NativeRouter>
                    <Route exact path="/facility-list">
                        <FacilityListScreen/>
                    </Route>

                    <Route exact path="/login">
                        <LoginScreen/>
                    </Route>
                    <Route exact path="/host-signup">
                        <View>
                            <Text>HOST SIGNUP SCREEN</Text>
                        </View>
                    </Route>
                    <Route exact path="/guest-signup">
                        <View><Text>GUEST SIGNUP SCREEN</Text></View>
                    </Route>

                    <Route exact path="/">
                        <LoginScreen/>
                    </Route>

                    <Navigation/>
                </NativeRouter>
            </View>
        </Provider>);
    }
};
