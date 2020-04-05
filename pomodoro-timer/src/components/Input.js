import { TextInput } from 'react-native';
import React from 'react';

const timerType = {
  minutesType: 'minutesType',
  secondsType: 'secondsType',
};

export default class Input extends React.Component {
  state = {
    value: this.props.value,
    type: this.props.type,
  };

  render() {
    const type = this.state.type;
    const handleInput = (value) => {
      value = value.replace(/[^0-9]/g, '');
      if (type === timerType.minutesType) {
        if (value < 0) {
          value = 0;
        }
        if (value > 100) {
          value = 99;
        }
      }
      if (type === timerType.secondsType) {
        if (value < 0 || value >= 60) {
          value = 0;
        }
      }
      let val;
      if (!isNaN(value)) {
        val = value;
        value = value.toString();
      }
      if (value === '') {
        val = 0;
        value = '';
      }
      this.props.onTimeSet(type, val);
      this.setState({ value });
    };

    return (
      <TextInput
        keyboardType='numeric'
        style={[this.props.style]}
        maxLength={2}
        onChangeText={(value) => handleInput(value)}
        value={this.state.value}
      />
    );
  }
}
