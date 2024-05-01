//import liraries
import React, {Component, useEffect} from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import {screensStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  getSingleCharacter,
  resetData,
} from '../../store/actions/characterActions';
import Spinner from '../../components/router/ui/spinner';
import {characterDetailStyle} from '../../styles/characterStyle';
import {statusType} from '../../utils/constants';

// create a component
const CharacterDetail = ({route}) => {
  const {characterID} = route?.params;
  const {pendingSingleCharacter, singleCharacter} = useSelector(
    state => state.characters,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleCharacter(characterID));
    return () => {
      dispatch(resetData());
      //console.log(characterID);
    };
  }, []);

  return (
    <View style={screensStyle.container}>
      {pendingSingleCharacter ? (
        <Spinner />
      ) : (
        <ScrollView>
          <View style={characterDetailStyle.imageContainer}>
            <Image
              style={[
                characterDetailStyle.image,
                singleCharacter.status == statusType.ALIVE
                  ? characterDetailStyle.statusAliveContainer
                  : characterDetailStyle.statusDeadContainer,
              ]}
              source={{uri: singleCharacter?.image}}
            />
            <View
              style={
                singleCharacter.status == statusType.ALIVE
                  ? characterDetailStyle.aliveStatusContainer
                  : characterDetailStyle.deadStatusContainer
              }>
              <Text style={characterDetailStyle.status}>
                {singleCharacter.status}
              </Text>
            </View>
          </View>
          <Text style={characterDetailStyle.name}>{singleCharacter?.name}</Text>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 20,
              marginBottom: 0,
              fontWeight: '500',
              fontSize: 16,
            }}>
            PROPERTIES
          </Text>
          <View style={characterDetailStyle.sectionContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View style={characterDetailStyle.property}>
                <Text style={{fontWeight: '600', textAlign: 'center'}}>
                  Gender
                </Text>
              </View>
              <View style={characterDetailStyle.propertyTitle}>
                <Text style={{textAlign: 'center'}}>
                  {singleCharacter?.gender}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View style={characterDetailStyle.property}>
                <Text style={{fontWeight: '600', textAlign: 'center'}}>
                  Species
                </Text>
              </View>
              <View style={characterDetailStyle.propertyTitle}>
                <Text style={{textAlign: 'center'}}>
                  {singleCharacter?.species}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View style={characterDetailStyle.property}>
                <Text style={{fontWeight: '600', textAlign: 'center'}}>
                  Status
                </Text>
              </View>
              <View style={characterDetailStyle.propertyTitle}>
                <Text style={{textAlign: 'center'}}>
                  {singleCharacter?.status}
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 20,
              marginBottom: 0,
              fontWeight: '500',
              fontSize: 16,
            }}>
            WHEREABOUTS
          </Text>
          <View style={characterDetailStyle.sectionContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View style={characterDetailStyle.property}>
                <Text style={{fontWeight: '600', textAlign: 'center'}}>
                  Origin
                </Text>
              </View>
              <View style={characterDetailStyle.propertyTitle}>
                <Text style={{textAlign: 'center'}}>
                  {singleCharacter.origin?.name}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View style={characterDetailStyle.property}>
                <Text style={{fontWeight: '600', textAlign: 'center'}}>
                  Location
                </Text>
              </View>
              <View style={characterDetailStyle.propertyTitle}>
                <Text style={{textAlign: 'center'}}>
                  {singleCharacter.location?.name}
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 20,
              marginBottom: 0,
              fontWeight: '500',
              fontSize: 16,
            }}>
            FEATURE CHAPTERS
          </Text>
          <View style={characterDetailStyle.sectionContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View style={characterDetailStyle.property}>
                <Text style={{fontWeight: '600', textAlign: 'center'}}>
                  Created
                </Text>
              </View>
              <View style={characterDetailStyle.propertyTitle}>
                <Text style={{textAlign: 'center'}}>
                  {singleCharacter?.created}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default CharacterDetail;
