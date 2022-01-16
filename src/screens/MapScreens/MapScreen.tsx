import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import MapComponent from '../../components/Map/MapComponent';
import MapView, {Marker} from 'react-native-maps';
//sample hospitals
const markers = [
  {
    title: 'kampala',
    description: 'This is kampala hospital',
    cordinate: {
      latitude: 0.347596,
      longitude: 32.58252,
    },
    identifier: 'Origin',
  },
  {
    title: 'entebbe',
    description: 'This is entebbe hospital',
    cordinate: {
      latitude: 0.0512,
      longitude: 32.4637,
    },
    identifier: 'Origin',
  },
  {
    title: 'Masaka',
    description: 'This is Masaka Hospital',
    cordinate: {
      latitude: 0.4464,
      longitude: 31.9018,
    },
    identifier: 'Origin',
  },
  {
    title: 'Gulu',
    description: 'This is Gulu hospital',
    cordinate: {
      latitude: 2.7724,
      longitude: 32.2881,
    },
    identifier: 'Origin',
  },
  {
    title: 'Mbarara',
    description: 'This is Mbarara hospital',
    cordinate: {
      latitude: 0.6072,
      longitude: 30.6545,
    },
    identifier: 'Origin',
  },
];
//sample hospitals

const MapScreen = ({route}) => {
  console.log(
    `The parameters  in the map are ${JSON.stringify(route?.params)} `,
  );

  return (
    <MapView
      style={{flex: 1}}
      initialRegion={{
        latitude: 1.3733,
        longitude: 32.2903,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      {markers.map((mark, index) => (
        <Marker
          key={index}
          coordinate={mark.cordinate}
          title={mark.title}
          description={mark.description}
          identifier={mark.identifier}
        />
      ))}
    </MapView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
