// External dependencies
import React from "react";
import {Text, View, TouchableOpacity} from "react-native";
import { Redirect } from "react-router-native";
import { withRouter } from "react-router";
// Internal dependencies
import {WrappersStyle} from "../style/wrappers.style";
import {GeneralStyle} from "../style/general.style";

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { location } = this.props;

        if (
            location && location.pathname && (
                location.pathname.indexOf('login') >= 0 || location.pathname.indexOf('signup') >= 0
            )
        ) {
            return (<View />);
        }

        return (<View style={[WrappersStyle.navigationWrapper, GeneralStyle.absoluteBottom]}>
            {
                !!this.state.redirect && <Redirect to={this.state.redirect}/>
            }

            <TouchableOpacity
                style={WrappersStyle.navigationItemWrapper}
                onPress={() => {
                    this.setState({
                        redirect: '/facility-list'
                    });
                }}
            >
                <Text>LIST</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={WrappersStyle.navigationItemWrapper}
                onPress={() => {
                    this.setState({
                        redirect: '/login'
                    });
                }}
            >
                <Text>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={WrappersStyle.navigationItemWrapper}
                onPress={() => {
                    this.setState({
                        redirect: '/login'
                    });
                }}
            >
                <Text>SIGNUP</Text>
            </TouchableOpacity>
        </View>);
    }
}

export const Navigation = withRouter(Nav);