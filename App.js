import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import { Styles } from './assets/styles'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={Styles.content}>
          <View style={Styles.center}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', fontStyle: 'italic' }}> Counter App </Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})
