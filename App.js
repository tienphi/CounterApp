import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import { Styles } from './assets/styles'
import { MyNumber, MyButton } from './src/common/components';
import { createStore } from 'redux'
import { counterApp } from './src/state/rootReducer'
import { Provider } from 'react-redux'
import { ShowNumber, SyncButton } from './src/common/containers';

const store = createStore(counterApp)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={Styles.content}>
            <View style={Styles.center}>
              <Text style={{ fontSize: 30, fontWeight: 'bold', fontStyle: 'italic' }}> Counter App </Text>
            </View>
            <View style={{ marginVertical: 20 }}>
              <ShowNumber />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <SyncButton isButtonAdd={true} />
              <SyncButton isButtonAdd={false} />
            </View>
          </View>
        </SafeAreaView>
      </Provider>
    )
  }
}
