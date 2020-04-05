import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  actionBar: {
    marginTop: 16,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  title: { marginStart: 24, padding: 8, fontSize: 25, color: 'white' },
  timerContainer: {
    marginVertical: 24,
    marginHorizontal: 24,
    paddingTop: 16,
    backgroundColor: ' rgba(200, 200,200, 0.25)',
    alignSelf: 'stretch',
    borderRadius: 8,
    paddingBottom: 16,
    elevation: 2,
  },
  timerTitle: { color: 'white', textAlign: 'center', fontSize: 40 },
  timer: { color: 'white', fontSize: 40, textAlign: 'center' },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 22,
  },
});
