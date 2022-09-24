import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles'
//todas las vistas en el stack reciben el navigation
//dentro están todos los metodos del stack, incluyendo navigate, que permite navegar a la vista que querramos
//cada pantalla asociada a un stack va contenter navigation
const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext} title='go to add screen' onPress={() => navigation.navigate('Product')}>Product</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Categories