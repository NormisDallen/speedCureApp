import React from 'react';
import {StyleSheet} from 'react-native';
import {theme} from '../theme/theme';
export const generalstyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    backgroundColor: theme.colors.text,
  },
  flexStyles: {
    display: 'flex',
    flexDirection: 'row',
  },
  absoluteStyles: {
    position: 'absolute',
    zIndex: 20,
  },
  resideViews: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    margin: 2,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  elevatedCard: {
    elevation: 4,
    backgroundColor: theme.colors.text,
    padding: 10,
    borderRadius: 20,
  },
  viewStyle: {
    borderBottomColor: `${theme.colors.ligthgray}`,
    borderBottomWidth: 5,
  },
  cardMargin: {
    marginVertical: 2,
  },
  inputStyles: {
    height: 40,
    borderWidth: 0,
    borderRadius: 10,
    flex: 1,
    color: theme.colors.black,
  },
  paragraphStyle: {
    color: theme.colors.placeholder,
    marginVertical: 2,
  }
});
