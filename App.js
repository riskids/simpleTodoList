import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header from './Components/Header'

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="To Do List"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default App