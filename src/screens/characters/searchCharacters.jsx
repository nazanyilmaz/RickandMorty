//import liraries
import React, {useEffect, useState} from 'react';
import {View, FlatList, TextInput} from 'react-native';
import {screensStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacterList,
} from '../../store/actions/characterActions';
import Spinner from '../../components/router/ui/spinner';

import SearchItem from '../../components/router/characters/searchItem';
import Colors from '../../theme/colors';
import CustomButton from '../../components/router/ui/customButton';

const SearchCharacters = () => {
  const {characterList, pending, params} = useSelector(
    state => state.characters,
  );
  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacterList(params));
  }, []);
  const handleSubmit = () => {
    dispatch(changeParams({name: searchText}));
  };
  const ListHeaderComponent = () => {
    //console.log(params);
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          onChangeText={text => {
            setSearchText(text);
          }}
          onSubmitEditing={handleSubmit}
          value={searchText}
          clearButtonMode="while-editing"
          returnKeyType="search"
          placeholder="type character name"
          style={{
            padding: 10,
            width: '98%',
            height: 40,
            borderWidth: 1,
            borderRadius: 100,
            borderColor: Colors.BGORANGE,
          }}
        />
        <CustomButton
          onPress={() => handleSubmit()}
          title="Search"
          backColor={Colors.ORANGE}
        />
      </View>
    );
  };

  return (
    <View style={screensStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={characterList}
          renderItem={({item}) => <SearchItem item={item} />}
          ListHeaderComponent={ListHeaderComponent}
        />
      )}
    </View>
  );
};

//make this component available to the app
export default SearchCharacters;
