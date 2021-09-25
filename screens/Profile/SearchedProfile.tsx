import React, {Component, FunctionComponent, useRef, useState} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, View, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Button, FAB, Icon as RNEIcon, Input as RNEInput } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import {Colors, Fonts, GlobalStyles} from '../../common';
import {postViews} from '../../common/Constants';

import ScrollableContainer from '../../components/ScrollableContainer';
import Line from '../../components/Line';
import TitleLabel from '../../components/TitleLabel';
import {InstaTopView} from '../../components/ProfileViews';
import {InstaStoryView} from '../../components/PostViews';

import {StackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';


type Props = StackScreenProps<RootStackParamList, 'SearchedProfile'>;
const SearchedProfileScreen: FunctionComponent<Props> = ({navigation, route}) => {

  const profile = route.params.profile
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()}>
        <RNEIcon
          name="arrow-back"
          type='ionicon'
          size={Fonts.h(20)}
          iconStyle={{fontSize: Fonts.h(20), color: Colors.darkText, marginRight: Fonts.w(15)}}
        />
      </TouchableOpacity>),
      title: profile.displayName,
      headerRight: () => (
        profile.verified ? (
          <RNEIcon name="leaf" type='ionicon' iconStyle={{color: Colors.primary, fontSize: Fonts.h(20)}} />
        ) : null
      )
    });
  }, []);

  return (
    <SafeAreaView style={[GlobalStyles.globalScreenBg, {paddingHorizontal: Fonts.w(0), paddingTop: Fonts.h(0)}]}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent={true}
      />

      <FlatList
        data={postViews}
        horizontal={false}
        ListHeaderComponent={({}) => (
          <View>
            <InstaTopView
              containerStyle={{marginTop: Fonts.h(15)}}
              id={profile.id}
              displaypicture={profile.displaypicture}
              fullName={profile.fullName}
            />
            <Line containerStyle={{marginVertical: Fonts.h(10)}} />
          </View>
        )}
        renderItem={({ item }) => (
          <InstaStoryView
            id={item.id}
            displaypicture={item.displaypicture}
            displayName={item.displayName}
            fullName={item.fullName}
            uri={item.uri}
            type={item.type}
            likes={item.likes}
            setLikes={(i, e) => console.log(i, e)}
            isVideoPlaying={isVideoPlaying}
            press={() => navigation.navigate('SearchedProfile', {profile: item})}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        onScrollBeginDrag={(e) => {
          // setShowFAB(false);
          setIsVideoPlaying(false);
        }}
        onScrollEndDrag={(e) => {
          // setShowFAB(true);
          setIsVideoPlaying(true);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default SearchedProfileScreen;
