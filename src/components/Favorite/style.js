import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    marginTop: hp(3),
    flexDirection: 'row',
    borderRadius: wp(3),
    borderWidth: wp(0.3),
    borderColor: '#2FF500',
  },
  image: {
    resizeMode: 'stretch',
    width: wp(28),
    height: wp(28),
    borderRadius: wp(3),
  },
  textContainer: {
    marginLeft: wp(8),
    marginTop: wp(6),
  },
  name: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: wp(5),
    letterSpacing: wp(0.1),
    marginVertical: wp(1),
  },
  price: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: wp(4.5),
    letterSpacing: wp(0.1),
    marginBottom: wp(3),
  },
  icon: {
    position: 'absolute',
    padding: wp(2),
    right: 1,
  },
});

export default styles;
