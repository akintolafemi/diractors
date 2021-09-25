import React, {Component, FunctionComponent, useRef, useState} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, View, ScrollView, TouchableOpacity, Text, Switch} from 'react-native';
import { Button, FAB, Icon as RNEIcon, Input as RNEInput, Button as RNEButton, Switch as RNESwitch } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { Select, Option } from "react-native-single-select";
import {Colors, Fonts, GlobalStyles} from '../../common';
import TitleLabel from '../../components/TitleLabel';
import ScrollableContainer from '../../components/ScrollableContainer';
import {AccountTypes, AccountTypesOptions} from '../../common/Constants';
import {StackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';


type Props = StackScreenProps<RootStackParamList, 'Privacy'>;
const PrivacyScreen: FunctionComponent<Props> = ({navigation, route}) => {

  const [visibility, setVisibility] = useState<boolean>(true);
  const [whoCanView, setWhoCanView] = useState<string>(AccountTypesOptions[0].name);

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
      title: 'Privacy',
      headerRight: null
    });
  }, []);

  return (
    <SafeAreaView style={[GlobalStyles.globalScreenBg, {paddingHorizontal: Fonts.w(0), paddingTop: Fonts.h(0)}]}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent={true}
      />

      <ScrollView
        style={{flex: 1, paddingHorizontal: Fonts.w(15), paddingVertical: Fonts.h(20)}}
        showsVerticalScrollIndicator={false}
      >
        <TitleLabel
          title="Profile Visibility"
          textStyle={styles.textStyle}
        />
        <View style={{marginTop: Fonts.h(10)}}>
          <Text style={styles.labelStyle}>{visibility ? `If you do not want your profile to be visible to anyone, toggle off this button` : `Toggle on this button to make your profile visible`}</Text>
          <RNESwitch
            value={visibility}
            onValueChange={() => {
              setVisibility(!visibility);
            }}
            color={Colors.primary}
            style={styles.styleStyle}
          />
        </View>

        <View style={{marginTop: Fonts.h(10)}}>
          <Text style={styles.labelStyle}>Who can see your profile?</Text>
          <Select
            data={AccountTypesOptions}
            value={whoCanView}
            onSelect={(id, value) =>
              setWhoCanView(value)
            }
            defaultText={whoCanView}
            style={styles.selectContainerStyle}
            textStyle={styles.valueStyle}
            transparent={true}
            backdropStyle={{backgroundColor: Colors.darkText, opacity: 0.8}}
          />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.primary,
    fontFamily: Fonts.AVERTA_BOLD,
    fontSize: Fonts.h(13)
  },
  styleStyle: {
    alignSelf: 'flex-end'
  },
  labelStyle: {
    color: Colors.darkText,
    fontSize: Fonts.h(13),
    fontFamily: Fonts.AVERTA_REGULAR
  },
  selectContainerStyle: {
    borderWidth: Fonts.h(0),
    paddingTop: Fonts.h(2),
    paddingLeft: Fonts.w(0),
  },
  valueStyle: {
    color: Colors.darkText,
    fontSize: Fonts.h(15),
    fontFamily: Fonts.AVERTA_REGULAR,
  }
});

export default PrivacyScreen;
