import React from 'react';
import {Text , View , TextInput , Image , TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {NativeRouter , Route , Redirect} from "react-router-native";
import {GeneralStyle} from "../style/general.style";
import Toast from 'react-native-simple-toast';
import {switchScreen} from "../service/Redux.Actions";
import * as DocumentPicker from 'expo-document-picker';

class SignUp extends React.Component {
    constructor(props) {
        super ( props );
        this.state = {
            email : "" ,
            password : "" ,
            rePassword : "",
            redirect : false
        };
        this.onChangeText = this.onChangeText.bind ( this )
    }

    onChangeText(text , state) {
        this.setState (
            { [state] : text }
        )
    }

    render() {
        return (
            <View style={{ flex : 1 , justifyContent : "space-between" }}>
                {!!this.state.redirect && <Redirect to={this.state.redirect}/>}
                <TouchableOpacity
                    onPress={() =>DocumentPicker.getDocumentAsync().then((result)=>console.log(result))}
                    style={[GeneralStyle.centerAll , { height : '30%' , marginTop : 30 , marginBottom : 30 }]}>
                    <Image
                        style={{ width : 180 , height : 180 }}
                        source={require ( "../../assets/logo.png" )}
                    />
                </TouchableOpacity>
                <View style={{ justifyContent : "space-between" , flexGrow : 1 }}>
                    <View>
                        <Text>Email</Text>
                        <TextInput
                            keyboardType="email-address"
                            style={{ height : 40 , borderColor : 'gray' , borderWidth : 1 }}
                            onChangeText={text => this.onChangeText ( text , 'email' )}
                            value={this.state.email}
                        />
                        <Text>Password</Text>
                        <TextInput
                            secureTextEntry={true}
                            style={{ height : 40 , borderColor : 'gray' , borderWidth : 1 }}
                            onChangeText={text => this.onChangeText ( text , 'password' )}
                            value={this.state.password}
                        />
                        <Text>Repeat password</Text>
                        <TextInput
                            secureTextEntry={true}
                            style={{ height : 40 , borderColor : 'gray' , borderWidth : 1 }}
                            onChangeText={text => this.onChangeText ( text , 'rePassword' )}
                            value={this.state.rePassword}
                        />
                    </View>
                    <View style={{ marginBottom : 20 }}>
                        <TouchableOpacity
                            onPress={() => {
                                if (this.state.password !== this.state.rePassword) {
                                    Toast.show ( "Passwords don't match!" , Toast.LONG )
                                    return
                                }
                                this.props.switchScreen ( {
                                    email : this.state.email ,
                                    password : this.state.password,

                                } )
                                this.setState({
                                    redirect: "/"
                                })
                            }
                            }
                            style={{
                                paddingHorizontal : 20 ,
                                paddingVertical : 10 ,
                                marginTop : 20 ,
                                backgroundColor : "green" ,
                            }}
                        >
                            <Text>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

}

const mapStateToProps = (state) => {
    return ({
        email : state ? state.email : '' ,
        password : state ? state.password : '' ,
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        switchScreen : (params) => {
            dispatch ( switchScreen ( params ) );
        } ,
    });
};
export const SignUpScreen = connect ( mapStateToProps , mapDispatchToProps ) ( SignUp );