import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import {Text, View} from 'react-native';
import {theme} from '../../theme/theme';

const SearchComponent = ({
  searchStyles,
  icon,
  iconPressed,
  placeholder,
  autFocus,
  onChangeSearch,
  value,
}: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  //   const onChangeSearch = query => {

  //   }

  return (
    <View>
      <Searchbar
        placeholder={placeholder}
        style={searchStyles}
        onChangeText={onChangeSearch}
        inputStyle={{color: theme.colors.primary}}
        icon={icon}
        theme={{
          colors: {text: theme.colors.black, primary: theme.colors.primary},
        }}
        onIconPress={iconPressed}
        iconColor={theme.colors.primary}
        autoCorrect={true}
        autoCapitalize="none"
        autoFocus={autFocus}
        value={value}
      />
    </View>
  );
};

export default SearchComponent;
