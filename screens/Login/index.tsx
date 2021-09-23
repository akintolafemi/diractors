import React, {Component, FunctionComponent, useRef, useState} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, View, Image, TouchableOpacity, Text} from 'react-native';
import { Button, Input as RNEInput, SocialIcon as RNESocialIcon } from 'react-native-elements';

import {Colors, Fonts, GlobalStyles} from '../../common';
import TitleLabel from '../../components/TitleLabel';

import {StackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';

type Props = StackScreenProps<RootStackParamList, 'Login'>;
const LoginScreen: FunctionComponent<Props> = ({navigation}) => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassowrd] = useState<Object>({value: true, icon: 'eye-outline'});

  async function handleSignIn() {
    navigation.navigate('Drawer');
  }

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

        <TitleLabel title="Sign In" containerStyle={{marginBottom: Fonts.h(50), marginTop: Fonts.h(20)}} textStyle={{fontSize: Fonts.h(20), fontFamily: Fonts.AVERTA_SEMIBOLD}} barStyle={{backgroundColor: Colors.primary, height: Fonts.h(5), width: Fonts.w(30)}}/>
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
        <RNEInput
          placeholder='Password'
          value={password}
          onChangeText={text => setPassword(text)}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          containerStyle={styles.containerStyle}
          returnKeyType="next"
          keyboardType="default"
          secureTextEntry={showPassword.value}
          rightIcon={{ type: 'ionicon', name: showPassword.icon, color: Colors.dark, size: Fonts.h(20), onPress: () => {showPassword.value ? setShowPassowrd({value: false, icon: 'eye-off-outline'}) :setShowPassowrd({value: true, icon: 'eye-outline'}) } }}
        />
        <Button
          title="Sign In"
          onPress={handleSignIn}
          containerStyle={{backgroundColor: Colors.primary, height: Fonts.h(50), marginHorizontal: Fonts.w(10)}}
          buttonStyle={{backgroundColor: Colors.primary, height: Fonts.h(50)}}
          titleStyle={{color: Colors.white, fontSize: Fonts.h(15)}}
        />
        <TouchableOpacity style={{alignSelf: 'flex-end', marginTop: Fonts.h(2), marginRight: Fonts.w(15)}} onPress={() => navigation.navigate('Forgotpassword')}>
          <Text style={{color: Colors.dark, fontWeight: GlobalStyles.lightFont, fontSize: Fonts.h(12)}}>Forgot Password</Text>
        </TouchableOpacity>

        <View style={{alignItems: 'center', marginTop: Fonts.h(20)}}>
          <Text style={{color: Colors.dark}}>Or sign in with</Text>
          <View style={{flexDirection: 'row', marginTop: Fonts.h(10)}}>
            <TouchableOpacity>
              <RNESocialIcon
                type='facebook'
                raised={false}
                iconSize={Fonts.h(18)}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <RNESocialIcon
                type='google'
                raised={false}
                iconSize={Fonts.h(18)}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <RNESocialIcon
                type='twitter'
                raised={false}
                iconSize={Fonts.h(18)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{justifyContent: 'center', marginTop: Fonts.h(60), flexDirection: 'row'}}
        >
          <Text style={{color: Colors.dark, fontSize: Fonts.h(12)}}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}><Text style={{color: Colors.pulser, fontWeight: Fonts.lightFont, fontSize: Fonts.h(12)}}> Sign Up</Text></TouchableOpacity>
        </View>

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

export default LoginScreen;
