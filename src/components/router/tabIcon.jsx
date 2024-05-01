import React from 'react';
import {View} from 'react-native';
import {CHARACTERS, EPISODES, LOCATIONS, SETTINGS} from '../../utils/routes';
import {
  Location,
  People,
  PresentionChart,
  Setting2,
} from 'iconsax-react-native';

// create a component
const TabIcon = ({screenName, color, focused, size}) => {
  if (screenName == CHARACTERS)
    return (
      <View>
        <People
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      </View>
    );
  if (screenName == EPISODES)
    return (
      <View>
        <PresentionChart
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      </View>
    );
  if (screenName == LOCATIONS)
    return (
      <View>
        <Location
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      </View>
    );
  if (screenName == SETTINGS)
    return (
      <View>
        <Setting2
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      </View>
    );
};

// define your styles

//make this component available to the app
export default TabIcon;
