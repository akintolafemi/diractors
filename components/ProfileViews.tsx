import React, {FunctionComponent} from 'react';
import {Image, Text, View, TouchableOpacity, ViewStyle, StyleProp, ImageStyle} from 'react-native';
import {Colors, Fonts} from '../common';
import {Icon as RNEIcon, Card as RNECard, Button as RNEButton, Avatar as RNEAvatar} from 'react-native-elements';

export const InstaRoundView: FunctionComponent<{
  index?: Number;
  displaypicture?: string;
  displayName?: string;
  press?: Function
}> = ({
  index,
  displaypicture,
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
            uri: displaypicture
          }}
          containerStyle={{borderWidth: Fonts.w(2), borderColor: Colors.secondary, padding: Fonts.w(1)}}
        />
        <Text style={{fontFamily: Fonts.AVERTA_BOLD, fontSize: Fonts.h(13), color: Colors.darkText, marginTop: Fonts.h(5)}}>{displayName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const InstaTopView: FunctionComponent<{
  id?: Number;
  displaypicture?: string;
  displayName?: string;
  fullName?: string;
  phone?: string;
  email?: string;
  accountType?: string;
  moreAccountType?: Array;
  timeline?: string;
  watchers?: Number;
  watchering?: Number;
  watchersList?: Array;
  containerStyle?: ViewStyle
}> = ({
  index,
  displaypicture,
  displayName,
  fullName = 'Micheal Oluwafemi',
  phone = '+2348100131944',
  email = 'michealakintola106.pog@gmail.com',
  accountType = 'Actor',
  moreAccountType = ['Director', 'Writer'],
  timeline = 'I am a veteran actor who has been in the movie industry for 10years. I take on major character in production and I am good at what I do.',
  watchers = 120,
  watchering = 11,
  watchersList = ['Jide Kosoko', 'Antar Laniyan', 'Afonja Olaniyi', 'Modupe Babs'],
  containerStyle = {}
}) => {

  var watchersshort;
  switch (watchersList.length) {
    case 0:
      watchersshort = '';
      break;
    case 1:
      watchersshort = 'Watched by ' + watchersList[0];
      break;
    case 2:
      watchersshort = 'Watched by ' + watchersList[0] + ' and ' + watchersList[1];
      break;
    default:
      watchersshort = 'Watched by ' + watchersList[0] + ', ' + watchersList[1] + ' and ' + (watchersList.length - 2) + ' others';
      break;
  }

  return (
    <View style={[{paddingTop: Fonts.h(10), paddingHorizontal: Fonts.w(15)}, containerStyle]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <RNEAvatar
          rounded
          size="large"
          source={{
            uri: displaypicture
          }}
          containerStyle={{borderWidth: Fonts.w(2), borderColor: Colors.secondary, padding: Fonts.w(1)}}
        />
        <View style={{alignSelf: 'center', alignItems: 'center'}}>
          <Text style={{fontFamily: Fonts.AVERTA_BOLD, fontSize: Fonts.h(22), color: Colors.darkText}}>{watchers}</Text>
          <Text style={{fontFamily: Fonts.AVERTA_LIGHT, fontSize: Fonts.h(13), color: Colors.darkText}}>Watchers</Text>
        </View>
        <View style={{alignSelf: 'center', alignItems: 'center'}}>
          <Text style={{fontFamily: Fonts.AVERTA_BOLD, fontSize: Fonts.h(22), color: Colors.darkText}}>{watchering}</Text>
          <Text style={{fontFamily: Fonts.AVERTA_LIGHT, fontSize: Fonts.h(13), color: Colors.darkText}}>Watching</Text>
        </View>
      </View>
      <View style={{marginTop: Fonts.h(10)}}>
        {displayName ? (
          <Text style={{fontFamily: Fonts.AVERTA_BOLD, fontSize: Fonts.h(13), color: Colors.darkText, marginBottom: Fonts.h(5)}}>{displayName}</Text>
        ) : null
        }
        <Text style={{fontFamily: Fonts.AVERTA_BOLD, fontSize: Fonts.h(13), color: Colors.darkText, marginBottom: Fonts.h(2)}}>{fullName}</Text>
        <Text style={{fontFamily: Fonts.AVERTA_REGULAR, fontSize: Fonts.h(13), color: Colors.darkText, marginBottom: Fonts.h(2)}}>{accountType}</Text>
        {moreAccountType.length > 0 ? (
          <Text style={{fontFamily: Fonts.AVERTA_REGULAR, fontSize: Fonts.h(13), color: Colors.darkText, marginBottom: Fonts.h(2)}}>{moreAccountType.join(', ')}</Text>
        ): null
        }
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontFamily: Fonts.AVERTA_REGULAR, fontSize: Fonts.h(13), color: Colors.darkText, marginBottom: Fonts.h(2)}}>{phone}</Text>
          <Text style={{fontFamily: Fonts.AVERTA_REGULAR, fontSize: Fonts.h(13), color: Colors.darkText, marginBottom: Fonts.h(2), marginLeft: Fonts.w(5)}}>{email}</Text>
        </View>
        <Text style={{fontFamily: Fonts.AVERTA_LIGHT, fontSize: Fonts.h(13), color: Colors.darkText, marginBottom: Fonts.h(2)}}>{timeline}</Text>
        <Text style={{fontFamily: Fonts.AVERTA_REGULAR, fontSize: Fonts.h(13), color: Colors.darkText, marginBottom: Fonts.h(2)}}>{watchersshort}</Text>
      </View>
    </View>
  );
};
