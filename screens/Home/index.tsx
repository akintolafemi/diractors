import React, {Component, FunctionComponent, useRef, useState} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, View, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Button, FAB, Icon as RNEIcon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import {openDrawer} from '../../navigation/DrawerNavigation';
import {Colors, Fonts, GlobalStyles} from '../../common';
import {topRoundViews, postViews} from '../../common/Constants';

import ScrollableContainer from '../../components/ScrollableContainer';
import {InstaRoundView} from '../../components/ProfileViews';
import {InstaStoryView} from '../../components/PostViews';
import Line from '../../components/Line';
import TitleLabel from '../../components/TitleLabel';

import {StackScreenProps} from '@react-navigation/native-stack';
import {DrawerStackParamList} from '../../types';


type Props = StackScreenProps<DrawerStackParamList, 'Home'>;
const HomeScreen: FunctionComponent<Props> = ({navigation}) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (<TouchableOpacity onPress={navigation.openDrawer}>
        <RNEIcon
          name="menu-outline"
          type='ionicon'
          size={Fonts.h(20)}
          iconStyle={{fontSize: Fonts.h(20), color: Colors.darkText, marginLeft: Fonts.w(15)}}
        />
      </TouchableOpacity>),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <RNEIcon
            name="search-outline"
            type='ionicon'
            iconStyle={{fontSize: Fonts.h(20), color: Colors.darkText, marginRight: Fonts.w(10)}}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  const [showFAB, setShowFAB] = useState<boolean>(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);

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
            <FlatList
              data={topRoundViews}
              horizontal={true}
              renderItem={({ item, index }) => (
                <InstaRoundView
                  index={index}
                  displaypicture={item.displaypicture}
                  displayName={item.displayName}
                  press={() => navigation.navigate('SearchedProfile', {profile: item})}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
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
      {!showFAB ? (
        <FAB placement="right" color={Colors.primary} onPress={navigation.openDrawer} icon={<RNEIcon name="menu-outline" type='ionicon' iconStyle={{fontSize: Fonts.h(25), color: Colors.white}} />} />
      ) : null
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default HomeScreen;
