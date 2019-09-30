import React from 'react';
import { StyleSheet, Text, View, ScrollView, NativeModules, Platform, Animated, TextInput } from 'react-native';
import Svg, { Path, Rect, Circle, Line, Ellipse } from 'react-native-svg';
import Robot from './robot';


import robotsJSON from './robots.json';

const { UIManager } = NativeModules;
if (Platform.OS === 'android') {
 if (UIManager.setLayoutAnimationEnabledExperimental) {
   UIManager.setLayoutAnimationEnabledExperimental(true);
 }
}  


export default class App extends React.Component {

  text1 = new Animated.Value(1)
  text2 = new Animated.Value(0)

  state = { robots: []}

  componentDidMount() {
    this.setState({robots: robotsJSON})
    Animated.timing(this.text1, {
      toValue: 0,
      duration: 2000
    }).start()

    Animated.timing(this.text2, {
      toValue: 1,
      delay: 2000,
      duration: 2000
    }).start()
  } 

  render() { 
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Animated.Text style={{...styles.title,
          transform: [{
            translateX: this.text1.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.2]
            })
          }, {
            translateY: this.text1.interpolate({
              inputRange: [0, 1],
              outputRange: [30, 0]
            })
          }]
        }}>Here are some robots</Animated.Text>

        <View style={styles.cardsContainer}>
        {
          this.state.robots.map((robot, index) => 
          <Animated.View style={{
          transform: [{
            rotate: this.text1.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            })
          },
          {
            scale: this.text2.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.2]
            })
          }]
        }}>
          <Robot
            key={index} 
            face={robot.face}
            outEye={robot.outEye}
            insideEye={robot.insideEye}
            antenna={robot.antenna}
            ball={robot.ball}
            mouth={robot.mouth}
            mouthBorder={robot.mouthBorder}
            teeth={robot.teeth}
            name={robot.name}
            age={robot.age}>
          </Robot></Animated.View>
        
          )
        }
        </View>
      </ScrollView>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 40,
    marginTop: 40,
    textAlign: 'center',
  }
  
});
