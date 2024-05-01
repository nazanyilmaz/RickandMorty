import React from 'react';
import {View} from 'react-native';

import {Link1, Man, Woman} from 'iconsax-react-native';
import {genderTypes} from '../../../utils/constants';

// create a component
const GenderIcon = ({gender, size}) => {
  if (gender == genderTypes.MALE)
    return (
      <View>
        <Man size={size} variant="Outline" color="#FF8A65" />
      </View>
    );
  if (gender == genderTypes.FEMALE)
    return (
      <View>
        <Woman size={size} variant="Outline" color="#FF8A65" />
      </View>
    );
  if (gender == genderTypes.UNKNOW)
    return (
      <View>
        <Link1 size={size} variant="Outline" color="#FF8A65" />
      </View>
    );
};

//make this component available to the app
export default GenderIcon;
