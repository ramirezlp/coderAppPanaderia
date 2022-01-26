
   
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../screens/categories/Categories';
import ProductDetail from '../screens/productDetail/ProductDetail';
import Products from '../screens/products/Products';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Categorías' >
                <Stack.Screen name="Categorías" component={Categories} />
                <Stack.Screen name="Productos" component={Products} />
                <Stack.Screen name="Detalle producto" component={ProductDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;
