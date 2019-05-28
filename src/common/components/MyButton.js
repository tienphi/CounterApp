import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { Styles } from '../../../assets/styles';

export default class MyButton extends Component {

    static defaultProps = {
        onClick: () => { },
        text: 'Button',
        isButtonAdd: true
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={this.props.onClick}
                style={[thisStyles.button(this.props.isButtonAdd), this.props.containerStyle]}>
                <Text style={thisStyles.text(this.props.isButtonAdd)}> {this.props.text} </Text>
            </TouchableOpacity>
        )
    }
}

MyButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    isButtonAdd: PropTypes.bool.isRequired
}

const thisStyles = StyleSheet.create({
    button: isButtonAdd => ({
        ...Styles.center,
        width: 100,
        height: 40,
        borderColor: isButtonAdd? 'green' : 'red',
        borderWidth: 1,
        borderRadius: 5
    }),

    text: isButtonAdd => ({
        color: isButtonAdd? 'green' : 'red',
        fontWeight: 'bold'
    }),
})
