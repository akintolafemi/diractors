import React from 'react';
import { View, Text, StyleProp, TextStyle, ViewStyle } from 'react-native';

import Colors from '../common/Colors';

import {titleName as titleName} from '../app.json';

const TitleLabel = ({
  title = titleName,
  textStyle,
  barStyle,
  containerStyle
}: {
  title?: string;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  barStyle?: StyleProp<ViewStyle>;
}) => {
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{title}</Text>
      <View style={barStyle}></View>
    </View>

  );
};
export default TitleLabel;
