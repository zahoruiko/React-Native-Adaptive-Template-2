import { StyleSheet } from 'react-native';

const stylesPhoneLandscape = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  userPhoto: {
    width: 250,
    height: 250,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  userPhotoWrapper: {
    width: 250,
    height: 250,
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
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  userDetailsTable: {
    marginTop: 20,
    padding: 0,
    width: '100%',
  },
  userDetailsTitle: {
    flex: 2,
    margin: 0
  },
  userDetailsTitleTextStyle: {
    fontSize: 11,
    fontFamily: 'ZenDots-Regular',
    margin: 0
  },
  userDetailsContent: {
    flex: 5,
  },
  userDetailsContentTextStyle: {
    fontSize: 11,
    fontFamily: 'ZenDots-Regular',
    color: 'black'
  },
});

export default stylesPhoneLandscape;
