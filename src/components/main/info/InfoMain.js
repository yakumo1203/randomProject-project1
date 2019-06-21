import React, { Component } from 'react';
import { FlatList, View, Text, Dimensions, ScrollView } from 'react-native';
import { Button } from 'native-base';
import { Header, SearchBar } from 'react-native-elements';
import { getNews } from './News.js';
import Article from './Article.js';
import SearchBarElement from './SearchBarElement';

var { width, height } = Dimensions.get('window');

class InfoMain extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true, activeIndex: 0 };
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    this.fetchNews();
   }

   segmentClicked = (index) => {
     this.setState({
       activeIndex: index,
     })
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

  renderSection = () => {
    if (this.state.activeIndex === 0) {
      return (
        <View style={{ backgroundColor: 'black' }}>
          <FlatList
            data={this.state.articles}
            renderItem={({ item }) => <Article article={item} />}
            keyExtractor={item => item.url}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh.bind(this)}
          />
        </View>
      )
    }
    else if (this.state.activeIndex === 1) {
      return (
        <View style={{ backgroundColor: 'black' }}>
          <FlatList
            data={this.state.articles}
            renderItem={({ item }) => <Article article={item} />}
            keyExtractor={item => item.url}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh.bind(this)}
          />
        </View>
      )
    }
    else if (this.state.activeIndex === 2) {
      return (
        <View style={{ backgroundColor: 'black' }}>
          <FlatList
            data={this.state.articles}
            renderItem={({ item }) => <Article article={item} />}
            keyExtractor={item => item.url}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh.bind(this)}
          />
        </View>
      )
    }
    else if (this.state.activeIndex === 3) {
      return (
        <View style={{ backgroundColor: 'black' }}>
          <FlatList
            data={this.state.articles}
            renderItem={({ item }) => <Article article={item} />}
            keyExtractor={item => item.url}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh.bind(this)}
          />
        </View>
      )
    }
  }

  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderWidth: 1, borderTopColor: 'black',
                       borderColor: 'black', borderBottomColor: 'black', backgroundColor: 'black' }}>

          <Button transparent onPress={() => this.segmentClicked(0)} active={this.state.activeIndex === 0}>
            <Text style={[this.state.activeIndex === 0 ? { color: '#00ccff' } : { color: 'white' }]}>New</Text>
          </Button>

          <Button transparent onPress={() => this.segmentClicked(1)} active={this.state.activeIndex === 1}>
            <Text style={[this.state.activeIndex === 1 ? { color: '#00ccff' } : { color: 'white' }]}>Life</Text>
          </Button>

          <Button transparent onPress={() => this.segmentClicked(2)} active={this.state.activeIndex === 2}>
            <Text style={[this.state.activeIndex === 2 ? { color: '#00ccff' } : { color: 'white' }]}>Transfer</Text>
          </Button>

          <Button transparent onPress={() => this.segmentClicked(3)} active={this.state.activeIndex === 3}>
            <Text style={[this.state.activeIndex === 3 ? { color: '#00ccff' } : { color: 'white' }]}>My Lists</Text>
          </Button>

        </View>

        {this.renderSection()}

      </View>
    );
  }
}

export default InfoMain;
