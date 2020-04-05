import React from 'react';
import { Text, View } from 'react-native';
import Input from '../Input';
import styles from './styles';

const timerType = {
  minutesType: 'minutesType',
  secondsType: 'secondsType',
};

const minToSec = (mins) => mins * 60;

export default class TextTime extends React.Component {
  state = {
    minutes: this.props.minutes,
    seconds: this.props.seconds,
    time: minToSec(this.props.minutes) + this.props.seconds,
    field: this.props.text,
  };

  handleMinChange = (minString) => {
    const minutes = minToSec(minString);
    const time = this.state.time + minutes;
    this.setState({ time, minutes });
  };

  handleSecChange = (secString) => {
    const seconds = +secString;
    const time = this.state.minutes + seconds;
    this.setState({ time, seconds });
  };

  onTimeSetHandler(type, val) {
    console.log(`time set handler called,
    value: ${val}, type: ${type}`);
    if (type === timerType.minutesType) {
      this.handleMinChange(val);
    } else {
      this.handleSecChange(val);
    }
  }

  render() {
    return (
      <View style={styles.timerContainer}>
        <Text style={styles.timeTitle}>{this.props.text}</Text>
        <View style={styles.flexRow}>
          <Text style={styles.inputLabel}>Mins: </Text>
          <Input
            value={this.props.minutes.toString()}
            keyboardType='numeric'
            style={styles.input}
            type={timerType.minutesType}
            onTimeSet={(type, value) => {
              this.onTimeSetHandler(type, value);
            }}
          />

          <Text style={styles.inputLabel}>Secs: </Text>
          <Input
            value={this.props.seconds.toString()}
            keyboardType='numeric'
            style={styles.input}
            type={timerType.secondsType}
            onTimeSet={(type, value) => {
              this.onTimeSetHandler(type, value);
            }}
          />
        </View>
      </View>
    );
  }
}
