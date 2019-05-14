import React, { Component } from 'react';
import { ScrollView, Text, View, AppRegistry, StyleSheet } from 'react-native';

const styles=StyleSheet.create({
  title: {
    flex: 1,
    fontSize: 20,
    color: 'black',
    alignItems: 'center',
    paddingTop: 100,
  },
  explanation: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 10,
    color: 'black',
    margin: 20,
  },
})

export default class UseOfTerms extends Component{
  render(){
    return(
        <ScrollView style={{flex: 1, padding: 10}}>
          <View style={{alignItems: 'center'}}>
            <Text style = {styles.title}> Use of Terms </Text>
              <View>
                <Text style = {styles.explanation}> 1. FORISをご利用頂き、誠に有難うございます。FORISでは個人情報の管理をMicrosoft社のAzureを使用しております。
                個人情報に関しまして、厳重な管理を務めております.
                </Text>
              </View>
          </View>
        </ScrollView>
    );
  }
}


AppRegistry.registerComponent('project1', () => UseOfTerms);
