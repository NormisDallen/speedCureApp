import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { Badge, Paragraph } from 'react-native-paper';

import { Avatar, Card } from 'react-native-paper';
import { theme } from '../../theme/theme';
import { Evil, IonIcon, MaterialCommunityIcon } from '../Icons/Icons';
import { HomeInterface, _Number } from '../../types/types';
import { generalstyles } from '../../general/generalstyles';
import AvatarComponent from '../Avatar/Avatar';
import ButtonComponent from '../Buttons/Button';

const HomeCard = ({
  images,
  event,
  comments,
  displayPicture,
  time,
  hospitalName,
  likes,
  description,
}: HomeInterface) => {
  const onPress = () => {
    Alert.alert('pressed');
  };
  //seticon color
  const [iconHeartColor, setIconHeartColor] = useState<string>('black');
  //const [comm]
  const [comment, setComment] = useState<string>('');

  return (
    <Card>
      <View
        style={[generalstyles.flexStyles, { justifyContent: 'space-evenly' }]}>
        <View style={{ flex: 1 }}>
          <View
            style={[
              generalstyles.flexStyles,
              { marginHorizontal: 10, marginTop: 10 },
            ]}>
            <Pressable style={{ marginHorizontal: 10 }}>
              <Avatar.Image source={{ uri: displayPicture }} />
            </Pressable>

            <View>

              <Paragraph
                style={[
                  {
                    fontSize: 18,
                    color: theme.colors.onSurface,
                  },
                ]}>{`${hospitalName}`}</Paragraph>
              <View style={{ width: theme.dimensions.width / 1.3 }}>
                <Paragraph
                  style={{
                    color: theme.colors.placeholder,
                  }}>{`${time}`}</Paragraph>

                {/* <Paragraph
                  style={{
                    color: theme.colors.onSurface,
                  }}>{`${description}`}
                  </Paragraph> */}

              </View>
            </View>

          </View>
          <View></View>
        </View>
        <View style={[{ justifyContent: 'flex-end' }]}>
          <Pressable
            style={[
              { marginRight: 10, right: 10, top: 10 },
              generalstyles.absoluteStyles,
            ]}>
            <MaterialCommunityIcon
              size={21}
              name="dots-vertical"
              color={theme.colors.primary}
            />
          </Pressable>
        </View>
      </View>

      {/* <Card.Cover source={{uri:"https://picsum.photos/700"}} />*/}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginHorizontal: 0,
          marginVertical: 5,
          borderRadius: 10,
        }}>


        {
          images?.map((item, index) => {
            // console.log(`The item is ${JSON.stringify(item)}`)
            return <View key={index}>
              <Pressable style={{
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: theme.colors.text,
                // marginLeft:-20
              }}>
                {/*show badge */}
                <Badge size={17} visible={true} style={{
                  position: 'absolute',
                  top: 4, right: 5,
                  color: `${theme.colors.text}`,
                  backgroundColor: `${theme.colors.primary}`,
                  fontWeight: "700",
                  fontSize: 10,
                  zIndex: 20
                }}>
                  {`${index + 1}/${images?.length}`}
                </Badge>
                {/*show badge */}

                {/*site location only on first image */}
                {index == 0 &&
                  <Badge size={40} visible={true} style={{
                    position: 'absolute',
                    bottom: theme.dimensions.width / 6, right: 40,
                    color: `${theme.colors.primary}`,
                    backgroundColor: "#abd5ab",
                    opacity: 0.8,
                    fontWeight: "900",
                    fontSize: 17,
                    zIndex: 20,

                  }}>
                    {event}

                  </Badge>
                }


                {/*site location */}

                <Image
                  style={{
                    width: images?.length == 1 ? theme.dimensions.width : theme.dimensions.width / 1.2,
                    height: 300
                  }}
                  source={{
                    uri: item,
                  }}
                />

              </Pressable>

            </View>
          }
          )
        }
      </ScrollView>

      <Card.Content>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Card.Actions
            style={[
              { justifyContent: 'space-evenly' },
              generalstyles.flexStyles,
            ]}>
            <View style={[generalstyles.flexStyles]}>
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => setIconHeartColor('red')}>
                <Evil name="heart" size={33} color={theme.colors.primary} />
              </TouchableOpacity>
              <Badge
                size={17}
                visible={true}
                style={{
                  color: `${theme.colors.text}`,
                  backgroundColor: `${theme.colors.primary}`,
                  fontWeight: '700',
                  fontSize: 10,
                  zIndex: 20,
                  position: 'absolute',
                   bottom: 1, right: 0,
                }}>
                {`${likes}`}
              </Badge>
            </View>
            {/*commet icon */}
            <View style={[generalstyles.flexStyles]}>
              <TouchableOpacity activeOpacity={0.4} style={{ marginLeft: 10 }}>
                <MaterialCommunityIcon
                  size={26}
                  color={theme.colors.primary}
                  name="comment-outline"
                />
              </TouchableOpacity>
              {comments && comments.length > 0 ? (
                <Badge
                  size={17}
                  visible={true}
                  style={{
                    color: `${theme.colors.text}`,
                    backgroundColor: `${theme.colors.primary}`,
                    fontWeight: '700',
                    fontSize: 10,
                    zIndex: 20,
                    position: 'absolute',
                    bottom: 1, right: 0,
                  }}>
                  {comments.length == 1
                    ? `${comments.length}`
                    : `${comments.length}`}
                </Badge>
              ) : (
                <Badge
                  size={17}
                  visible={true}
                  style={{
                    color: `${theme.colors.text}`,
                    backgroundColor: `${theme.colors.primary}`,
                    fontWeight: '700',
                    fontSize: 10,
                    zIndex: 20,
                  }}>
                  {` no comments`}
                </Badge>
              )}
            </View>

            {/*comment icon */}
          </Card.Actions>
          <View style={{ justifyContent: 'flex-end' }}>
            {/*bookmark */}
            {/*bookmark */}
            <View>
              <TouchableOpacity activeOpacity={0.4} style={{ marginLeft: 10 }}>
                <IonIcon
                  name="bookmark-outline"
                  size={24}
                  color={theme.colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Card.Content>

      {/*view all comments */}
      
        <Paragraph
          style={[
            {
              color: theme.colors.placeholder,
              marginHorizontal:5,
              alignSelf: 'center',
            },
            generalstyles.flexStyles,
          ]}>
          {description?.length > 50 ? description?.slice(0, 98) + ' read more ...' : description}
        </Paragraph>
      
      {/*view all comments */}
      {/*caption */}
      <Card.Content>
        <View style={[generalstyles.flexStyles, { marginLeft: 5 }]}>
          <View>
            <AvatarComponent size={40}
             source={'https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}
              />
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[generalstyles.container, { marginHorizontal: 10 }]}>
            <TextInput
              placeholder="Add a comment..."
              placeholderTextColor={`${theme.colors.placeholder}`}
              style={[styles.inputStyles]}
              value={comment}
              onChangeText={text => setComment(text)}
            />
          </KeyboardAvoidingView>
          <View>
            {comment ? (
              <ButtonComponent
                text="post"
                color={`${theme.colors.primary}`}
                style={{
                  borderRadius: 10,
                  borderWidth: 0,
                  borderColor: theme.colors.primary,
                  height: 40,
                }}
                contentStyle={{
                  fontSize: 20,
                  height: 35,
                }}
                mode="outlined"
                onPress={onPress}
              />
            ) : null}
          </View>
        </View>
      </Card.Content>
      {/*caption */}
      <View style={[generalstyles.viewStyle, { marginVertical: 5 }]}></View>
    </Card>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  inputStyles: {
    height: 40,
    borderWidth: 0,
    borderRadius: 10,
    flex: 1,
    color: theme.colors.black,
  },
});
