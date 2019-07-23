import React, { Component } from 'react';
import { Platform, Dimensions, StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class MenuDrawerUniversity extends Component {

  navLink(nav, text) {
    return (
      <TouchableOpacity style={{ height: 50 }} onPress={() => this.props.navigation.navigate(nav)} >
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.toplinks}>
            <View style={styles.profile}>

              <View style={styles.imgView}>
                <Image style={styles.img} source={require('../../../img/FORISロゴ.jpg')} />
              </View>

              <View style={styles.profileText}>
                <Text style={styles.name}> FORIS </Text>
              </View>

            </View>
         </View>

         <ScrollView style={styles.scroller}>
          <View style={styles.bottomlinks}>
            {this.navLink('UniversityPage', 'University')}
            {this.navLink('MyLists', 'My Lists')}
          </View>
         </ScrollView>

      </View>
    )
  }
}

export default MenuDrawerUniversity;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  scroller: {
    flex: 1,
  },

  profile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#00ccff',
  },

  profileText: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  name: {
    fontSize: 20,
    fontWeight: '500',
    paddingBottom: 5,
    color: 'black',
    textAlign: 'left',
  },

  imgView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },

  img: {
    height: 70,
    width: 70,
    borderRadius: 37.5,
  },

  toplinks: {
    height: 160,
    backgroundColor: 'white',
  },

  bottomlinks: {
    flex: 1,
    backgroundColor: 'white',
    color: 'gray',
    paddingTop: 10,
    paddingBottom: 300,
  },

  underlinks: {
    flex: 1,
    backgroundColor: 'white',
    color: 'gray',
  },

  link: {
    flex: 1,
    fontSize: 15,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left',
  },
})
