// External dependencies
import React from 'react';
import {Text, View, Image} from 'react-native';
import {Redirect} from "react-router-native";
// Internal dependencies
import ScrollableScreenWrapper from "../components/scrollable.screen.wrapper";
import {GeneralStyle} from "../style/general.style";
import splash from "../../assets/splash.png";
import {TextStyle} from "../style/text.style";
import Input from "../components/input.component";

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isHost: false,
            email: '',
            password: '',
            keepMeSigned: true
        };
    }

    render() {
        const content = (<View style={[GeneralStyle.widthHeight100perc, <GeneralStyle className="grow1"></GeneralStyle>]}>
            <View style={[GeneralStyle.centerAll, { height: '30%'}]}>
                <Image
                    style={{ width: 250, height: 250 }}
                    source={splash}
                />
            </View>
            <View style={[GeneralStyle.marginTop30, GeneralStyle.grow1, GeneralStyle.horizontalGlobalPadding, GeneralStyle.alignCenter]}>
                <Text style={TextStyle.h1}>Welcome!</Text>

                <View style={GeneralStyle.marginTop30}>
                    <Input
                        label={'Your e-mail'}
                        value={this.state.email}
                        inputStyle={{ minWidth: '60%' }}
                        type={'email'}
                        onChange={(value) => {
                            this.setState({
                                email: value
                            });
                        }}
                    />

                    <Input
                        label={'Your password'}
                        value={this.state.password}
                        inputStyle={{ minWidth: '60%' }}
                        type={'password'}
                        onChange={(value) => {
                            this.setState({
                                password: value
                            });
                        }}
                    />
                </View>
            </View>
            <View style={[GeneralStyle.row, GeneralStyle.justifyBetween, GeneralStyle.marginTop30]}>
                <Text>buttons</Text>
            </View>
        </View>);

        return (<ScrollableScreenWrapper
            content={content}
        />);
    }
};