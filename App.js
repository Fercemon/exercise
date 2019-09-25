import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
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

  state = { robots: []}

  componentDidMount() {
    this.setState({robots: robotsJSON})
  }

  render() { 
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Hey, here yo have some robots</Text>
        <View style={styles.cardsContainer}>
        {
          this.state.robots.map((robot, index) => 
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
          </Robot>
        
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
