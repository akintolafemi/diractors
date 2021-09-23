import React, {Component, FunctionComponent, useRef, useState} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, View, Image, TouchableOpacity, Text} from 'react-native';
import { Button, Input as RNEInput, SocialIcon as RNESocialIcon } from 'react-native-elements';

import {Colors, Fonts, GlobalStyles} from '../../common';
import TitleLabel from '../../components/TitleLabel';

import {StackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';

type Props = StackScreenProps<RootStackParamList, 'Landing'>;
const LandingScreen: FunctionComponent<Props> = ({navigation}) => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassowrd] = useState<Object>({value: true, icon: 'eye-outline'});

  async function handleSignIn() {
    navigation.navigate('Drawer');
  }

  return (
    <SafeAreaView style={[GlobalStyles.globalScreenBg, {padding: Fonts.w(0), backgroundColor: Colors.primary}]}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent={true}
      />

      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primary}}>
        <Image
          style={{height: 150, width: 150}}
          source={require('../../assets/images/icon-light.png')}
        />
      </View>

      <View style={{flex: 1, paddingHorizontal: Fonts.w(15), justifyContent: 'center'}}>

        <Button
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
          containerStyle={{backgroundColor: Colors.white, height: Fonts.h(45), marginHorizontal: Fonts.w(10), marginBottom: Fonts.h(10)}}
          buttonStyle={{backgroundColor: Colors.white, height: Fonts.h(45)}}
          titleStyle={{color: Colors.darkText, fontSize: Fonts.h(15)}}
        />
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('Signup')}
          containerStyle={{backgroundColor: Colors.primary, height: Fonts.h(45), marginHorizontal: Fonts.w(10)}}
          buttonStyle={{backgroundColor: Colors.primary, height: Fonts.h(45)}}
          titleStyle={{color: Colors.white, fontSize: Fonts.h(15)}}
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
    marginBottom: Fonts.h(0),
    marginTop: Fonts.h(-10)
  },
  socialBtn: {
    borderRadius: Fonts.h(5),
    marginVertical: Fonts.h(10)
  },
});

export default LandingScreen;
