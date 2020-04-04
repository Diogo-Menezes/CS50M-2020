import { TextInput } from 'react-native';
import React from 'react';
import styles from '../screens/PomodoroScreen/styles';

const timerType = {
  minutesType: 'minutesType',
  secondsType: 'secondsType',
};

export default class Input extends React.Component {
  state = {
    value: this.props.value,
  };

  render() {
    const type = this.props.type;
    const handleInput = (value) => {
      if (type === timerType.minutesType) {
        if (value < 0) {
          value = 0;
        }
        if (value > 100) {
          value = 99;
        }
      }
      if (type === timerType.secondsType) {
        if (value < 0) {
          value = 0;
        }
        if (value > 60) {
          value = 0;
        }
      }

      if (!isNaN(value)) {
        value = value.toString();
      } else value = '';

      this.setState({ value }, this.props.onTimeSet(type, value));
    };

    return (
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        maxLength={2}
        onChangeText={(value) => handleInput(value)}
        value={this.state.value}
      />
    );
  }
}
