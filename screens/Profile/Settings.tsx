import React, {Component, FunctionComponent, useRef, useState} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, View, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Button, FAB, Icon as RNEIcon, Input as RNEInput } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import {Colors, Fonts, GlobalStyles} from '../../common';
import {menuList} from '../../common/Constants';

import ScrollableContainer from '../../components/ScrollableContainer';
import Line from '../../components/Line';
import TitleLabel from '../../components/TitleLabel';
import {InstaTopView} from '../../components/ProfileViews';
import {InstaStoryView} from '../../components/PostViews';
import MenuView from '../../components/MenuView';

import {StackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';


type Props = StackScreenProps<RootStackParamList, 'Settings'>;
const SettingsScreen: FunctionComponent<Props> = ({navigation, route}) => {

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
      title: 'Settings',
      headerRight: null
    });
  }, []);

  return (
    <SafeAreaView style={[GlobalStyles.globalScreenBg, {paddingHorizontal: Fonts.w(0), paddingTop: Fonts.h(20)}]}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent={true}
      />
      <FlatList
        data={menuList}
        horizontal={false}
        renderItem={({ item }) => (
          <MenuView
            id={item.id}
            label={item.label}
            icon={item.icon}
            press={() => navigation.navigate(item.route)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default SettingsScreen;
