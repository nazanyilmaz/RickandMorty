//import liraries
import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {screensStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacterList,
  loadMoreCharacter,
} from '../../store/actions/characterActions';
import Spinner from '../../components/router/ui/spinner';
import CharacterCard from '../../components/router/characters/characterCard';

// create a component
const Characters = () => {
  const {characterList, pending, params} = useSelector(
    state => state.characters,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacterList(params));
  }, []);

  const handleLoadMore = () => {
    let page = params.page + 1;
    dispatch(changeParams({page: page}));
    dispatch(loadMoreCharacter(params));
  };

  return (
    <View style={screensStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={characterList}
          renderItem={({item, index}) => (
            <CharacterCard item={item} key={item.id} />
          )}
          onEndReachedThreshold={0.5}
          onEndReached={handleLoadMore}
          ListFooterComponent={<Spinner />}
        />
      )}
    </View>
  );
};

//make this component available to the app
export default Characters;
