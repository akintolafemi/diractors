import React, {FunctionComponent} from 'react';
import {Text, View, ViewStyle} from 'react-native';
import {Fonts, Colors} from '../common';

const Line: FunctionComponent<{
  containerStyle?: ViewStyle;
}> = ({
  containerStyle
}) => {
  return (
    <View style={[{flexDirection: 'row', alignItems: 'center'}, containerStyle]}>
      <View style={{flex: 1, height: 1, backgroundColor: Colors.borderColor}} />
    </View>
  );
};

export default Line;
