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
          url: require('../../../img/KansasStateUniversity/KansasStateUniversity1.jpg'),
        },
        {
          title: 'KSU',
          caption: 'Science Building',
          url: require('../../../img/KansasStateUniversity/KansasStateUniversity2.jpg'),
        },
        {
          title: 'KSU',
          caption: 'Business Building',
          url: require('../../../img/KansasStateUniversity/KansasStateUniversity3.jpg'),
        },
        {
          title: 'KSU',
          caption: 'Engineering Building',
          url: require('../../../img/KansasStateUniversity/KansasStateUniversity4.jpg'),
        },
        {
          title: 'KSU',
          caption: 'Gym Facility',
          url: require('../../../img/KansasStateUniversity/KansasStateUniversity5.jpg'),
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
        <View style={{ paddingLeft: 40, paddingTop: 20 }}>
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
    else if (this.state.activeIndex === 4) {
      return (
        <View style={{ paddingLeft: 40, paddingTop: 20 }}>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../../img/FORIS_HomeGeneral.jpg')} />
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
                <Thumbnail source={require('../../../img/FORIS_HomeGeneral.jpg')} />
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
                <Thumbnail source={require('../../../img/FORIS_HomeGeneral.jpg')} />
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
                <Thumbnail source={require('../../../img/FORIS_HomeGeneral.jpg')} />
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

            <View style={{ marginLeft: 40, marginRight: 40 }}>
              <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
                  <Text style={{ marginTop: 20, color: 'gray' }}>

                  Website: </Text>
                  <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => Linking.openURL('https://www.k-state.edu/')}>
                    <Text style={{ color: '#00ccff', paddingTop: 20 }}>https://www.k-state.edu </Text>
                  </TouchableOpacity>
                </View>

                  <Text style={{ color: 'gray', paddingBottom: 5 }}>
                    Ranking: #111(National Ranking from ...)
                  </Text>

                  <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
                    <Text style={{ color: 'gray' }}>
                    Email:
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('mailto:global@k-state.edu')} >
                      <Text style={{ color: '#00ccff' }}> global@k-state.edu
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={{ color: 'gray' }}>Address: 748 Harvard Ave, Kansas 78361
                </Text>
              </View>
            </View>

            <View style={{ width: '90%', marginLeft: 0, marginRight: 'auto' }}>
              <View style={{ flexDirection: 'row', marginTop: 40, marginButtom: 20,
                            height: 36, position: 'relative' }}>
                <View style={{ position: 'absolute', width: '20%', height: '100%', top: 0, left: 0 }}/>
                  <TouchableHighlight transparent
                                      style={[this.state.activeIndex === 0 ? { backgroundColor: '#00ccff', flex: 1, justifyContent: 'center',
                                             alignItems: 'center', borderWidth: 1,
                                             borderColor: '#dddddd', borderRightWidth: 0,
                                             borderTopRightWidth: 0, borderBottomRightRadius: 0  } : { backgroundColor: 'white', flex: 1, justifyContent: 'center',
                                                    alignItems: 'center', borderWidth: 1,
                                                    borderColor: '#dddddd', borderRightWidth: 0,
                                                    borderTopRightWidth: 0, borderBottomRightRadius: 0  }]}
                                      onPress={() => this.segmentClicked(0)} active={this.state.activeIndex === 0}>
                    <Text> 応募　</Text>
                  </TouchableHighlight>

                  <TouchableHighlight  transparent
                                       style={[this.state.activeIndex === 1 ? { backgroundColor: '#00ccff', flex: 1, justifyContent: 'center',
                                              alignItems: 'center', borderWidth: 1,
                                              borderColor: '#dddddd', borderRightWidth: 0,
                                              borderTopRightWidth: 0, borderBottomRightRadius: 0  } : { backgroundColor: 'white', flex: 1, justifyContent: 'center',
                                                     alignItems: 'center', borderWidth: 1,
                                                     borderColor: '#dddddd', borderRightWidth: 0,
                                                     borderTopRightWidth: 0, borderBottomRightRadius: 0  }]}
                                       onPress={() => this.segmentClicked(1)} active={this.state.activeIndex === 1}>
                    <Text> 施設　</Text>
                  </TouchableHighlight>

                  <TouchableHighlight transparent
                                      style={[this.state.activeIndex === 2 ? { backgroundColor: '#00ccff', flex: 1, justifyContent: 'center',
                                             alignItems: 'center', borderWidth: 1,
                                             borderColor: '#dddddd', borderRightWidth: 0,
                                             borderTopRightWidth: 0, borderBottomRightRadius: 0  } : { backgroundColor: 'white', flex: 1, justifyContent: 'center',
                                                    alignItems: 'center', borderWidth: 1,
                                                    borderColor: '#dddddd', borderRightWidth: 0,
                                                    borderTopRightWidth: 0, borderBottomRightRadius: 0  }]}
                                      onPress={() => this.segmentClicked(2)} active={this.state.activeIndex === 2}>
                    <Text> 専攻　</Text>
                  </TouchableHighlight>

                  <TouchableHighlight transparent
                                      style={[this.state.activeIndex === 3 ? { backgroundColor: '#00ccff', flex: 1, justifyContent: 'center',
                                             alignItems: 'center', borderWidth: 1,
                                             borderColor: '#dddddd', borderRightWidth: 0,
                                             borderTopRightWidth: 0, borderBottomRightRadius: 0  } : { backgroundColor: 'white', flex: 1, justifyContent: 'center',
                                                    alignItems: 'center', borderWidth: 1,
                                                    borderColor: '#dddddd', borderRightWidth: 0,
                                                    borderTopRightWidth: 0, borderBottomRightRadius: 0  }]}
                                      onPress={() => this.segmentClicked(3)} active={this.state.activeIndex === 3}>
                    <Text> 準備　</Text>
                  </TouchableHighlight>

                  <TouchableHighlight transparent
                                      style={[this.state.activeIndex === 4 ? { backgroundColor: '#00ccff', flex: 1, justifyContent: 'center',
                                             alignItems: 'center', borderWidth: 1,
                                             borderColor: '#dddddd', borderLeftWidth: 1,
                                             borderTopLeftWidth: 0, borderBottomLeftRadius: 0 } : { backgroundColor: 'white', flex: 1, justifyContent: 'center',
                                                    alignItems: 'center', borderWidth: 1,
                                                    borderColor: '#dddddd', borderLeftWidth: 1,
                                                    borderTopLeftWidth: 0, borderBottomLeftRadius: 0  }]}
                                      onPress={() => this.segmentClicked(4)} active={this.state.activeIndex === 4}>
                    <Text> ユーザー　</Text>
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
