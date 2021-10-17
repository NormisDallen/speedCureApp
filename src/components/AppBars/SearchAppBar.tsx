import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Appbar, Badge} from 'react-native-paper';
import {theme} from '../../theme/theme';
import SearchComponent from '../Search/SearchCompnent';

const SearchAppBar = ({navigation, previous, placeholder}: any) => {
  //search
  const [search, setSearch] = useState('');
  const onChangeSearch = query => {
    setSearch(query);
  };
  return (
    <Appbar.Header
      style={{
        backgroundColor: `${theme.colors.text}`,
        width: '100%',
        elevation: 0,
      }}>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.goBack}
          color={`${theme.colors.primary}`}
        />
      ) : null}
      <View style={[{flex: 1}]}>
        <SearchComponent
          onChangeSearch={onChangeSearch}
          searchStyles={{
            elevation: 4,
            borderRadius: 25,
            marginTop: 5,
            marginBottom: 10,
            marginLeft: -10,
            marginRight: 20,
            backgroundColor: theme.colors.text,
            height: 42,

            color: `${theme.colors.primary}`,
            width: theme.dimensions.width - 50,
          }}
          placeholder={`${placeholder}`}
          value={search}
        />
      </View>
      <View style={{marginLeft: 20}}></View>
    </Appbar.Header>
  );
};

export default SearchAppBar;
