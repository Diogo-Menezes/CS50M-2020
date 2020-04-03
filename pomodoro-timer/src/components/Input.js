import { TextInput } from 'react-native';
import React from 'react';
import styles from '../screens/PomodoroScreen/styles'

const timerType = {
  minutesType: 'minutesType',
  secondsType: 'secondsType'
};

const Input = props => (
  <TextInput
    keyboardType='numeric'
    style={styles.input}
    maxLength={2}
    onChangeText={() => handleInput(props.type, props.value)}
  />
);
const handleInput = (type, value) => {
  if (type === timerType.minutes) {
    if (value < 0) {
      return 0;
    } else if (value > 100) {
      return 100;
    }
  }
  if (type === timerType.seconds) {
    if (value < 0) {
      return 0;
    } else if (value > 60) {
      return 60;
    }
  }
};

export default Input;
