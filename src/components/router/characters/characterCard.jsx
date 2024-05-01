//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import Colors from '../../../theme/colors';
import {ArrowRight} from 'iconsax-react-native';
import GenderIcon from './genderIcon';
import {useNavigation} from '@react-navigation/native';
import {CHARACTERDETAIL} from '../../../utils/routes';

// create a component
const CharacterCard = ({item}) => {
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
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.species}>{item.species}</Text>
        <View style={styles.statusContainer}>
          <View>
            <Text>{item.status}</Text>
          </View>
          <View style={styles.genderContainer}>
            <Text style={{marginLeft: 3}}>{item.gender}</Text>
            <GenderIcon size={18} gender={item.gender} variant="Outline" />
          </View>
        </View>
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
    backgroundColor: '#e4dccf',
    marginHorizontal: 5,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,

    shadowColor: Colors.ORANGE,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.7,
  },
  imageContainer: {
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  iconContainer: {
    fontWeight: '800',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  species: {
    color: 'gray',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
});

//make this component available to the app
export default CharacterCard;
