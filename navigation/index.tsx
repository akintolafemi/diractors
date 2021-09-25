/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import {Colors, Fonts} from '../common';
import useColorScheme from '../hooks/useColorScheme';

import LandingScreen from "../screens/Landing";
import LoginScreen from "../screens/Login";
import ForgotpasswordScreen from '../screens/Forgotpassword';
import SingupScreen from '../screens/Signup';
import OTPScreen from '../screens/Signup/OTP';
import CompletesetupScreen from '../screens/Signup/Completesetup';
import DrawerNavigation from './DrawerNavigation';
import SearchScreen from '../screens/Home/Search';
import SearchedProfileScreen from '../screens/Profile/SearchedProfile';
import SettingsScreen from '../screens/Profile/Settings';
import PasswordScreen from '../screens/Profile/Password';
import PrivacyScreen from '../screens/Profile/Privacy';
import PhoneNumberScreen from '../screens/Profile/PhoneNumber';
import EmailAddressScreen from '../screens/Profile/EmailAddress';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

const routes: Array<RenderProps> = [
  {
    name: 'Landing',
    component: LandingScreen,
    options: {
      headerShown: false,
      title: ''
    },
  },
  {
    name: 'Login',
    component: LoginScreen,
    options: {
      headerShown: false,
      title: ''
    },
  },
  {
    name: 'Forgotpassword',
    component: ForgotpasswordScreen,
    options: {
      headerShown: false,
      title: ''
    },
  },
  {
    name: 'Signup',
    component: SingupScreen,
    options: {
      headerShown: false,
      title: ''
    },
  },
  {
    name: 'OTP',
    component: OTPScreen,
    options: {
      headerShown: false,
      title: ''
    },
  },
  {
    name: 'Completesetup',
    component: CompletesetupScreen,
    options: {
      headerShown: false,
      title: ''
    },
  },
  {
    name: 'Drawer',
    component: DrawerNavigation,
    options: {
      headerShown: false,
      title: ''
    },
  },
  {
    name: 'Search',
    component: SearchScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'SearchedProfile',
    component: SearchedProfileScreen,
    options: {
      headerShown: true,
      headerTitleStyle: headerTitleStyle,
    },
  },
  {
    name: 'Settings',
    component: SettingsScreen,
    options: {
      headerShown: true,
      headerTitleStyle: headerTitleStyle,
    },
  },
  {
    name: 'Password',
    component: PasswordScreen,
    options: {
      headerShown: true,
      headerTitleStyle: headerTitleStyle,
    },
  },
  {
    name: 'Privacy',
    component: PrivacyScreen,
    options: {
      headerShown: true,
      headerTitleStyle: headerTitleStyle,
    },
  },
  {
    name: 'PhoneNumber',
    component: PhoneNumberScreen,
    options: {
      headerShown: true,
      headerTitleStyle: headerTitleStyle,
    },
  },
  {
    name: 'EmailAddress',
    component: EmailAddressScreen,
    options: {
      headerShown: true,
      headerTitleStyle: headerTitleStyle,
    },
  },
];

const headerTitleStyle = {color: Colors.darkText, fontSize: Fonts.h(20), fontFamily: Fonts.AVERTA_SEMIBOLD , fontWeight: '600', marginLeft: Fonts.w(0)};

export function renderScreen({name, component, options = {}, initialParams = {}}: RenderProps) {
  return (
    <Stack.Screen
      name={name}
      key={name}
      options={options}
      component={component}
      initialParams={initialParams}
    />
  );
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator({initialRouteName}:{initialRouteName: string}) {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        //headerLeft: () => <HeadBackButton />,
        headerStyle: {
          backgroundColor: Colors.white,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
      initialRouteName={initialRouteName}
    >
      {routes.map((route) => {
        return renderScreen(route);
      })}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
