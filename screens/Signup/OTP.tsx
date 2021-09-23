import React, {Component, FunctionComponent, useRef, useState, useEffect} from 'react';
import {AppRegistry, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, StatusBar, ActivityIndicator} from 'react-native';
import {Input as RNEInput, Button as RNEButton} from 'react-native-elements';

import {Colors, Fonts, GlobalStyles} from '../../common';
import OtpInput from '../../components/OtpInput';

import {StackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/routes';
import TitleLabel from '../../components/TitleLabel';

type Props = StackScreenProps<RootStackParamList, 'OTP'>;
const OTPScreen: FunctionComponent<Props> = ({navigation, route}) => {

  async function handleValidateOTP() {
    navigation.navigate('Completesetup');
  }

  return (
    <SafeAreaView style={[GlobalStyles.globalScreenBg, {justifyContent: 'center'}]}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent={true}
      />
      <View>
        <TitleLabel title="OTP" containerStyle={{marginBottom: Fonts.h(50), marginTop: Fonts.h(20)}} textStyle={{fontSize: Fonts.h(20), fontFamily: Fonts.AVERTA_SEMIBOLD}} barStyle={{backgroundColor: Colors.primary, height: Fonts.h(5), width: Fonts.w(20)}}/>
        <View style={{marginTop: Fonts.h(20), marginHorizontal: Fonts.w(10)}}>
          <Text style={{marginBottom: Fonts.h(20), textAlign: 'center'}}>Verification code was sent to {route.params.numLock}</Text>
          <OtpInput
            boxCount={4}
            onChange={(code) => {
              if (code.length === 4) {
                handleValidateOTP()
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  socialBtn: {
    borderRadius: Fonts.h(20),
    marginVertical: Fonts.h(10)
  },
});

export default OTPScreen;
