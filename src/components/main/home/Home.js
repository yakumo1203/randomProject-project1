import React, { Component } from 'react';
import { AppRegistry, Image, Text, SafeAreaView, ScrollView, View, TouchableHighlight } from 'react-native';
import TimedSlideshow from 'react-native-timed-slideshow';

class homeFront extends Component {
  render() {
		const items = [
			{
				uri: require('../../../img/FORIS_General2.jpg'),
				title: "General",
				text: "Minnesota, USA",
			},
			{
				uri: require('../../../img/FORIS_Aviation2.jpg'),
				title: "Aviation",
				text: "Val di Sole, Italy",
				duration: 5000
			},
      {
				uri: require('../../../img/FORIS_ComputerScience.jpg'),
				title: "Computer Science",
				text: "Val di Sole, Italy",
				duration: 5000
			},
      {
				uri: require('../../../img/FORIS_Aerospace.jpg'),
				title: "Aerospace Engineering",
				text: "Val di Sole, Italy",
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
