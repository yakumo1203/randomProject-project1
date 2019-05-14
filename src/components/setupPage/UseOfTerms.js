import React, { Component } from 'react';
import { ScrollView, Text, View, AppRegistry, StyleSheet } from 'react-native';

const styles=StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
    alignItems: 'center',
    top: 130,
  },
  explanation: {
    fontSize: 10,
    color: 'black',
    alignItems: 'center',
    top: 160,
  },
})

export default class UseOfTerms extends Component{
  render(){
    return(
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Text style = {styles.title}> Use of Terms </Text>
            <View style={{alignItems: 'center'}}>
              <Text style = {styles.explanation}> 1. FORISをご利用頂き、誠に有難うございます。FORISでは個人情報の管理をMicrosoft社のAzureを使用しております。
              個人情報に関しまして、厳重な管理を務めております.
              </Text>
            </View>
        </View>
      </ScrollView>
    );
  }
}
