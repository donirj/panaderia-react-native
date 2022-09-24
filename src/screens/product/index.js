import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles'

const Product = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Product</Text>
      <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext} title='go to add screen' onPress={() => navigation.navigate('ProductDetails')}>Detail</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Product