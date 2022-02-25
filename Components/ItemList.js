import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ItemList = ({todo, doneTodos}) => {
  return (
    <View style={styles.List}>
        <TouchableOpacity style={styles.Icon}>
            <Icon name="check" size={30} color="black" onPress={ () => doneTodos(todo.id) } />
        </TouchableOpacity>
        <Text style={styles.Text}>
            {todo.text}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    List:{
        padding:15,
        borderBottomWidth: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    Text:{
        fontSize:18
    }
})

export default ItemList