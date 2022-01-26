import {
    SafeAreaView,
    Text,
    View,
    Button
  } from 'react-native';
 
  import styles from './styles';
  
  const Categories = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text>Categorías</Text>
          <Button title="Ir a productos" onPress={() => navigation.navigate('Productos')} />
        </View>
      </SafeAreaView>
    );
  };
  
  
  
  export default Categories;