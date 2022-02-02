import {
    SafeAreaView,
    Text,
    View,
    Button,
    FlatList
  } from 'react-native';
 
  import styles from './styles';
  import CategoryItem from '../../components/categoriesItem/CategoryItem';
  import { CATEGORIES } from '../../utils/data/categories.js';
  
  const Categories = ({navigation}) => {
    const handleSelectedCategory = (item) => {
     navigation.navigate('Products', 
       {
         categoryId: item.id,
         name: item.title,
         color: item.color,
       }
     );
   }
 
   const renderCategories = ({item}) => {
     return (
       <CategoryItem item={item} onSelected={handleSelectedCategory} />
     )
   }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text>Categorías</Text>
          <FlatList
            data={CATEGORIES}
            renderItem={renderCategories}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  
  
  export default Categories;