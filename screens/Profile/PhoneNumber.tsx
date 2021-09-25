import React, {Component, FunctionComponent, useRef, useState} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, View, ScrollView, TouchableOpacity} from 'react-native';
import { Button, FAB, Icon as RNEIcon, Input as RNEInput, Button as RNEButton } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import {Colors, Fonts, GlobalStyles} from '../../common';

import ScrollableContainer from '../../components/ScrollableContainer';

import {StackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';


type Props = StackScreenProps<RootStackParamList, 'PhoneNumber'>;
const PhoneNumberScreen: FunctionComponent<Props> = ({navigation, route}) => {

  const [phoneNumber, setPhoneNumber] = useState<string>('');

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
      title: 'Phone Number',
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

      <View style={{flex: 1, paddingHorizontal: Fonts.w(15)}}>
        <RNEInput
          placeholder='Phone Number'
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          containerStyle={styles.containerStyle}
          returnKeyType="next"
          keyboardType="number-pad"
        />
        <RNEButton
          title="Save"
          containerStyle={{backgroundColor: Colors.white, height: Fonts.h(50), marginHorizontal: Fonts.w(10)}}
          buttonStyle={{backgroundColor: Colors.white, height: Fonts.h(50)}}
          titleStyle={{color: Colors.darkText, fontSize: Fonts.h(15)}}
        />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    borderRadius: Fonts.h(5),
    borderBottomWidth: Fonts.h(1),
    borderColor: Colors.borderColor,
    paddingHorizontal: Fonts.w(15),
    height: Fonts.h(45),
    backgroundColor: Colors.white,
  },
  inputStyle: {
    fontSize: Fonts.h(15)
  },
  containerStyle: {
    paddingHorizontal: Fonts.w(0),
    marginBottom: Fonts.h(-10),
    marginTop: Fonts.h(-10)
  },
});

export default PhoneNumberScreen;
