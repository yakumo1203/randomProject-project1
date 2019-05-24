import React from 'react';
import { SearchBar } from 'react-native-elements';

const SearchBarElement = () => {
  return (
    <SearchBar
      placeholder='Search Here...'
      platform='ios'
      containerStyle={styles.searchBarStyle}
    />
  );
};

const styles = {
  searchBarStyle: {
    height: '60%',
    width: '72%',
  }
};

export default SearchBarElement;
