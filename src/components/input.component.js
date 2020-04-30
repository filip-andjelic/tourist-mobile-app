// External dependencies
import React from "react";
import {View, Text, TextInput} from "react-native";
// Internal dependencies
import {GeneralStyle} from "../style/general.style";
import {TextStyle} from "../style/text.style";

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        };
    }

    render() {
        const label = this.props.label;
        const inputStyle = this.props.inputStyle;
        const icon = this.props.icon;
        let additionalProps = {};

        if (this.props.type === 'email') {
            additionalProps.keyboardType = 'email-address';
            additionalProps.autoCompleteType = 'email';
        }
        if (this.props.type === 'password') {
            additionalProps.textContentType = 'password';
            additionalProps.autoCompleteType = 'password';
            additionalProps.secureTextEntry = true;
        }

        return (<View style={GeneralStyle.padding10}>
            {
                !!label && <Text style={TextStyle.label}>{label}</Text>
            }

            <TextInput
                style={[TextStyle.input, inputStyle]}
                onChangeText={(text) => {
                    if (this.props.onChange) {
                        this.props.onChange(text);
                    }

                    this.setState({
                        value: text
                    });
                }}
                value={this.state.value}
                {...additionalProps}
            />
        </View>);
    }
};