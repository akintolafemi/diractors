import React, {FunctionComponent, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import { Icon as RNEIcon } from 'react-native-elements';
import {createStackNavigator, StackScreenProps} from '@react-navigation/native-stack';
import {DrawerActions} from '@react-navigation/native';
import {Colors, Fonts} from '../common';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar } from 'react-native-elements';

import {titleName as titleName} from '../app.json';

import HomeScreen from '../screens/Home';
import MyProfileScreen from '../screens/Profile';
import NotificationScreen from '../screens/Messages/Notification';

import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';

import {
  DrawerRenderProps
} from '../types';

const Drawer = createDrawerNavigator<DrawerStackParamList>();
//const Drawer = createDrawerNavigator();

const routes: Array<DrawerRenderProps> = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {
      headerShown: true,
      title: titleName,
      headerStyle: {},
      headerLeft: () => null,
      headerTitleStyle: {color: Colors.darkText, fontSize: Fonts.h(20), fontFamily: Fonts.AVERTA_SEMIBOLD , fontWeight: '600', marginLeft: Fonts.w(0)},
      gestureEnabled: false,
      drawerLabel: 'Home',
      drawerIcon: ({focused}) => (
        <RNEIcon name="home-outline" type='ionicon' iconStyle={[{fontSize: Fonts.h(20)}, {color: focused ? Colors.white : Colors.dark}]} />
      )
    },
    initialParams: {},
  },
  {
    name: 'MyProfile',
    component: MyProfileScreen,
    options: {
      headerShown: true,
      title: titleName,
      headerStyle: {},
      headerLeft: () => null,
      headerTitleStyle: {color: Colors.darkText, fontSize: Fonts.h(20), fontFamily: Fonts.AVERTA_SEMIBOLD , fontWeight: '600', marginLeft: Fonts.w(0)},
      gestureEnabled: false,
      drawerLabel: 'My Page',
      drawerIcon: ({focused}) => (
        <RNEIcon name="person-outline" type='ionicon' iconStyle={[{fontSize: Fonts.h(20)}, {color: focused ? Colors.white : Colors.dark}]} />
      )
    },
    initialParams: {
      profile: {
        id: '1',
        displayName: 'Angela',
        fullName: 'Angelina Jolie',
        displaypicture: 'https://fxtb.lostcryptoescrow.com/assets/img/reviewer-2.png',
        verified: true,
      }
    }
  },
  {
    name: 'Notification',
    component: NotificationScreen,
    options: {
      headerShown: true,
      title: titleName,
      headerStyle: {},
      headerLeft: () => null,
      headerTitleStyle: {color: Colors.darkText, fontSize: Fonts.h(20), fontFamily: Fonts.AVERTA_SEMIBOLD , fontWeight: '600', marginLeft: Fonts.w(0)},
      gestureEnabled: false,
      drawerLabel: 'My Notifications',
      drawerIcon: ({focused}) => (
        <RNEIcon name="notifications-outline" type='ionicon' iconStyle={[{fontSize: Fonts.h(20)}, {color: focused ? Colors.white : Colors.dark}]} />
      )
    },
    initialParams: {},
  },
];

export function renderScreen({
  name,
  component,
  options = {},
  initialParams = {}
}: DrawerRenderProps) {
  return (
    <Drawer.Screen
      name={name}
      key={name}
      component={component}
      options={options}
      initialParams={initialParams}
    />
  );
}

// drawerContent={(props) => <CustomDrawerContent {...props}/>}

const DrawerNavigation: FunctionComponent<Props> = ({navigation, route}) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="TabOne"
      drawerType="slide"
      screenOptions={{
        drawerStyle: {backgroundColor: Colors.white, paddingTop: Fonts.h(20), paddingHorizontal: Fonts.w(10)},
        drawerItemStyle: {paddingVertical: Fonts.h(0), marginBottom: Fonts.h(0)},
        drawerLabelStyle: {marginLeft: Fonts.w(-15)},
        drawerActiveBackgroundColor: Colors.primary,
        drawerActiveTintColor: Colors.white,
        // drawerInactiveBackgroundColor: Colors.primary,
        drawerInactiveTintColor: Colors.darkText,
      }}
    >
      {routes.map((route) => {
        return renderScreen(route);
      })}
    </Drawer.Navigator>
  );
};

export const navigationRef: any = React.createRef();

export function openDrawer() {
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
}

function CustomDrawerContent({progress, ...rest }) {

  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 255 }],
    };
  });

  // const translateX = Animated.interpolate(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [-100, 0],
  // });
  const [userDetails, setUserDetails] = useState({});
  const [displayName, setDisplayName] = useState("Oluwafemi");

  async function getData() {
    try {
      const retrievedData =  await AsyncStorage.getItem('userDetails');
      const savedData = JSON.parse(retrievedData);
      return savedData
    } catch (error) {
      console.log(error.message);
    }
    return
  }

  useEffect(() => {
    getData().then((data) => {
      setUserDetails(data)
      if (data !== null) {
        if (data.displayName != null)
          setDisplayName(data.displayName);
      }
    });
  }, []);

  return (
    <DrawerContentScrollView {...rest}>
      <Animated.View style={[animatedStyles]}>
        <View style={{alignItems: 'center', borderBottomWidth: Fonts.w(1), borderBottomColor: Colors.dotcColor, paddingBottom: Fonts.h(20), marginBottom: Fonts.h(20)}}>
          <Avatar
            rounded
            size="xlarge"
            source={{
              uri: 'https://fxtb.lostcryptoescrow.com/assets/img/reviewer-2.png',
            }}
          />
          <View style={{marginTop: Fonts.h(10)}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: Colors.text, fontSize: Fonts.h(16), fontWeight: 'bold'}}>{displayName}</Text>
              <RNEIcon name="leaf" type='ionicon' iconStyle={{color: Colors.primary, fontSize: Fonts.h(12), marginLeft: Fonts.w(5)}} />
            </View>
          </View>
        </View>
        <DrawerItemList {...rest} />
        <DrawerItem
          label="Logout"
          icon={({focused}) => (
            <RNEIcon name="log-out-outline" type='ionicon' iconStyle={[{fontSize: Fonts.h(20)}, {color: focused ? Colors.white : Colors.dark}]} />
          )}
          style={{paddingVertical: Fonts.h(0), marginBottom: Fonts.h(0)}}
          labelStyle={{marginLeft: Fonts.w(-15)}}
          activeBackgroundColor={Colors.primary}
          activeTintColor={Colors.white}
          // inactiveBackgroundColor={Colors.primary}
          inactiveTintColor={Colors.darkText}
          onPress={() => {}}
        />
      </Animated.View>
    </DrawerContentScrollView>
  );
}

export default DrawerNavigation;
