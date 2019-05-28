import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import { Styles } from './assets/styles'
import { MyNumber, MyButton } from './src/common/components';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={Styles.content}>
          <View style={Styles.center}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', fontStyle: 'italic' }}> Counter App </Text>
          </View>
          <MyNumber containerStyle={{marginVertical: 20}}/>
          <MyButton onClick={()=> alert('Hello')} />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})
