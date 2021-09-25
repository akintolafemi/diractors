import React, {Component, FunctionComponent, useRef, useState} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, View, Image, TouchableOpacity, Text} from 'react-native';
import { Button, Input as RNEInput, SocialIcon as RNESocialIcon } from 'react-native-elements';
import CheckboxFlex from "../../components/react-native-checkbox-flex";

import {Colors, Fonts, GlobalStyles} from '../../common';
import {AccountTypes} from '../../common/Constants';
import TitleLabel from '../../components/TitleLabel';
import ScrollableContainer from '../../components/ScrollableContainer';

import {StackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';


type Props = StackScreenProps<RootStackParamList, 'Signup'>;
const SignupScreen: FunctionComponent<Props> = ({navigation}) => {

  const [email, setEmail] = useState<string>('');

  const [accountType, setAccountType] = useState<string>('');

  async function handleSignup() {
    navigation.navigate('OTP');
  }

  function handleAccountTypeSelect(e, type) {
    setTimeout(() => {
      setAccountType(type.title);
    }, 200);
  }

  return (
    <SafeAreaView style={[GlobalStyles.globalScreenBg, {padding: Fonts.w(0)}]}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent={true}
      />

      {accountType === '' ? (
        <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: Fonts.w(15), paddingTop: Fonts.h(100)}}>
          <TitleLabel title="I want to register as" containerStyle={{marginBottom: Fonts.h(50), marginTop: Fonts.h(20)}} textStyle={{fontSize: Fonts.h(20), fontFamily: Fonts.AVERTA_SEMIBOLD}} barStyle={{backgroundColor: Colors.primary, height: Fonts.h(5), width: Fonts.w(100)}}/>
          <ScrollableContainer>
            {AccountTypes.map((type, index) => {
              return (<CheckboxFlex
                key={index}
                onPress={(e) => handleAccountTypeSelect(e, type)}
                onCardPress={(e) => handleAccountTypeSelect(e, type)}
                title={type.title}
                description={type.description}
                imageSource={type.image}
                disableDate={true}
                activeCardBackgroundColor={Colors.primary}
                activeCheckboxBackgroundColor={Colors.primary}
                style={{marginBottom: Fonts.h(20), marginLeft: Fonts.w(-10)}}
              />)
            })}
          </ScrollableContainer>
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: Fonts.w(15)}}>
          <View style={{flexDirection: 'row'}}><Text style={{color: Colors.darkText, fontSize: Fonts.h(12), fontFamily: Fonts.AVERTA_SEMIBOLD}}>Account Type: </Text><Text style={{color: Colors.darkText, fontSize: Fonts.h(12), fontFamily: Fonts.AVERTA_SEMIBOLD}}>{accountType}</Text></View>
          <TitleLabel title="Get Started with Email or Phone" containerStyle={{marginBottom: Fonts.h(50), marginTop: Fonts.h(20)}} textStyle={{fontSize: Fonts.h(20), fontFamily: Fonts.AVERTA_SEMIBOLD}} barStyle={{backgroundColor: Colors.primary, height: Fonts.h(5), width: Fonts.w(100)}}/>
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
            title="Continue"
            onPress={handleSignup}
            containerStyle={{backgroundColor: Colors.primary, height: Fonts.h(50), marginHorizontal: Fonts.w(10)}}
            buttonStyle={{backgroundColor: Colors.primary, height: Fonts.h(50)}}
            titleStyle={{color: Colors.white, fontSize: Fonts.h(15)}}
          />
          <TouchableOpacity style={{alignSelf: 'flex-end', marginTop: Fonts.h(2), marginRight: Fonts.w(15)}} onPress={() => setAccountType('')}>
            <Text style={{color: Colors.dark, fontWeight: GlobalStyles.lightFont, fontSize: Fonts.h(12)}}>Go Back</Text>
          </TouchableOpacity>
        </View>
      )
      }
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

export default SignupScreen;
