import React, { Component } from 'react';
import { TouchableOpacity, Button, Linking, Dimensions, TouchableHighlight, ScrollView, AppRegistry, View, SafeAreaView, Image, Text } from 'react-native';
import { CardItem, Card, CardComponent, Thumbnail, Left, Body, Icon } from 'native-base';
import Slideshow from 'react-native-image-slider-show';

var { width, height } = Dimensions.get('window');

class KansasStateUniversity extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      position: 0,
      interval: 5000,
      dataSource: [
        {
          title: 'KSU',
          caption: 'Front',
          url: require('../../../../img/KansasStateUniversity/KansasStateUniversity1.jpg'),
        },
        {
          title: 'KSU',
          caption: 'Science Building',
          url: require('../../../../img/KansasStateUniversity/KansasStateUniversity2.jpg'),
        },
        {
          title: 'KSU',
          caption: 'Business Building',
          url: require('../../../../img/KansasStateUniversity/KansasStateUniversity3.jpg'),
        },
        {
          title: 'KSU',
          caption: 'Engineering Building',
          url: require('../../../../img/KansasStateUniversity/KansasStateUniversity4.jpg'),
        },
        {
          title: 'KSU',
          caption: 'Gym Facility',
          url: require('../../../../img/KansasStateUniversity/KansasStateUniversity5.jpg'),
        },
      ],
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 4000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  segmentClicked = (index) => {
    this.setState({
      activeIndex: index,
    })
  }

  renderSection = () => {
    if (this.state.activeIndex === 0) {
      return (
        <View style={{ paddingLeft: 40, paddingTop: 20, paddingRight: 40 }}>
          <Text style={{ color: 'gray' }}>
            平素よりFORISをご利用頂き誠にありがとうございます。
            大学への応募はここから出来ます。本大学に応募する際、日本円で<Text style={{ color: '#00ccff'  }}> 3万円</Text>頂戴いたします。
            FORISより本大学へ応募される際、必要事項全てが記載されております。
            これからもFORISをよろしくお願い申し上げます。
          </Text>
          <TouchableOpacity style={{ borderColor: '#00ccff', marginTop: 20, alignItems: 'center', borderWidth: 1, justifyContent: 'center', height: 30 }}
                            onPress={() => Linking.openURL('https://studyabroadsguide.com/2019/02/26/kansas-state-university/')}>
            <Text style={{ fontWeight: '100', color: 'black' }}>Apply</Text>
          </TouchableOpacity>
        </View>
      )
    }
    else if (this.state.activeIndex === 1) {
      return (
        <View style={{ paddingLeft: 40, paddingTop: 20 }}>
          <Text style={{ color: 'black', fontWeight: '500' }}> 【キャンパスの特徴】</Text>
          <Text> </Text>
          <Text style={{ color: 'gray' }}>
              メインキャンパスは主にビジネス、経済、エンジニアなど一般的な専攻の約5万人の生徒たちが通っています。
              メインキャンパスの位置しているマンハッタンは、町の７０〜８０％の人がK-Stateに何かしらの形で関わっていると言われているほど学生の町です。メインキャンパスの周りには、寮やアパートメントがたくさんあります。Student Unionという建物の中には、レストラン、ファストフード、カフェ、銀行、本屋、コンビニ、勉強スペース、イベントスペースやボウリングがあり、大変充実しています。2017年にできた、ビジネス学科の建物はガラス張りでとても設備が整っています。カンザス州立大学の農学は全米のなかでも有名です。学内には牧場もあり、毎朝取られたミルクはStudent Union内のアイスクリーム屋やカフェテリアでアイスのが原料として使われています。毎日、カフェテリアに行くだけで美味しく新鮮なアイスクリームを食べれます。カフェテリアには他にも、メキシカン、中華、巻き寿司、サンドイッチ、バーガー、ピザ、サラダバーなど、バラエティー豊かな食べ物が食べ放題です。学内にはメディカルセンターもあります。
              スポーツも盛んで、秋学期にはアメリカンフットボールとバレーボール、春学期にはバスケと野球のシーズンがあり、学生達はキャンパス内にあるスタジアムに応援しに行きます。
              授業に通うために車は必要ありません。キャンパス内には学生は無料のバスも数多く走っています。しかし、敷地が大変広く、ジムやスポーツ観戦をする際は施設が少し離れているので、車は必要になってきます。
              留学生の割合も多く、留学生の為だけの語学、生活サービスの建物もあります。

              一方、Poytechnicキャンパスは主にAviatino専攻のためのキャンパスになっています。サライナはマンハッタンからハイウェイで一時間ほどのところにある小さな町です。どこに行くのにも、車が絶対に必要になります。Aviation programとしては、有名な大学の一つに入ります。大学がSalina Regional Airportと隣接していて、Professional Pilot専攻の生徒がフライト訓練をできるようになっています。大学が２０機ほどのCessna172、双発機を数機所有しています。他にもドローン、Aviation Engineerの専攻があります。</Text>
          <Text> </Text>
          </View>
      )
    }
    else if (this.state.activeIndex === 2) {
      return (
        <View style={{ paddingLeft: 40, paddingTop: 20 }}>
          <View><Text style={{ color: 'black', fontWeight: '500', paddingBottom: 10 }}>[Bachelor （学士)]</Text></View>
          <View><Text style={{ color: 'gray' }}> - Accounting(Bachelor of Science) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Accounting and Master of Accountancy(Concurrent Bachelor and Master's) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Aerospace Studies(Minor) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - African Studies(Minor, Certificate) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Agribusiness(Bachelor of Science, Minor) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Agricultural Communications and Journalism(Bachelor of Science) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Agricultural Education(Bachelor of Science) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Agricultural Technology Management(Bachelor of Science, Minor) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Agronomy(Bachelor of Science, Minor) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - American Ethnic Studies(Bachelor of Arts, Bachelor of Science, Minor) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Animal Science and Industry(Bachelor of Arts, Bachelor of Science, Minor) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Animal Sciences and Industry(Bachelor of Science, Minor) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Anthropology(Bachelor of Arts, Bachelor of Science, Minor) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Apparel and Textiles(Bacjelor of Sience) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Apparel and Textiles(Minor) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Architectural Engineering(Bachelor of Science)</Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Architectural Engineering(Concurrent Bachelor and Master's)</Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Architecture(Master of Architecture, designed for high school graduates, transfer students who already hold a degree) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Art(Bachelorof Arts, BFA) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Art(Minor) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Athletic Training(Bachelor of Science) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Bakery Science and Management(Bachelor of Science, Minor) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Beef Cattle Feedlot Management(Certificate) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Beef Cattle Range Management(Certificate) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Biochemistry(Bachelor of Arts, Bachelor of Science) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Biochemistry(Concurrent Bachelor and Master's) </Text></View>
          <View><Text> </Text></View>
          <View><Text style={{ color: 'gray' }}> - Biological Systems Engineering(Bachelor of Science) </Text></View>
          <View><Text> </Text></View>
        </View>
      )
    }
    else if (this.state.activeIndex === 3) {
      return (
        <View style={{ paddingLeft: 40, paddingTop: 20 }}>
          <Text> a </Text>
        </View>
      )
    }
    else if (this.state.activeIndex === 5) {
      return (
        <View style={{ paddingLeft: 40, paddingTop: 20 }}>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../../../img/FORIS_HomeGeneral.jpg')} />
                <Body>
                  <Text>Yakumo Asano</Text>
                  <Text note style={{ color: 'gray', fontSize: 10 }}> Seattle Central College / Computer Science </Text>
                  <Text note style={{ color: 'gray', fontSize: 10 }}>
                    <Icon name='ios-pin' style={{ fontSize: 10, color: 'gray' }} /> Seattle, WA</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../../../img/FORIS_HomeGeneral.jpg')} />
                <Body>
                  <Text>Yakumo Asano</Text>
                  <Text note style={{ color: 'gray', fontSize: 10 }}> Seattle Central College / Computer Science </Text>
                  <Text note style={{ color: 'gray', fontSize: 10 }}>
                    <Icon name='ios-pin' style={{ fontSize: 10, color: 'gray' }} /> Seattle, WA</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../../../img/FORIS_HomeGeneral.jpg')} />
                <Body>
                  <Text>Yakumo Asano</Text>
                  <Text note style={{ color: 'gray', fontSize: 10 }}> Seattle Central College / Computer Science </Text>
                  <Text note style={{ color: 'gray', fontSize: 10 }}>
                    <Icon name='ios-pin' style={{ fontSize: 10, color: 'gray' }} /> Seattle, WA</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../../../img/FORIS_HomeGeneral.jpg')} />
                <Body>
                  <Text>Yakumo Asano</Text>
                  <Text note style={{ color: 'gray', fontSize: 10 }}> Seattle Central College / Computer Science </Text>
                  <Text note style={{ color: 'gray', fontSize: 10 }}>
                    <Icon name='ios-pin' style={{ fontSize: 10, color: 'gray' }} /> Seattle, WA</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </View>
      )
    }
  }

  render() {

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView>
          <View style={{ backgroundColor: 'white' }}>
            <View style={{ height: 200, width: '100%'}}>
              <Slideshow dataSource={this.state.dataSource}
                         position={this.state.position}
                         onPositionChanged={position => this.setState({ position })}
                         indicatorSelectedColor='#00ccff'
                         titleStyle={{ color: 'white', fontWeight: '700', textShadowColor: 'black', textShadowOffset: { width: 3, height: 3 }, textShadowRadius: 3}}
                         captionStyle={{ color: 'white', textShadowColor: 'black', textShadowOffset: { width: 3, height: 3 }, textShadowRadius: 3}}
                         />
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#dddddd'}}>
              <Text style={{ marginLeft: 20, fontSize: 30, fontWeight: '100' }}>
                  Kansas State University
              </Text>
            </View>

            <View style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
              <Text>
                1998年に設立されたUniversity of California, Berkeleyは世界No.１のPublic Universityです。
                35，000人以上の学生が３５０種類のプログラムの中から、それぞれが自分に合った専攻を受講しています。
              </Text>
            </View>

            <View style={{ marginLeft: 20, marginRight: 40 }}>
              <View style={{ flexDirection: 'column' }}>

                <Text style={{ paddingBottom: 5, marginTop: 20, color: 'gray' }}>
                  世界ランキング：＃２２
                </Text>

                <Text style={{ paddingBottom: 5, color: 'gray' }}>
                  生徒数：41,519人（2018年）
                </Text>

                <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
                  <Text style={{ color: 'gray' }}>

                  Website: </Text>
                  <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => Linking.openURL('https://www.k-state.edu/')}>
                    <Text style={{ color: '#00ccff'　}}>https://www.k-state.edu </Text>
                  </TouchableOpacity>
                </View>

                  <Text style={{ color: 'gray', paddingBottom: 5 }}>
                    在学生による評価：N/A
                  </Text>

                  <View style={{ flexDirection: 'row', marginTop: 10, marginRight: 20, marginLeft: 20 }}>
                    <Text>     </Text>
                    <TouchableHighlight style={{ borderRadius: 20, backgroundColor: '#00ccff', height: 30, width: '30%', alignItems: 'center', justifyContent: 'center' }}
                                        onPress={() => Linking.openURL('https://studyabroadsguide.com/2019/02/26/kansas-state-university/')}>
                      <Text style={{ color: 'white' }}>応募</Text>
                    </TouchableHighlight>

                    <Text>           </Text>

                    <TouchableHighlight style={{ borderRadius: 20, backgroundColor: '#00ccff', height: 30, width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ color: 'white' }}>大学に問い合わせ</Text>
                    </TouchableHighlight>
                  </View>
              </View>
            </View>

            <View style={{ width: '100%', marginLeft: 0, marginRight: 'auto' }}>
              <View style={{ flexDirection: 'row', marginTop: 20, marginButtom: 20,
                            height: 36, position: 'relative' }}>
                <View style={{ position: 'absolute', width: '15%', height: '100%', top: 0, left: 0, justifyContent: 'space-around' }}/>
                  <TouchableHighlight transparent
                                      underlayColor='white'
                                      style={[this.state.activeIndex === 0 ? {
                                             borderBottomColor: '#00ccff',
                                             borderBottomWidth: 1,
                                             paddingLeft: 5,
                                             justifyContent: 'center',
                                             alignItems: 'center' } : {
                                             borderBottomColor: 'white',
                                             borderBottomWidth: 1,
                                             paddingLeft: 5,
                                             justifyContent: 'center',
                                             alignItems: 'center' }]}
                                      onPress={() => this.segmentClicked(0)} active={this.state.activeIndex === 0}>
                    <Text style={[this.state.activeIndex === 0 ? { color: '#00ccff', borderBottomColor: '#00ccff', borderBottomWidth: 1, fontWeight: '700' } : { color: 'gray', fontWeight: '700' }]}>  募集要項　</Text>
                  </TouchableHighlight>

                  <TouchableHighlight  transparent
                                       underlayColor='white'
                                       style={[this.state.activeIndex === 1 ? {
                                               borderBottomColor: '#00ccff',
                                               borderBottomWidth: 1,
                                               paddingLeft: 10,
                                               justifyContent: 'center',
                                               alignItems: 'center' } : {
                                               borderBottomColor: 'white',
                                               borderBottomWidth: 1,
                                               paddingLeft: 10,
                                               justifyContent: 'center',
                                               alignItems: 'center' }]}
                                       onPress={() => this.segmentClicked(1)} active={this.state.activeIndex === 1}>
                    <Text style={[this.state.activeIndex === 1 ? { color: '#00ccff', borderBottomColor: '#00ccff', borderBottomWidth: 1, fontWeight: '700' } : { color: 'gray', fontWeight: '700' }]}> 施設　</Text>
                  </TouchableHighlight>

                  <TouchableHighlight transparent
                                      underlayColor='white'
                                      style={[this.state.activeIndex === 2 ? {
                                             borderBottomColor: '#00ccff',
                                             borderBottomWidth: 1,
                                             paddingLeft: 10,
                                             justifyContent: 'center',
                                             alignItems: 'center' } : {
                                             borderBottomColor: 'white',
                                             borderBottomWidth: 1,
                                             paddingLeft: 10,
                                             justifyContent: 'center',
                                             alignItems: 'center' }]}
                                      onPress={() => this.segmentClicked(2)} active={this.state.activeIndex === 2}>
                    <Text style={[this.state.activeIndex === 2 ? { color: '#00ccff', borderBottomColor: '#00ccff', borderBottomWidth: 1, fontWeight: '700' } : { color: 'gray', fontWeight: '700' }]}> 専攻　</Text>
                  </TouchableHighlight>

                  <TouchableHighlight transparent
                                      underlayColor='white'
                                      style={[this.state.activeIndex === 3 ? {
                                             borderBottomColor: '#00ccff',
                                             borderBottomWidth: 1,
                                             paddingLeft: 10,
                                             justifyContent: 'center',
                                             alignItems: 'center' } : {
                                             borderBottomColor: 'white',
                                             borderBottomWidth: 1,
                                             paddingLeft: 10,
                                             justifyContent: 'center',
                                             alignItems: 'center' }]}
                                      onPress={() => this.segmentClicked(3)} active={this.state.activeIndex === 3}>
                    <Text style={[this.state.activeIndex === 3 ? { color: '#00ccff', borderBottomColor: '#00ccff', borderBottomWidth: 1, fontWeight: '700' } : { color: 'gray', fontWeight: '700' }]}> 費用　</Text>
                  </TouchableHighlight>

                  <TouchableHighlight transparent
                                      underlayColor='white'
                                      style={[this.state.activeIndex === 4 ? {
                                             borderBottomColor: '#00ccff',
                                             borderBottomWidth: 1,
                                             paddingLeft: 10,
                                             justifyContent: 'center',
                                             alignItems: 'center' } : {
                                             borderBottomColor: 'white',
                                             borderBottomWidth: 1,
                                             paddingLeft: 10,
                                             justifyContent: 'center',
                                             alignItems: 'center' }]}
                                      onPress={() => this.segmentClicked(4)} active={this.state.activeIndex === 4}>
                    <Text style={[this.state.activeIndex === 4 ? { color: '#00ccff', borderBottomColor: '#00ccff', borderBottomWidth: 1, fontWeight: '700' } : { color: 'gray', fontWeight: '700' }]}> その他　</Text>
                  </TouchableHighlight>

                  <TouchableHighlight transparent
                                      underlayColor='white'
                                      style={[this.state.activeIndex === 5 ? {
                                             borderBottomColor: '#00ccff',
                                             borderBottomWidth: 1,
                                             paddingLeft: 10,
                                             justifyContent: 'center',
                                             alignItems: 'center' } : {
                                             borderBottomColor: 'white',
                                             borderBottomWidth: 1,
                                             paddingLeft: 10,
                                             justifyContent: 'center',
                                             alignItems: 'center' }]}
                                      onPress={() => this.segmentClicked(5)} active={this.state.activeIndex === 5}>
                    <Text style={[this.state.activeIndex === 5 ? { color: '#00ccff', borderBottomColor: '#00ccff', borderBottomWidth: 1, fontWeight: '700' } : { color: 'gray', fontWeight: '700' }]}>  在学生　</Text>
                  </TouchableHighlight>

            </View>

            {this.renderSection()}

           </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default KansasStateUniversity;
