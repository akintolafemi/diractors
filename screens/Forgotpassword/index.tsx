import React, {Component, FunctionComponent, useRef, useState} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, View, Image, TouchableOpacity, Text} from 'react-native';
import { Button, Input as RNEInput, SocialIcon as RNESocialIcon } from 'react-native-elements';

import {Colors, Fonts, GlobalStyles} from '../../common';
import TitleLabel from '../../components/TitleLabel';

import {StackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';


type Props = StackScreenProps<RootStackParamList, 'Forgotpassword'>;
const ForgotpasswordScreen: FunctionComponent<Props> = ({navigation}) => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassowrd] = useState<Object>({value: true, icon: 'eye-outline'});

  return (
    <SafeAreaView style={[GlobalStyles.globalScreenBg, {padding: Fonts.w(0)}]}>
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
      <View style={{flex: 3, paddingHorizontal: Fonts.w(15), justifyContent: 'center'}}>
        <TitleLabel title="Retrieve Password" containerStyle={{marginBottom: Fonts.h(50), marginTop: Fonts.h(20)}} textStyle={{fontSize: Fonts.h(20), fontFamily: Fonts.AVERTA_SEMIBOLD}} barStyle={{backgroundColor: Colors.primary, height: Fonts.h(5), width: Fonts.w(50)}}/>
        <RNEInput
          placeholder='Email or Mobile'
          value={email}
          onChangeText={text => setEmail(text)}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          containerStyle={styles.containerStyle}
          returnKeyType="next"
          keyboardType="email-address"
        />
        <Button
          title="Submit"
          containerStyle={{backgroundColor: Colors.primary, height: Fonts.h(50), marginHorizontal: Fonts.w(10)}}
          buttonStyle={{backgroundColor: Colors.primary, height: Fonts.h(50)}}
          titleStyle={{color: Colors.white, fontSize: Fonts.h(15)}}
        />
        <TouchableOpacity style={{alignSelf: 'flex-end', marginTop: Fonts.h(2), marginRight: Fonts.w(15)}} onPress={() => navigation.navigate('Login')}>
          <Text style={{color: Colors.dark, fontWeight: GlobalStyles.lightFont, fontSize: Fonts.h(12)}}>Remember Password?</Text>
        </TouchableOpacity>

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

export default ForgotpasswordScreen;
