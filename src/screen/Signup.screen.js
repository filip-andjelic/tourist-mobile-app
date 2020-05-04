// External dependencies
import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Redirect} from "react-router-native";
// Internal dependencies
import ScrollableScreenWrapper from "../components/scrollable.screen.wrapper";
import {GeneralStyle} from "../style/general.style";
import splash from "../../assets/logo.png";
import {TextStyle} from "../style/text.style";
import Input from "../components/input.component";
import {LoginAction} from "../service/Redux.Actions";
import {WrappersStyle} from "../style/wrappers.style";
import {TopButton} from "../components/buttons/top.button.component";
import {BottomButton} from "../components/buttons/bottom.button.component";

class Signup extends React.Component {
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
        if (!!this.state.redirect) return (<Redirect to={this.state.redirect}/>);

        const content = (<View style={[GeneralStyle.widthHeight100perc, GeneralStyle.grow1]}>
            <TopButton
                icon="back"
                pressHandle={() => {
                    this.setState({
                        redirect: '/facility-list'
                    });
                }}
            />

            <View style={[GeneralStyle.centerAll, {height: '30%', marginTop: 30}]}>
                <Image
                    style={{width: 180, height: 180, margin: 35}}
                    source={splash}
                />
            </View>

            <ScrollView>
                <View
                    style={[GeneralStyle.marginTop30, GeneralStyle.grow1, GeneralStyle.horizontalGlobalPadding, GeneralStyle.alignCenter]}>
                    <Text style={TextStyle.h1}>
                        {'Create new Account!'}
                    </Text>

                    <View style={[GeneralStyle.marginTop30]}>
                        <Input
                            label={'Your e-mail'}
                            value={this.state.email}
                            inputStyle={{minWidth: '60%'}}
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
                            inputStyle={{minWidth: '60%'}}
                            type={'password'}
                            onChange={(value) => {
                                this.setState({
                                    password: value
                                });
                            }}
                        />
                    </View>
                </View>
            </ScrollView>

            <View style={[GeneralStyle.row, GeneralStyle.justifyBetween, GeneralStyle.marginTop30]}>
                <BottomButton
                    icon="switch"
                    side="left"
                    pressHandle={() => {
                        this.setState({
                            redirect: '/login'
                        });
                    }}
                />

                <BottomButton
                    icon="login"
                    size={40}
                    pressHandle={() => {
                        this.props.loginAction({
                            email: this.state.email,
                            password: this.state.password,
                        });
                    }}
                />
            </View>
        </View>);

        return (<ScrollableScreenWrapper
            content={content}
        />);
    }
}

const mapStateToProps = (state) => {
    return ({
        email: state ? state.email : '',
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        loginAction: params => dispatch(LoginAction(params)),
    });
};

export const SignupScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup);
