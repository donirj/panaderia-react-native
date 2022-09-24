import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {Categories, Products, Product, ProductDetails} from  '../screens'

const Stack = createStackNavigator()

const ShopNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Categories'>
            <Stack.Screen name="Categories" component={Categories}/>
            <Stack.Screen name="Product" component={Product}/>
            <Stack.Screen name="ProductDetails" component={ProductDetails}/>
        </Stack.Navigator>
    )
}

export default ShopNavigator