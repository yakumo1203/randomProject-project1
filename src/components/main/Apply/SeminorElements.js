import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { Image, View, StyleSheet, Text, TouchableHighlight } from 'react-native';

class SeminorElement extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     seminorPage: this.props.seminorPage,
  //   };
  // }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableHighlight
          transparent
          onPress={() => this.props.navigation.navigate('BusinessManner')}
        >

          <View style={styles.divisionBetweenImageAndText}>

            <Image source={this.props.seminorImage}
                   style={styles.imageArea} />

            <View style={styles.divisionBetweenTexts}>

              <Text style={styles.title}>
                {this.props.seminorTitle}
              </Text>

              <Text style={styles.text}>
                {this.props.seminorText}
              </Text>

            </View>

          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  divisionBetweenImageAndText: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
  },

  imageArea: {
    height: 80,
    width: 80,
    marginLeft: 20,
  },

  divisionBetweenTexts: {
    flexDirection: 'column',
  },

  title: {
    paddingLeft: 40,
    marginRight: 40,
    fontWeight: '500',
    paddingTop: 10,
  },

  text: {
    paddingLeft: 40,
    paddingTop: 20,
  },

})

export default withNavigation(SeminorElement);
