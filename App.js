import React, {useState, setState} from 'react'
import { View, Text, StyleSheet,FlatList } from 'react-native'
import uuid from 'react-native-uuid'

import Header from './Components/Header'
import ItemList from './Components/ItemList'

const App = () => {

  const [todos, setTodos] = useState([
    {id:uuid.v4(), text:'Ngepel'},
    {id:uuid.v4(), text:'Nyapu'},
    {id:uuid.v4(), text:'Mandi'},
    {id:uuid.v4(), text:'Bersihkan Kolam'},
  ])

  const doneTodos = (id) =>{
    setTodos(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  

  return (
    <View style={styles.container}>
      <Header title="To Do List"/>
      <FlatList
        data={todos}
        renderItem={ ({item}) => <ItemList todo={item} doneTodos={doneTodos} /> }
      />
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default App