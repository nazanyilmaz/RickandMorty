//import liraries
import {useNavigation} from '@react-navigation/native';
import {ArrowRight} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import Colors from '../../../theme/colors';
import {CHARACTERDETAIL} from '../../../utils/routes';

// create a component
const SearchItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(CHARACTERDETAIL, {characterID: item.id})
      }
      style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.image}} />
      </View>
      <View>
        <Text style={styles.name}>{item.name}</Text>
      </View>

      <View style={styles.iconContainer}>
        <ArrowRight color="#FF8A65" variant="Bold" />
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBlockColor: Colors.BGORANGE,
    borderRadius: 30,
  },
  name: {
    fontSize: 18,
    backgroundColor: '#e4dccf',
    shadowColor: Colors.ORANGE,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
  },
  iconContainer: {
    fontWeight: '800',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  image: {
    marginRight: 10,
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});

//make this component available to the app
export default SearchItem;
