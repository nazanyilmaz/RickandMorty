//import liraries
import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {screensStyle} from '../../styles/screensStyle';
import CustomButton from '../../components/router/ui/customButton';
import {genders, status} from '../../utils/constants';
import Colors from '../../theme/colors';
import {characterDetailStyle} from '../../styles/characterStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacterList,
} from '../../store/actions/characterActions';

// create a component
const FilterCharacters = ({navigation}) => {
  // const [filterGender, setFilterGender] = useState(null);
  // const [filterStatus, setFilterStatus] = useState(null);
  const {params} = useSelector(state => state.characters);
  const dispatch = useDispatch();
  const filterCharacters = () => {
    dispatch(getCharacterList(params));
  };
  const clearFilter = () => {
    dispatch(changeParams({gender: null, status: null}));
  };
  return (
    <View style={screensStyle.container}>
      <View style={{flex: 1}}>
        <ScrollView>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginVertical: 10,
              shadowColor: Colors.ORANGE,
              shadowRadius: 10,
              shadowOffset: {width: 0, height: 3},
              shadowOpacity: 0.7,
            }}>
            Gender
          </Text>
          <View style={{flexDirection: 'row'}}>
            {genders.map(item => (
              <TouchableOpacity
                onPress={() => dispatch(changeParams({gender: item.value}))}
                key={item.id}
                style={[
                  characterDetailStyle.propertyTitle,
                  {
                    backgroundColor:
                      params.gender == item.value ? Colors.ORANGE : '#e4dccf',
                  },
                ]}>
                <Text
                  style={{
                    alignItems: 'center',
                    textAlign: 'center',
                    fontSize: 13,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginVertical: 10,
              shadowColor: Colors.ORANGE,
              shadowRadius: 10,
              shadowOffset: {width: 0, height: 3},
              shadowOpacity: 0.7,
            }}>
            Status
          </Text>
          <View style={{flexDirection: 'row'}}>
            {status.map(item => (
              <TouchableOpacity
                onPress={() => dispatch(changeParams({status: item.value}))}
                key={item.id}
                style={[
                  characterDetailStyle.propertyTitle,
                  {
                    backgroundColor:
                      params.status == item.value ? Colors.ORANGE : '#e4dccf',
                  },
                ]}>
                <Text
                  style={{
                    alignItems: 'center',
                    textAlign: 'center',
                    fontSize: 13,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={{flexDirection: 'row'}}>
        <CustomButton
          title="Filter"
          backColor="#ff8a65"
          onPress={() => {
            filterCharacters(), navigation.goBack();
          }}
        />
        <CustomButton title="Clear" backColor="#2CCCE4" onPress={clearFilter} />
      </View>
    </View>
  );
};

export default FilterCharacters;
