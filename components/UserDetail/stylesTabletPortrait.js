import { StyleSheet } from 'react-native';

const stylesTabletPortrait = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  userPhoto: {
    width: 300,
    height: 300,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  userPhotoWrapper: {
    width: 300,
    height: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 40,
  },
  userDetailsTable: {
    margin: 10,
    padding: 0,
  },
  userDetailsTitle: {
    flex: 2,
    fontSize: 100,
  },
  userDetailsTitleTextStyle: {
    fontSize: 13,
    fontFamily: 'ZenDots-Regular',
  },
  userDetailsContent: {
    flex: 5,
  },
  userDetailsContentTextStyle: {
    fontSize: 13,
    fontFamily: 'ZenDots-Regular',
    color: 'black'
  },
});

export default stylesTabletPortrait;
