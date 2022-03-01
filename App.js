import React, {useState, setState} from 'react'
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native'
import uuid from 'react-native-uuid'

import AddList from './Components/AddList'
import Header from './Components/Header'
import ItemList from './Components/ItemList'

const App = () => {
  const [todos, setTodos] = useState([
    {id:uuid.v4(), text:'Cuci Piring'},
    {id:uuid.v4(), text:'Nyapu'},
    {id:uuid.v4(), text:'Mandi'},
    {id:uuid.v4(), text:'Bersihkan Kolam'},
  ])

  const doneTodos = (id) =>{
    setTodos(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addTodos = (textInput) =>{

    if (!textInput) {
      Alert.alert('Oops','List Masih kosong nih, Masukin data dulu yu!',{
        text:'OK'
      })
    } else {
      setTodos(prevItems=>{
        return [{id:uuid.v4(),text: textInput},...prevItems]
      })
    }
    
  }
  
  return (
    <View style={styles.container}>
      <Header title="To Do List"/>
      <AddList addTodos={addTodos} />
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