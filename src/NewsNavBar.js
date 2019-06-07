import React from 'react';
import { Header, SearchBarElement } from 'react-native-elements';

const NewsNavBar = () => (
  <Header
    placement='left'
    leftComponent={{ icon: 'menu', color: '#00CCFF' }}
    centerComponent={{ text: 'FORIS', style: { color: '#00CCFF' } }}
    rightComponent={<SearchBarElement />}
    containerStyle={{ backgroundColor: '#fff' }}
  />
);

export default NewsNavBar;
