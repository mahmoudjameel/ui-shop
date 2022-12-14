import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
  },
  imageContainer: {
    height: hp(43),
    alignItems: 'center',
  },
  image: {
    width: wp(90),
    height: wp(90),
  },
  textContainer: {
    height: hp(57),
  },
  emailBox: {
    marginTop: hp(1.5),
    width: wp(85),
    alignSelf: 'center',
    // backgroundColor: 'red',
  },
  emailText: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: wp(5),
    marginBottom: hp(0.8),
    color: '#000',
  },
  emailInput: {
    borderWidth: wp(0.3),
    borderRadius: wp(2),
    padding: wp(3),
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: wp(4.5),
  },
  eyeOnBox: {
    position: 'absolute',
    top: hp(5.5),
    left: wp(72),
    padding: wp(2.5),
  },
  eyeOffBox: {
    position: 'absolute',
    top: hp(5),
    left: wp(72),
    padding: wp(2.5),
  },
  registerContainer: {
    marginTop: hp(3.8),
    width: wp(85),
    alignSelf: 'center',
  },
  registerBox: {
    backgroundColor: '#01D201',
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(3),
    borderRadius: wp(2),
  },
  registerText: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: wp(6.3),
    color: '#fff',
  },
  footer: {
    width: wp(85),
    marginTop: wp(2),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: wp(4),
    marginHorizontal: wp(1),
    letterSpacing: wp(0.2),
  },
  Text: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: wp(4),
    marginHorizontal: wp(1),
    letterSpacing: wp(0.2),
    color: '#01D201',
  },
});

export default styles;
