import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Container, Header, Content, Left, Icon } from 'native-base';
import { DrawerNavigator } from 'react-navigation';

class NotificationSetting extends Component {
  render() {
    return (
      <Container>

        <Header>
          <Left style={styles.header}>
            <Icon name='arrow-back' onPress={() => this.props.navigation.goBack()} />
            <Text>    通知</Text>
          </Left>
        </Header>

        <Content>
            <View style={{ paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}>
              <Text style={{ fontSize: 15 }}>プッシュ通知</Text>
            </View>

            <View style={{ paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}>
              <Text style={{ fontSize: 15 }}>全て停止</Text>
            </View>

            <View style={{ paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}>
              <Text style={{ fontSize: 15 }}>投稿、質問、回答</Text>
            </View>

            <View style={{ paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}>
              <Text style={{ fontSize: 15 }}>フォローとフォロワー</Text>
            </View>

            <View style={{ paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}>
              <Text style={{ fontSize: 15 }}>Directメッセージ</Text>
            </View>
        </Content>
      </Container>
    )
  }
}

export default NotificationSetting;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
})
