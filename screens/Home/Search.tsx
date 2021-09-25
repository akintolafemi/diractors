import React, {Component, FunctionComponent, useRef, useState} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, View, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Button, FAB, Icon as RNEIcon, Input as RNEInput } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import {openDrawer} from '../../navigation/DrawerNavigation';
import {Colors, Fonts, GlobalStyles} from '../../common';
import {profileSearchRes} from '../../common/Constants';

import ScrollableContainer from '../../components/ScrollableContainer';
import {InstaRoundView} from '../../components/ProfileViews';
import {SearchResultView} from '../../components/SearchViews';
import Line from '../../components/Line';
import TitleLabel from '../../components/TitleLabel';

import {StackScreenProps} from '@react-navigation/native-stack';
import {DrawerStackParamList} from '../../types';


type Props = StackScreenProps<DrawerStackParamList, 'Search'>;
const SearchScreen: FunctionComponent<Props> = ({navigation}) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({

    });
  }, []);

  return (
    <SafeAreaView style={[GlobalStyles.globalScreenBg, {paddingHorizontal: Fonts.w(0), paddingTop: Fonts.h(0)}]}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent={true}
      />
      <View style={{marginTop: Fonts.h(50), marginBottom: Fonts.h(15), paddingHorizontal: Fonts.w(15), flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <RNEIcon
            name="arrow-back"
            type='ionicon'
            size={Fonts.h(20)}
            iconStyle={{fontSize: Fonts.h(20), color: Colors.darkText,}}
          />
        </TouchableOpacity>
        <RNEInput
          placeholder='Search'
          inputContainerStyle={{
            borderRadius: Fonts.h(5),
            borderWidth: Fonts.h(1),
            borderColor: Colors.borderColor,
            paddingHorizontal: Fonts.w(15),
            height: Fonts.h(45),
            backgroundColor: Colors.white,
          }}
          inputStyle={{
            fontSize: Fonts.h(15)
          }}
          containerStyle={{
            paddingHorizontal: Fonts.w(15),
            height: Fonts.h(45),
            marginBottom: Fonts.h(0),
            marginTop: Fonts.h(0),
          }}
        />
        <View style={{width: Fonts.w(15)}}></View>
      </View>
      <FlatList
        data={profileSearchRes}
        horizontal={false}
        ListHeaderComponent={({}) => (
          <View>
            <Line containerStyle={{marginVertical: Fonts.h(10)}} />
          </View>
        )}
        renderItem={({ item }) => (
          <SearchResultView
            id={item.id}
            displaypicture={item.displaypicture}
            displayName={item.displayName}
            fullName={item.fullName}
            press={() => navigation.navigate('SearchedProfile', {profile: item})}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        onScrollBeginDrag={(e) => {
        }}
        onScrollEndDrag={(e) => {
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default SearchScreen;
