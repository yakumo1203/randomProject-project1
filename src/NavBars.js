import React from 'react';
// import { View, Text } from 'react-native';
import { Header, SearchBarElement } from 'react-native-elements';

export const NewsNavBar = () => {
  return (
    <Header
      placement='left'
      leftComponent={{ icon: 'menu', color: '#00CCFF' }}
      centerComponent={{ text: 'FORIS', style: { color: '#00CCFF' } }}
      rightComponent={<SearchBarElement />}
      containerStyle={{ backgroundColor: '#fff' }}
    />
  );
};
