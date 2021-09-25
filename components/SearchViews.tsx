import React, {FunctionComponent, useState, useEffect} from 'react';
import {Image, Text, View, TouchableOpacity, ViewStyle, StyleProp, ImageStyle, useWindowDimensions, ActivityIndicator } from 'react-native';
import {Colors, Fonts} from '../common';
import {Icon as RNEIcon, Card as RNECard, Button as RNEButton, Avatar as RNEAvatar, Image as RNEImage} from 'react-native-elements';
import TimeAgo from '../functions/TimeAgo';
import { Video, AVPlaybackStatus } from 'expo-av';

export const SearchResultView: FunctionComponent<{
  id?: string;
  displaypicture?: string;
  displayName?: string;
  fullName?: string;
  press?: Function;
}> = ({
  id,
  displaypicture,
  displayName = 'Oluwafemi',
  fullName = 'Micheal Oluwafemi',
  press,
}) => {


  return (
    <View style={{marginBottom: Fonts.h(10), paddingHorizontal: Fonts.w(10)}}>
      <TouchableOpacity onPress={press} style={{flexDirection: 'row', alignItems: 'center'}}>
        <RNEAvatar
          rounded
          size="medium"
          source={{
            uri: displaypicture
          }}
          containerStyle={{borderWidth: Fonts.w(1), borderColor: Colors.secondary, padding: Fonts.w(0.5)}}
        />
        <View style={{marginLeft: Fonts.w(10)}}>
          <Text style={{fontSize: Fonts.h(15), color: Colors.darkText, fontFamily: Fonts.AVERTA_BOLD}}>{displayName}</Text>
          <Text style={{fontSize: Fonts.h(13), color: Colors.darkText, fontFamily: Fonts.AVERTA_REGULAR}}>{fullName}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
