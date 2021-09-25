import React, {Component, FunctionComponent, useRef, useState} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, View, Image, ScrollView, FlatList, TouchableOpacity, Text, useWindowDimensions} from 'react-native';
import { Button, FAB, Icon as RNEIcon, Input as RNEInput } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { Modalize } from 'react-native-modalize';

import {Colors, Fonts, GlobalStyles} from '../../common';
import {openDrawer} from '../../navigation/DrawerNavigation';
import {notifications} from '../../common/Constants';
import TimeAgo from '../../functions/TimeAgo';

import ScrollableContainer from '../../components/ScrollableContainer';
import Line from '../../components/Line';
import TitleLabel from '../../components/TitleLabel';
import {NotificationListView} from '../../components/NotificationViews';

import {StackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';


type Props = StackScreenProps<RootStackParamList, 'Notification'>;
const NotificationScreen: FunctionComponent<Props> = ({navigation, route}) => {

  const modalizeRef = useRef<Modalize>(null);

  const [notificationContent, setNotificationContent] = useState<Object>({});
  const [refreshingList, setRefreshingList] = useState<boolean>(false);

  function refreshList(params:type) {
    setTimeout(() => {
      setRefreshingList(false);
    }, 2000);
    setRefreshingList(true);
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (<TouchableOpacity onPress={navigation.openDrawer}>
        <RNEIcon
          name="menu-outline"
          type='ionicon'
          size={Fonts.h(20)}
          iconStyle={{fontSize: Fonts.h(20), color: Colors.darkText, marginLeft: Fonts.w(15)}}
        />
      </TouchableOpacity>),
      title: 'Notifications',
      headerRight: () => (
        <RNEIcon name="notifications-outline" type='ionicon' iconStyle={{color: Colors.darkText, fontSize: Fonts.h(20), marginRight: Fonts.w(15)}} />
      )
    });
  }, []);

  return (
    <SafeAreaView style={[GlobalStyles.globalScreenBg, {paddingHorizontal: Fonts.w(0), paddingTop: Fonts.h(20)}]}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent={true}
      />

      <FlatList
        data={notifications}
        refreshing={refreshingList}
        onRefresh={refreshList}
        horizontal={false}
        ListHeaderComponent={({}) => (
          <View style={{}}>
          </View>
        )}
        renderItem={({ item }) => (
          <NotificationListView
            id={item.id}
            displayName={item.displayName}
            message={item.message}
            senttime={TimeAgo(item.senttime)}
            type={item.type}
            press={() => {
              setNotificationContent(item);
              modalizeRef.current?.open();
            }}
          />
        )}
        ListFooterComponent={({}) => (
          <View style={{marginVertical: Fonts.h(10)}}>
            <Text style={{fontSize: Fonts.h(13), color: Colors.darkText, fontFamily: Fonts.AVERTA_LIGHT_ITALIC, alignSelf: 'center'}}>Full down to refresh</Text>
          </View>
        )}
        ListEmptyComponent={({}) => (
          <View style={{marginVertical: Fonts.h(10)}}>
            <Text style={{fontSize: Fonts.h(13), color: Colors.darkText, fontFamily: Fonts.AVERTA_LIGHT_ITALIC, alignSelf: 'center'}}>Nothing to see here</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        onScrollBeginDrag={(e) => {
        }}
        onScrollEndDrag={(e) => {
        }}
      />
      <Modalize
        ref={modalizeRef}
        adjustToContentHeight={false}
        handlePosition="inside"
        HeaderComponent={
          <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: Fonts.w(15)}}>
              <Text style={{fontSize: Fonts.h(13), color: Colors.darkText, fontFamily: Fonts.AVERTA_BOLD}}>{notificationContent.displayName}</Text>
              <Text style={{fontSize: Fonts.h(13), color: Colors.darkText, fontFamily: Fonts.AVERTA_BOLD}}>{TimeAgo(notificationContent.senttime)}</Text>
            </View>
            <Text style={{fontSize: Fonts.h(13), color: Colors.darkText, fontFamily: Fonts.AVERTA_LIGHT_ITALIC, marginHorizontal: Fonts.w(15), paddingTop: Fonts.h(2)}}>{notificationContent.message}</Text>
            <Line containerStyle={{marginVertical: Fonts.h(10)}} />
          </View>
        }
        modalStyle={{paddingTop: Fonts.h(20),}}
        modalHeight={useWindowDimensions().height / 2}
      >
      </Modalize>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default NotificationScreen;
