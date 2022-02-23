import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({title}) => {
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        paddingBottom:10,
        paddingTop:55,
        backgroundColor:'purple',
        alignContent:'center',
        alignItems:'center'
    },
    headerText:{
        fontSize: 18,
        fontWeight:'bold',
        color:'white'
    }
})

export default Header