import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { Styles } from '../../../assets/styles';

export default class MyNumber extends Component {

    static defaultProps = {
        number: 0
    }

    render() {
        return (
            <View style={[thisStyles.container, this.props.containerStyle]}>
                <Text style={thisStyles.text}> {this.props.number} </Text>
            </View>
        )
    }
}

MyNumber.propTypes={
    number: PropTypes.number.isRequired
}

const thisStyles = StyleSheet.create({
    container: {
        ...Styles.center,
    },
    text: {
        color: 'grey',
        fontSize: 50,
        fontWeight: 'bold'
    }
})
