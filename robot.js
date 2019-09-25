import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path, Rect, Circle, Line, Ellipse } from 'react-native-svg';

export default class Robot extends React.Component {
  render() {
    return (
      <View style={styles.robot}>
        <Svg style= { { width: '100%', height: '100%' } }  viewBox="0 0 164 177.2">
            <Rect fill={this.props.face || '#b2b2b2'} y="62.2" width="164" height="115" rx="16.73"/>
            <Circle fill= {this.props.outEye || '#1d1d1b'} cx="35.5" cy="102.2" r="16.5"/>
            <Circle fill= {this.props.outEye || '#1d1d1b'} cx="128.5" cy="102.2" r="16.5"/>
            <Rect fill= {this.props.antenna || '#b2b2b2'}  x="203.31" y="111.84" width="4" height="62.52" transform="translate(-214.32 0.13) rotate(-26.57)"/>
            <Rect fill= {this.props.antenna || '#b2b2b2'} x="297.27" y="111.84" width="4" height="62.52" transform="translate(-92.06 -212.56) rotate(23.05)"/>
            <Circle fill= {this.props.ball || '#e30613'} cx="19" cy="8" r="8"/>
            <Circle fill= {this.props.insideEye || '#e30613'} cx="35.5" cy="102.2" r="5.53"/>
            <Circle fill= {this.props.insideEye || '#e30613'} cx="128.5" cy="102.2" r="5.53"/>
            <Circle fill= {this.props.ball || '#e30613'} cx="139.12" cy="8" r="8"/>
            <Ellipse fill= {this.props.mouth || '#878787'} stroke= {this.props.mouthBorder || '#dadada'} strokeWidth= {'4px'}  strokeMiterlimit= {10} cx="82" cy="151.2" rx="50.01" ry="14.55"/>
            <Rect fill= {this.props.teeth || '#3c3c3b'} x="50.98" y="143.8" width="2.04" height="14.81" rx="0.96"/>
            <Rect fill= {this.props.teeth || '#3c3c3b'} x="80.98" y="143.8" width="2.04" height="14.81" rx="0.96"/>
            <Rect fill= {this.props.teeth || '#3c3c3b'} x="110.98" y="143.8" width="2.04" height="14.81" rx="0.96"/>
            <Rect fill= {this.props.teeth || '#3c3c3b'} x="95.98" y="143.8" width="2.04" height="14.81" rx="0.96"/>
            <Rect fill= {this.props.teeth || '#3c3c3b'} x="65.98" y="143.8" width="2.04" height="14.81" rx="0.96"/>
        </Svg>
        <View style={styles.infoWrap}>
        <Text style={styles.info}>Name: {this.props.name}</Text>
        <Text style={styles.info}>Age: {this.props.age}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    robot: {
        borderRadius: 20,
        borderColor: '#000',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        paddingTop: 5,
        paddingBottom: 50,
        paddingLeft: 20,
        paddingRight: 20,
        width: 300,
        height: 500,
        marginBottom: 20,
    },
    infoWrap: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    info: {
        fontSize: 17,
        fontWeight: '700',
    },
});