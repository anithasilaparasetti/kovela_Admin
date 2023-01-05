import {StyleSheet, Dimensions} from 'react-native';
import {colors, fontFamily} from '../../common';
import {fontSize} from '../../common';
let {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 5,
    height: '100%',
  },
  loaderContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},

  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    margin: 15,
  },
  btnLeft: {
    marginRight: 5,
  },
  btnRight: {
    marginLeft: 5,
  },
  bellContainer: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  icon: {
    height: 20,
    width: 20,
    marginLeft: 3,
  },
  bell: {marginTop: 10},
  svgsOrientation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'flex-start',
  },
  imgTableContainer: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    paddingBottom: 10,
  },
  flatListStyle: {
    paddingBottom: 750,
  },

  iconTextContainer: {
    borderWidth: 1,
  },
  iconText: {
    textAlign: 'center',
    fontSize: fontSize.tiny,
    color: colors.black,
  },
  listItemContainer: {
    height: screenWidth / 3,
    width: screenWidth / 3 - 4,
    padding: 1,
    borderWidth: 0.5,
    borderColor: colors.gray2,
  },
  listItem: {
    width: undefined,
    height: undefined,
    flex: 1,
  },
  popupItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  popitemContainer: {
    padding: 5,
    backgroundColor: colors.green5,
    position: 'absolute',
    top: -10,
    right: 0,
    borderRadius: 5,
    width: 130,
  },
  popItemTxt: {
    color: colors.green2,
    fontFamily: fontFamily.popinRegular,
    fontSize: 16,
    marginLeft: 10,
  },
  continer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  icon1: {
    height: 20,
    width: 20,
    marginRight: 2,
  },
  title: {
    fontSize: fontSize.normal,
    fontFamily: fontFamily.popinMedium,
    color: colors.black,
    marginLeft: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusContainer: {
    backgroundColor: colors.blue3,
    padding: 10,
    borderRadius: 10,
  },
  todoView: {
    padding: 10,
    top: 2,
    left: '55%',
    width: 150,
    borderRadius: 10,
    backgroundColor: colors.green4,
    overflow: 'visible',
  },
  postView: {
    flexDirection: 'row',
    margin: 2,
  },
  todoText: {
    marginLeft: '10%',
    fontSize: fontSize.medium,
    color: colors.green,
  }
});
