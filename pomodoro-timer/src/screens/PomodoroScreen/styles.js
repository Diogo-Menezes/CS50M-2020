import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  flexRow: { flexDirection: 'row' },
  container: {
    flex: 1,
    backgroundColor: '#6a6a6a',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight
  },
  actionBar: {
    height: 55,
    backgroundColor: 'black',
    alignSelf: 'stretch',
    elevation: 2
  },
  title: { marginStart: 24, padding: 8, fontSize: 25, color: 'white' },
  timerContainer: {
    marginVertical: 24,
    marginHorizontal: 24,
    paddingTop: 16,
    backgroundColor: 'gray',
    alignSelf: 'stretch',
    borderRadius: 8,
    paddingBottom: 16,
    elevation: 2
  },
  timerTitle: { color: 'white', textAlign: 'center', fontSize: 40 },
  timer: { color: 'white', fontSize: 40, textAlign: 'center' },
  input: {
    margin: 4,
    padding: 4,
    width: 40,
    height: 25,
    borderColor: 'grey',
    borderWidth: 1
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 22
  },
  inputLabel: {
    alignSelf: 'center'
  },
  timerDetails: {
    width: '80%',
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
