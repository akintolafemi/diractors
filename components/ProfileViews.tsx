import React, {FunctionComponent} from 'react';
import {Image, Text, View, TouchableOpacity, ViewStyle, StyleProp, ImageStyle} from 'react-native';
import {Colors, Fonts} from '../common';
import {Icon as RNEIcon, Card as RNECard, Button as RNEButton, Avatar as RNEAvatar} from 'react-native-elements';

export const InstaRoundView: FunctionComponent<{
  index?: Number;
  imagesrc?: string;
  displayName?: string;
  press?: Function
}> = ({
  index,
  imagesrc,
  displayName = 'Oluwafemi',
  press
}) => {
  return (
    <View style={{paddingTop: Fonts.h(10), marginRight: Fonts.w(10), marginLeft: index == 0 ? Fonts.w(10) : Fonts.w(0)}}>
      <TouchableOpacity onPress={press} style={{alignItems: 'center'}}>
        <RNEAvatar
          rounded
          size="large"
          source={{
            uri: imagesrc
          }}
          containerStyle={{borderWidth: Fonts.w(2), borderColor: Colors.secondary, padding: Fonts.w(1)}}
        />
        <Text style={{fontSize: Fonts.h(13), color: Colors.darkText, marginTop: Fonts.h(5)}}>{displayName}</Text>
      </TouchableOpacity>
    </View>
  );
};
