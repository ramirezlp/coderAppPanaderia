import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button
} from 'react-native';

import styles from './styles';

const Products = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Productos</Text>
        <Button title="Ir al detalle del producto" onPress={() => navigation.navigate('Detalle producto')} />
      </View>
    </SafeAreaView>
  );
};



export default Products;
