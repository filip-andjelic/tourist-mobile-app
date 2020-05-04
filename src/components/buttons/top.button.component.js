// External dependencies
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
// Internal dependencies
import {themeMain5} from '../../style/colors.style';

export class TopButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            size: this.props.size ? this.props.size : 30,
            color: this.props.color ? this.props.color: themeMain5
        };
    }

    resolveIcon() {
        let icon = {};

        switch (this.props.icon) {
            case 'back':
                /*icon = (<Image style={{flex: 1, height: undefined, width: undefined, alignSelf: 'stretch'}}
                               source={require('../../assets/images/back.png')}/>);*/
                icon = (<MaterialCommunityIcons
                    name="backburger"
                    size={this.state.size}
                    color={this.state.color}
                />);

                break;
            case 'intro':
                icon = (<View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '80%'
                }}>
                    {/*<Image style={{flex: 1, height: undefined, width: undefined, alignSelf: 'stretch'}}
                           source={require('../../assets/images/intro.png')}/>*/}
                </View>);
                break;
        }

        return icon;
    }

    render() {
        let buttonStyle = {
            width: this.state.size + 45,
            height: this.state.size + 45,
            padding: 15,
            position: 'absolute',
            top: 0,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 99
        };
        let additionalStyle = {
            left: 0
        };

        if (this.props.side === 'right') {
            additionalStyle = {
                right: 0
            };
        }
        return (<TouchableOpacity
            style={[buttonStyle, additionalStyle, this.props.style]}
            activeOpacity={0.4}
            underlayColor="transparent"
            onPress={() => {
                if (this.props.pressHandle) this.props.pressHandle();
            }}>
            <View style={{
                width: this.state.size + 10,
                height: this.state.size + 10,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                flexGrow: 1
            }}>
                {this.resolveIcon()}
            </View>
        </TouchableOpacity>);
    }
}