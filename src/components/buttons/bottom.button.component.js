// External dependencies
import React from "react";
import {Image, TouchableHighlight, View} from "react-native";
import {AntDesign, MaterialIcons} from '@expo/vector-icons';
// Internal dependencies
import {themeMain5} from "../../style/colors.style";

export class BottomButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            size: this.props.size ? this.props.size : 30,
            color: this.props.color ? this.props.color: themeMain5
        };
    }

    renderIcon(icon) {
        let element = {};

        switch(icon) {
            case 'switch':
                element = (<MaterialIcons
                    name="open-in-new"
                    size={this.state.size}
                    color={this.state.color}
                />);
                break;
            case 'login':
                element = (<AntDesign
                    name="login"
                    size={this.state.size}
                    color={this.state.color}
                />);
                break;
        }

        return element;
    }

    render() {
        const component = this;
        const icon = component.props.icon ? component.props.icon : 'login';
        const side = component.props.side ? component.props.side : 'right';
        let style = {
            position: 'absolute',
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            shadowOpacity: 0.75,
            marginBottom: -50,
            width: this.state.size + 15,
            height: this.state.size + 15,
        };

        if (side === 'right') {
            style.right = 0;
            style.marginRight = 15;
        } else {
            style.left = 0;
            style.marginLeft = 15;
        }

        return (<TouchableHighlight
            style={[style, this.props.style]}
            activeOpacity={0.5}
            underlayColor="transparent"
            onPress={() => {
                if (component.props.pressHandle) component.props.pressHandle();
            }}>
            <View style={[{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                flexGrow: 1
            }, component.props.iconStyle]}>
                {this.renderIcon(icon)}
            </View>
        </TouchableHighlight>);
    }
}