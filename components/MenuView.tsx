import React, {FunctionComponent, useState, useEffect} from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import {Colors, Fonts} from '../common';
import {Icon as RNEIcon} from 'react-native-elements';

const MenuView: FunctionComponent<{
  id?: Number;
  label?: string;
  icon?: string;
  press?: Function;
}> = ({
  id = 0,
  label = 'Menu',
  icon = 'menu-outline',
  press = () => console.log("menu item with id " + id + " pressed"),
}) => {
  return (
    <TouchableOpacity onPress={press} style={[{flexDirection: 'row', alignItems: 'center', paddingHorizontal: Fonts.w(15), marginVertical: Fonts.h(10)}]}>
      <RNEIcon name={icon} type='ionicon' iconStyle={{color: Colors.darkText, fontSize: Fonts.h(22), marginRight: Fonts.w(15)}} />
      <Text style={{fontSize: Fonts.h(15), color: Colors.darkText, fontFamily: Fonts.AVERTA_REGULAR}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default MenuView;
