import React, {useState} from 'react';
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
import {Badge, Paragraph} from 'react-native-paper';

import {Avatar, Button, Card} from 'react-native-paper';
import {theme} from '../../theme/theme';
import {Evil, IonIcon, MaterialCommunityIcon} from '../Icons/Icons';
import {HomeInterface, _Number} from '../../types/types';
import {generalstyles} from '../../general/generalstyles';
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
}: HomeInterface) => {
  const onPress = () => {
    Alert.alert('pressed');
  };
  //seticon color
  const [iconHeartColor, setIconHeartColor] = useState<string>('black');
  //const [comm]
  const [comment, setComment] = useState('');

  return (
    <Card>
      <Card.Title
        title={`${hospitalName}`}
        subtitle={`${time}`}
        left={props => (
          <View style={{flex: 1}}>
            <Avatar.Image {...props} source={{uri: displayPicture}} />
          </View>
        )}
        right={() => (
          <View style={{marginRight: 15}}>
            <MaterialCommunityIcon
              size={21}
              name="dots-vertical"
              color={theme.colors.primary}
            />
          </View>
        )}
      />

      {/* <Card.Cover source={{uri:"https://picsum.photos/700"}} />*/}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images?.map((item: string, index: _Number) => (
          <View key={index}>
            <Pressable
              style={{
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: theme.colors.text,
              }}>
              {/*show badge */}
              <Badge
                size={17}
                visible={true}
                style={{
                  position: 'absolute',
                  top: 4,
                  right: 5,
                  color: `${theme.colors.text}`,
                  backgroundColor: `${theme.colors.primary}`,
                  fontWeight: '700',
                  fontSize: 10,
                  zIndex: 20,
                }}>
                {`${index + 1}/${images?.length}`}
              </Badge>
              {/*show badge */}

              {/*site location only on first image */}
              {index == 0 && (
                <Badge
                  size={40}
                  visible={true}
                  style={{
                    position: 'absolute',
                    bottom: theme.dimensions.width / 6,
                    right: 40,
                    color: `${theme.colors.primary}`,
                    backgroundColor: '#F0F8FF',
                    opacity: 0.8,
                    fontWeight: '900',
                    fontSize: 17,
                    zIndex: 20,
                  }}>
                  {event}
                </Badge>
              )}

              {/*site location */}

              <Image
                style={{
                  width:
                    images?.length == 1
                      ? theme.dimensions.width
                      : theme.dimensions.width / 1.2,
                  height: 300,
                }}
                source={{
                  uri: item,
                }}
              />
            </Pressable>
          </View>
        ))}
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
              {marginVertical: 10, padding: 10, justifyContent: 'space-evenly'},
              generalstyles.flexStyles,
            ]}>
            <View style={[generalstyles.flexStyles]}>
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => setIconHeartColor('red')}>
                <Evil name="heart" size={33} color={theme.colors.placeholder} />
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
                }}>
                {`${likes} likes`}
              </Badge>
            </View>
            {/*commet icon */}
            <View style={[generalstyles.flexStyles]}>
              <TouchableOpacity activeOpacity={0.4} style={{marginLeft: 10}}>
                <MaterialCommunityIcon
                  size={26}
                  color={theme.colors.placeholder}
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
                  }}>
                  {comments.length == 1
                    ? `${comments.length} comment`
                    : `${comments.length} comments`}
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
          <View style={{justifyContent: 'flex-end'}}>
            {/*bookmark */}
            {/*bookmark */}
            <View>
              <TouchableOpacity activeOpacity={0.4} style={{marginLeft: 10}}>
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
      {comments && comments?.length > 0 ? (
        <Paragraph
          style={[
            {
              color: theme.colors.placeholder,
              padding: 3,
              alignSelf: 'center',
            },
            generalstyles.flexStyles,
          ]}>
          view all comments
        </Paragraph>
      ) : null}
      {/*view all comments */}
      {/*caption */}
      <Card.Content>
        <View style={[generalstyles.flexStyles, {marginLeft: 5}]}>
          <View>
            <AvatarComponent size={40} source={'https://picsum.photos/700'} />
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[generalstyles.container, {marginHorizontal: 10}]}>
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
      <View style={[generalstyles.viewStyle, {marginVertical: 5}]}></View>
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
