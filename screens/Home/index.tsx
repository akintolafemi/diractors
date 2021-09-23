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
import {RootStackParamList} from '../../types';


type Props = StackScreenProps<RootStackParamList, 'Home'>;
const HomeScreen: FunctionComponent<Props> = ({navigation}) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
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
    <SafeAreaView style={[GlobalStyles.globalScreenBg, {paddingHorizontal: Fonts.w(0)}]}>
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
                  imagesrc={item.imagesrc}
                  displayName={item.displayName}
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
            imagesrc={item.imagesrc}
            displayName={item.displayName}
            fullName={item.fullName}
            uri={item.uri}
            type={item.type}
            likes={item.likes}
            setLikes={(i, e) => console.log(i, e)}
            isVideoPlaying={isVideoPlaying}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        onScrollBeginDrag={(e) => {
          setShowFAB(false);
          setIsVideoPlaying(false);
        }}
        onScrollEndDrag={(e) => {
          setShowFAB(true);
          setIsVideoPlaying(true);
        }}
      />
      {showFAB ? (
        <FAB placement="right" color={Colors.primary} onPress={navigation.openDrawer} icon={<RNEIcon name="menu-outline" type='ionicon' iconStyle={{fontSize: Fonts.h(25), color: Colors.white}} />} />
      ) : null
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default HomeScreen;
