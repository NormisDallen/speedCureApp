import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ChatMessage from '../../components/ChatMessage/ChatMessage';
import InputBox from '../../components/InputBox/InputBox';
import {generalstyles} from '../../general/generalstyles';
import {theme} from '../../theme/theme';

const peopleArray = [
  {
    id: 1,
    userName: 'james',
    userImg:
      'https://images.pexels.com/photos/5885979/pexels-photo-5885979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    messageTime: '4:10am',
    messageText: 'Hey we moved',
  },
  {
    id: 2,
    userName: 'Denis',
    userImg:
      'https://images.pexels.com/photos/5885979/pexels-photo-5885979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    messageTime: '2:00pm',
    messageText: 'Hey there this is chiller hw is everything',
  },
  {
    id: 3,
    userName: 'Arora',
    userImg:
      'https://images.pexels.com/photos/5885979/pexels-photo-5885979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    messageTime: '10:10pm',
    messageText:
      'Hey there this is chiller hw is everything  Hey there this is chiller hw is everything  Hey there this is chiller hw is everything ',
  },
  {
    id: 4,
    userName: 'Ken',
    userImg:
      'https://images.pexels.com/photos/5885979/pexels-photo-5885979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    messageTime: '10:12pm',
    messageText: 'nicolas',
  },
  {
    id: 5,
    userName: 'Arora',
    userImg:
      'https://images.pexels.com/photos/5885979/pexels-photo-5885979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    messageTime: '10:10pm',
    messageText:
      'Hey there this is chiller hw is everything  Hey there this is chiller hw is everything  Hey there this is chiller hw is everything ',
  },
  {
    id: 6,
    userName: 'Ken',
    userImg:
      'https://images.pexels.com/photos/5885979/pexels-photo-5885979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    messageTime: '10:12pm',
    messageText: 'nicolas',
  },
  {
    id: 7,
    userName: 'Arora',
    userImg:
      'https://images.pexels.com/photos/5885979/pexels-photo-5885979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    messageTime: '10:10pm',
    messageText:
      'Hey there this is chiller hw is everything  Hey there this is chiller hw is everything  Hey there this is chiller hw is everything ',
  },
  {
    id: 8,
    userName: 'Ken',
    userImg:
      'https://images.pexels.com/photos/5885979/pexels-photo-5885979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    messageTime: '10:12pm',
    messageText: 'nicolas',
  },
  {
    id: 9,
    userName: 'Arora',
    userImg:
      'https://images.pexels.com/photos/5885979/pexels-photo-5885979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    messageTime: '10:10pm',
    messageText:
      'Hey there this is chiller hw is everything  Hey there this is chiller hw is everything  Hey there this is chiller hw is everything ',
  },
  {
    id: 10,
    userName: 'Ken',
    userImg:
      'https://images.pexels.com/photos/5885979/pexels-photo-5885979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    messageTime: '10:12pm',
    messageText: 'nicolas',
  },
];

const ChatScreen = () => {
  //const {peopleMessage, userName, id} = params;
  //alert(JSON.stringify(peopleMessage))
  const [messages, setMessages] = useState([]);
  const [sample, setSample] = useState({
    userName: 'katende Nicholas',
    source:
      'https://images.pexels.com/photos/5885979/pexels-photo-5885979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    seen: '10:12pm',
    peopleMessage: peopleArray,
    id: 1,
  });

  return (
    <View
      style={[
        generalstyles.container,
        {backgroundColor: theme.colors.disabled},
      ]}>
      <FlatList
        data={peopleArray}
        keyExtractor={item => String(item.id)}
        inverted
        renderItem={({item, index}) => (
          <ChatMessage message={item} name={sample.userName} id={sample.id} />
        )}
      />
      <InputBox />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
