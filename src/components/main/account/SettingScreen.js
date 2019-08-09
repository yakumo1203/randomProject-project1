import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Left, Icon } from 'native-base';
import { DrawerNavigator } from 'react-navigation';

class SettingScreen extends Component {
  render() {
    return (
      <Container>

        <Header>
          <Left style={styles.header}>
            <Icon name='arrow-back' onPress={() => this.props.navigation.goBack()} />
            <Text>    設定</Text>
          </Left>
        </Header>

        <Content>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('NotificationSetting')}>
            <View style={styles.eachView}>
              <Icon name='person' style={styles.eachIcon} />
              <Text style={styles.eachText}> アカウント</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity　onPress={() => this.props.navigation.navigate('NotificationSetting')}>
            <View style={styles.eachView}>
              <Icon name='notifications-outline' style={styles.eachIcon} />
              <Text style={{ fontSize: 15, paddingLeft: 15 }}> 通知</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.eachView}>
              <Icon name='funnel' style={styles.eachIcon} />
              <Text style={styles.eachText}> プライバシー設定</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.eachView}>
              <Icon name='warning' style={styles.eachIcon} />
              <Text style={styles.eachText}> セキュリティ</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.eachView}>
              <Icon name='appstore' style={styles.eachIcon} />
              <Text style={styles.eachText}> 支払い</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.eachView}>
              <Icon name='hand' style={styles.eachIcon} />
              <Text style={styles.eachText}> ヘルプ</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.eachView}>
              <Icon name='desktop' style={styles.eachIcon} />
              <Text style={styles.eachText}> 情報</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.eachView}>
              <Icon name='apps' style={styles.eachIcon} />
              <Text style={styles.eachText}> FORISについて</Text>
            </View>
          </TouchableOpacity>

            <View style={styles.loginView}>
              <TouchableOpacity>
                <Text style={styles.loginText}>ログイン</Text>
              </TouchableOpacity>
            </View>
        </Content>
      </Container>
    )
  }
}

export default SettingScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  eachView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },

  eachIcon: {
    color: 'gray',
    paddingLeft: 20,
    fontSize: 30
  },

  eachText: {
    fontSize: 15,
    paddingLeft: 10
  },

  loginView: {
    paddingLeft: 50,
    paddingTop: 20
  },

  loginText: {
    color: '#00ccff'
  }
})
