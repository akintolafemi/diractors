import React, {FunctionComponent, useState, useEffect} from 'react';
import {Image, Text, View, TouchableOpacity, ViewStyle, StyleProp, ImageStyle, useWindowDimensions, ActivityIndicator } from 'react-native';
import {Colors, Fonts} from '../common';
import {Icon as RNEIcon, Card as RNECard, Button as RNEButton, Avatar as RNEAvatar, Image as RNEImage} from 'react-native-elements';
import TimeAgo from '../functions/TimeAgo';
import { Video, AVPlaybackStatus } from 'expo-av';

export const InstaStoryView: FunctionComponent<{
  id?: string;
  imagesrc?: string;
  uri?: string;
  likes?: Number;
  type?: string;
  displayName?: string;
  fullName?: string;
  press?: Function;
  setLikes?: Function;
  uploadTime?: string;
  isVideoPlaying?: boolean;
}> = ({
  id,
  imagesrc,
  uri,
  likes = 0,
  type,
  displayName = 'Oluwafemi',
  fullName = 'Micheal Oluwafemi',
  press,
  setLikes,
  uploadTime = 'Mon Apr 19 2021 13:04:46',
  isVideoPlaying
}) => {

  const window = useWindowDimensions();

  const videoRef = React.useRef<Video>(null);

  useEffect(() => {
    if (!isVideoPlaying) {
      videoRef.current?.pauseAsync();
    }
  }, [isVideoPlaying]);


  const [isLikePost, setIsLikePost] = useState<boolean>(false);

  function renderPost(
    type: string,
    uri: string,
    likes: Number,
  ) {
    switch (type) {
      case 'image':
        return renderImage(uri, likes);
      case 'video':
        return renderVideo(uri, likes);
      default:
        return null;
    }
  }

  function handleLikePost() {
    setIsLikePost(!isLikePost);
    setLikes(id, !isLikePost);
  }

  function renderImage(uri) {
    return (
      <>
        <RNEImage
          source={{ uri: uri }}
          style={{ width: window.width, height: window.width }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </>
    );
  }

  function renderVideo(uri) {
    return (
      <>
        <Video
          ref={videoRef}
          style={{ width: window.width, height: window.width }}
          source={{
            uri: uri,
          }}
          useNativeControls
          resizeMode="cover"
          isLooping
        />
      </>
    );
  }

  return (
    <View style={{marginBottom: Fonts.h(10)}}>
      <View style={{paddingHorizontal: Fonts.w(10), paddingBottom: Fonts.h(10)}}>
        <TouchableOpacity onPress={press} style={{flexDirection: 'row', alignItems: 'center'}}>
          <RNEAvatar
            rounded
            size="medium"
            source={{
              uri: imagesrc
            }}
            containerStyle={{borderWidth: Fonts.w(1), borderColor: Colors.secondary, padding: Fonts.w(0.5)}}
          />
          <View style={{marginLeft: Fonts.w(10)}}>
            <Text style={{fontSize: Fonts.h(15), color: Colors.darkText, fontFamily: Fonts.AVERTA_BOLD}}>{displayName}</Text>
            <Text style={{fontSize: Fonts.h(13), color: Colors.darkText, fontFamily: Fonts.AVERTA_REGULAR}}>{fullName}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        {renderPost(type, uri, likes)}
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Fonts.w(10), marginVertical: Fonts.h(2)}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {likes > 0 ?
              (<Text style={{color: Colors.darkText, fontSize: Fonts.h(13), fontFamily: Fonts.AVERTA_REGULAR}}>{likes} likes</Text>) : null
            }
            <TouchableOpacity
              onPress={handleLikePost}
            >
              <RNEIcon name={isLikePost ? "heart" : "heart-outline"} type='ionicon' iconStyle={{color: isLikePost ? Colors.blood : Colors.darkText, fontSize: Fonts.h(22), marginLeft: Fonts.w(5)}} />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: Colors.darkText, fontSize: Fonts.h(13), fontFamily: Fonts.AVERTA_REGULAR}}>{TimeAgo(uploadTime)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
