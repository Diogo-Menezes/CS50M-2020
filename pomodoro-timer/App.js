import React from 'react';
import { ScrollView } from 'react-native';
import PomodoroScreen from './src/screens/PomodoroScreen';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'black' }}>
        <PomodoroScreen />
      </ScrollView>
    );
  }
}
