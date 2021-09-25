import React, {FunctionComponent, useState, useEffect} from 'react';
import {Image, Text, View, TouchableOpacity, ViewStyle, StyleProp, ImageStyle, useWindowDimensions, ActivityIndicator } from 'react-native';
import {Colors, Fonts} from '../common';
import Line from './Line';
import {Icon as RNEIcon, Card as RNECard, Button as RNEButton, Avatar as RNEAvatar, Image as RNEImage} from 'react-native-elements';

export const NotificationListView: FunctionComponent<{
  id?: string;
  displayName?: string;
  message?: string;
  senttime?: string;
  press?: Function;
  type?: string;
}> = ({
  id,
  displayName = 'Oluwafemi',
  message = 'Oluwafemi watched your profile for 2mins',
  senttime = 'Mon Sept 19 2021 13:04:46',
  press,
  type = 'watch'
}) => {

  var addPress = true;
  // switch (type) {
  //   case 'watch':
  //     addPress = false;
  //     break;
  //   default:
  //     addPress = true;
  //     break;
  // }

  return (
    <View style={{}}>
      <TouchableOpacity onPress={addPress ? press : () => console.log("No Action")} style={{paddingHorizontal: Fonts.w(15)}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: Fonts.h(13), color: Colors.darkText, fontFamily: Fonts.AVERTA_BOLD}}>{displayName}</Text>
          <Text style={{fontSize: Fonts.h(13), color: Colors.darkText, fontFamily: Fonts.AVERTA_BOLD}}>{senttime}</Text>
        </View>
        <Text style={{fontSize: Fonts.h(13), color: Colors.darkText, fontFamily: Fonts.AVERTA_LIGHT_ITALIC, paddingTop: Fonts.h(2)}}>{message}</Text>
      </TouchableOpacity>
      <Line containerStyle={{marginVertical: Fonts.h(10)}} />
    </View>
  );
};
