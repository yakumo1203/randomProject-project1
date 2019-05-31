import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
import { getNews } from './News.js';
import Article from './Article.js';
import SearchBarElement from './SearchBarElement';

class MainInformation extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    this.fetchNews();
   }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
    },
      () => this.fetchNews()
    );
  }

  render() {
    return (
      <View>
        <Header
          placement='left'
          leftComponent={{ icon: 'menu', color: '#00CCFF' }}
          centerComponent={{ text: 'FORIS', style: { color: '#00CCFF' } }}
          rightComponent={<SearchBarElement />}
          containerStyle={{ backgroundColor: '#fff' }}
        />
        <FlatList
          data={this.state.articles}
          renderItem={({ item }) => <Article article={item} />}
          keyExtractor={item => item.url}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh.bind(this)}
        />
      </View>
    );
  }
}

export default MainInformation;
