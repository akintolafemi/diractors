import React, {Component, FunctionComponent, useRef, useState} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, View, Image, TouchableOpacity, Text} from 'react-native';
import { Button, Input as RNEInput, SocialIcon as RNESocialIcon, Icon as RNEIcon } from 'react-native-elements';
import { Select, Option } from "react-native-single-select";

import {Colors, Fonts, GlobalStyles} from '../../common';
import {States} from '../../common/NigeriaStates';
import {Gender} from '../../common/Constants';
import TitleLabel from '../../components/TitleLabel';
import ScrollableContainer from '../../components/ScrollableContainer';

import {StackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';


type Props = StackScreenProps<RootStackParamList, 'Completesetup'>;
const CompletesetupScreen: FunctionComponent<Props> = ({navigation}) => {

  const [fullname, setFullname] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('State of Residence');
  const [selectedGender, setSelectedGender] = useState<string>('Gender');

  async function handleSignup() {
    navigation.navigate('Drawer');
  }

  return (
    <SafeAreaView style={[GlobalStyles.globalScreenBg, {padding: Fonts.w(0)}]}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent={true}
      />

      <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: Fonts.w(15)}}>
        <TitleLabel title="Complete Your Profile" containerStyle={{marginBottom: Fonts.h(50), marginTop: Fonts.h(20)}} textStyle={{fontSize: Fonts.h(20), fontFamily: Fonts.AVERTA_SEMIBOLD}} barStyle={{backgroundColor: Colors.primary, height: Fonts.h(5), width: Fonts.w(60)}}/>

        <RNEInput
          placeholder='Full Name'
          value={fullname}
          onChangeText={text => setFullname(text)}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          containerStyle={styles.containerStyle}
          returnKeyType="next"
          keyboardType="default"
        />
        <RNEInput
          placeholder='Stage or Nick Name'
          value={displayName}
          onChangeText={text => setDisplayName(text)}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          containerStyle={styles.containerStyle}
          returnKeyType="next"
          keyboardType="default"
        />
        <RNEInput
          placeholder='Address'
          value={address}
          onChangeText={text => setAddress(text)}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          containerStyle={styles.containerStyle}
          returnKeyType="next"
          keyboardType="default"
        />
        <Select
          data={States}
          value={selectedState}
          onSelect={(id, value) =>
            setSelectedState(value)
          }
          defaultText={selectedState}
          style={styles.selectContainerStyle}
          textStyle={styles.inputStyle}
          transparent={true}
          backdropStyle={{backgroundColor: Colors.darkText, opacity: 0.8}}
        />
        <Select
          data={Gender}
          value={selectedGender}
          onSelect={(id, value) =>
            setSelectedGender(value)
          }
          defaultText={selectedGender}
          style={styles.selectContainerStyle}
          textStyle={styles.inputStyle}
          transparent={true}
          backdropStyle={{backgroundColor: Colors.darkText, opacity: 0.8}}
        />
        <Button
          title="Continue"
          onPress={handleSignup}
          containerStyle={{backgroundColor: Colors.primary, height: Fonts.h(50), marginHorizontal: Fonts.w(10)}}
          buttonStyle={{backgroundColor: Colors.primary, height: Fonts.h(50)}}
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
    marginBottom: Fonts.h(-10),
    marginTop: Fonts.h(-10)
  },
  selectContainerStyle: {
    borderWidth: Fonts.h(0),
    borderBottomWidth: Fonts.h(1),
    borderColor: Colors.borderColor,
    paddingHorizontal: Fonts.w(15),
    height: Fonts.h(45),
    width: '100%',
    marginHorizontal: Fonts.w(2),
    marginBottom: Fonts.h(10),
  },
});

export default CompletesetupScreen;
