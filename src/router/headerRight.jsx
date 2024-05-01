//import liraries
import {useNavigation} from '@react-navigation/native';
import {SearchNormal1, FilterSearch} from 'iconsax-react-native';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {FILTERCHARACTER, SEARCHCHARACTER} from '../utils/routes';

// create a component
const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row', gap: 8, marginRight: 15}}>
      <Pressable onPress={() => navigation.navigate(SEARCHCHARACTER)}>
        <SearchNormal1 size="20" color="#ff8a65" variant="Outline" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate(FILTERCHARACTER)}>
        <FilterSearch size="20" color="#ff8a65" variant="Outline" />
      </Pressable>
    </View>
  );
};

export default HeaderRight;
