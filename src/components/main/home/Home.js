import React, { Component } from 'react';
import { AppRegistry, Image, Text, SafeAreaView, ScrollView, View, TouchableHighlight } from 'react-native';
import TimedSlideshow from 'react-native-timed-slideshow';

class homeFront extends Component {
  render() {
		const items = [
			{
				uri: require('../../../img/FORIS_General2.jpg'),
				title: "General",
				text: "一般用SNS",
			},
			{
				uri: require('../../../img/FORIS_Aviation2.jpg'),
				title: "Aviation",
				text: "航空学専用SNS",
				duration: 5000
			},
      {
				uri: require('../../../img/FORIS_ComputerScience.jpg'),
				title: "Computer Science",
				text: "情報など主にプログラミング関係のSNS",
				duration: 5000
			},
      {
				uri: require('../../../img/FORIS_Aerospace.jpg'),
				title: "Aerospace Engineering",
				text: "宇宙工学専用SNS",
				duration: 5000
			},
			{
				uri: require('../../../img/FORIS_Aviation.jpg'),
				title: "Aviation",
				text: "Alps",
				fullWidth: true
			}
		]

		return (
			<TimedSlideshow
				items={items}
        showProgressBar={false}
			/>
		);
	}
}

export default homeFront;
