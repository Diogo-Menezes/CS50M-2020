import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  timerContainer: {
    width: '80%',
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeTitle: {
    fontSize: 22,
    color: 'white',
  },
  flexRow: {
    flexDirection: 'row',
    padding: 8,
  },
  inputLabel: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
    marginLeft: 10,
    alignSelf: 'center',
  },
  input: {
    margin: 10,
    width: 40,
    height: 25,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
