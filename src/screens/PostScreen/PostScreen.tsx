import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import AvatarComponent from '../../components/Avatar/Avatar';
import {generalstyles} from '../../general/generalstyles';
import {theme} from '../../theme/theme';
import ImagePicker from 'react-native-image-crop-picker';
import {EntypoIcons} from '../../components/Icons/Icons';

const PostScreen = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);

  // useEffect(() => {
  //   const requestCameraPermission = async () => {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.CAMERA,
  //         {
  //           title: 'Cool Photo App Camera Permission',
  //           message:
  //             'Cool Photo App needs access to your camera ' +
  //             'so you can take awesome pictures.',
  //           buttonNeutral: 'Ask Me Later',
  //           buttonNegative: 'Cancel',
  //           buttonPositive: 'OK',
  //         },
  //       );
  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         //console.log("You can use the camera");
  //         //showcamera();
  //         Alert.alert('allowed');
  //       } else {
  //         Alert.alert('Camera permission denied');
  //       }
  //     } catch (err) {
  //       Alert.alert('error');
  //     }
  //   };
  //   requestCameraPermission();
  // }, []);

  const picker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const showcamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  return (
    <ScrollView style={[generalstyles.container, generalstyles.background]}>
      {/*modal arae */}
      {modalVisible && (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            presentationStyle="overFullScreen"
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.centeredView}>
              <Text
                style={{
                  color: theme.colors.text,
                  marginTop: 10,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Add Images
              </Text>
              <View style={styles.modalView}>
                <View style={styles.modalContent}>
                  <TouchableOpacity activeOpacity={0.2} onPress={picker}>
                    <View style={{marginRight: 20}}>
                      <AvatarComponent
                        size={40}
                        source={'https://picsum.photos/700'}
                      />
                      <Text style={{color: theme.colors.text}}>Gallery</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.2} onPress={showcamera}>
                    <View style={{marginLeft: 20}}>
                      <EntypoIcons size={30} name="camera" color="#FFF" />
                      <Text style={{color: theme.colors.text}}>Camera</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <TouchableHighlight
                  underlayColor="#fff"
                  style={{
                    ...styles.openButton,
                    backgroundColor: 'white',
                    width: '100%',
                    marginTop: 10,
                  }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
      )}
      <View style={[generalstyles.flexStyles, {marginLeft: 15}]}>
        <View>
          <AvatarComponent size={40} source={'https://picsum.photos/700'} />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={[generalstyles.container, {marginHorizontal: 10}]}>
          <TextInput
            placeholder="whats on your main?"
            placeholderTextColor={`${theme.colors.placeholder}`}
            style={[generalstyles.inputStyles]}
            value={''}
          />
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 80,
  },
  profileCamera: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    color: theme.colors.text,
    width: 50,
    height: 50,
    borderRadius: 27,
    position: 'absolute',
    top: 100,
    right: 100,
    zIndex: 20,
  },
  profileCameraIcon: {
    alignSelf: 'center',
  },
  locationDetails: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 10,
    backgroundColor: 'grey',
  },
  centeredView: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: theme.colors.primary,
    borderTopLeftRadius: theme.roundness,
    borderTopRightRadius: theme.roundness,
  },
  modalView: {
    margin: 15,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContent: {
    flex: 1,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    color: theme.colors.text,
  },
});
