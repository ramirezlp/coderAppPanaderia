
   
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../screens/categories/Categories';
import ProductDetail from '../screens/productDetail/ProductDetail';
import Products from '../screens/products/Products';
import { Platform } from 'react-native';
import { COLORS } from '../utils/constants/colors';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator
                initialRouteName='Categorías'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }}
            >
                <Stack.Screen name="Categorías" component={Categories} />
                <Stack.Screen 
                    name="Products"
                    component={Products}
                    options={({ route }) => {
                        return ({
                        title: route.params.name,
                        headerStyle: {
                            backgroundColor: route.params.color
                        },
                    })}}
                />
                <Stack.Screen 
                    name="ProductDetail"
                    component={ProductDetail}
                    options={({ route }) => ({
                        title: route.params.name,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;
