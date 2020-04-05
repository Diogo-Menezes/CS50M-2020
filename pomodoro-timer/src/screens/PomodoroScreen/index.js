import React from 'react';
import { Button, Text, View } from 'react-native';

import vibrate from '../../utils/vibrate';
import TextTime from '../../components/TextTime';
import convertTime from '../../utils/convertTime';
import styles from './styles';
import strings from '../../config/strings';

const DEFAULT_WORK_TIME = 0;
const DEFAULT_WORK_SEC = 1;
const DEFAULT_BREAK_TIME = 0;
const DEFAULT_BREAK_SEC = 5;
const minToSec = (mins) => mins * 60;
const toMMSS = (time) => convertTime(time);

export default class PomodoroScreen extends React.Component {
  state = {
    workTime: minToSec(DEFAULT_WORK_TIME),
    breakTime: minToSec(DEFAULT_BREAK_TIME),
    isActive: false,
    title: strings.workTime,
    time: minToSec(DEFAULT_WORK_TIME),
    isRunning: false,
  };
  render() {
    const startAndPauseHandler = () => {
      console.log('startAndPauseHandler called');
      if (this.state.isActive) {
        clearTimer();
      } else {
        setTimer();
      }
      this.setState({ isActive: !this.state.isActive });
    };

    const resetTimerHandler = () => {
      console.log('reset called');
      //reset to initial state
      if (this.state.isRunning) {
        clearTimer();
      }

      this.setState({
        workTime: minToSec(DEFAULT_WORK_TIME),
        breakTime: minToSec(DEFAULT_BREAK_TIME),
        isActive: false,
        title: strings.workTime,
        time: minToSec(DEFAULT_WORK_TIME),
        isRunning: false,
      });
    };

    //Timer util
    let timer;

    //Initialize and starts the timer
    const setTimer = () => {
      console.log('Set time: ' + this.state.time + ' seconds');

      if (this.state.time > 0)
        this.timer = setInterval(
          () =>
            this.setState({
              time: this.state.time - 1,
              isRunning: true,
            }),
          1000
        );
    };

    //Clears the timer
    const clearTimer = () => {
      console.log('clear called');
      clearInterval(this.timer);
      this.timer = null;
    };

    //Starts break time
    const startBreakTimer = () => {
      if (this.state.title === strings.workTime) {
        console.log(strings.breakTime);
        this.setState({
          title: strings.breakTime,
          workTime: 0,
          time: this.state.breakTime,
        });
      } else {
        console.log(strings.breakTime + ' finished');
        resetTimerHandler();
      }
    };
    if (this.state.time === 0 && this.timer !== null) {
      clearTimer();
      vibrate();
      if (this.state.isRunning) {
        startBreakTimer();
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.actionBar}>
          <Text style={styles.title}>Pomodoro Timer</Text>
        </View>
        <View style={styles.timerContainer}>
          <Text style={styles.timerTitle}>{this.state.title}</Text>
          <Text style={styles.timer}>{toMMSS(this.state.time)}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={!this.state.isActive ? strings.start : strings.pause}
            onPress={startAndPauseHandler}
          />
          <Button title='Reset' onPress={resetTimerHandler} color='red' />
        </View>
        <View>
          {!this.state.isActive ? (
            <TextTime
              minutes={Math.floor(this.state.workTime / 60)}
              seconds={DEFAULT_WORK_SEC}
              text={strings.workTime}
              onReceiveTime={this.workTimeHandler}
            />
          ) : null}
          {!this.state.isActive ? (
            <TextTime
              minutes={Math.floor(this.state.breakTime / 60)}
              seconds={DEFAULT_BREAK_SEC}
              text={strings.breakTime}
              onReceiveTime={this.breakTimeHandler}
            />
          ) : null}
        </View>
      </View>
    );
  }

  workTimeHandler = (time) => {
    console.log('work time called ' + time);
    //Time in seconds
    this.setState({
      workTime: time,
      time,
    });
  };

  breakTimeHandler = (time) => {
    console.log('break time called ' + time);
    //Time in seconds
    this.setState({
      breakTime: time,
    });
  };
}
