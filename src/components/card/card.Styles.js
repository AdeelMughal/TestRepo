import { StyleSheet } from 'react-native';
import {colors} from '../../services/utilities/colors/index';
import { totalSize, width, height } from 'react-native-dimension';

const styles = StyleSheet.create({
  card: {
    width: width(90),
    marginTop: height(1),
    borderRadius: height(1),
    paddingHorizontal: width(3),
    backgroundColor: colors.snow,
    alignSelf: 'center',
    elevation: 3,
    marginBottom:height(1),
    paddingVertical: height(1.5)
  },
  card1: {
    flexDirection: 'row',
    padding: height(1),
    alignItems: 'center',
    justifyContent:'space-between'
  },
  card1Inner:{
    flexDirection:'row',
    alignItems:'center'
    
  },
  imageContainer: {
    height: width(18),
    width: width(18),
    borderRadius: width(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: width(12),
    width: width(12),
    borderRadius: width(10),
    marginRight:width(2),
  },
  cardName: {
    fontSize: height(2),
    fontWeight: 'bold',
  },
  cardJob:{
    fontSize: height(1.5),
    fontWeight: 'bold',
    color: colors.steel,
  },
  cardIconContainer:{
    height: width(9),
    width: width(9),
    borderRadius: width(5),
    backgroundColor:colors.steel,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:width(5),
  },
  cardDate:{
    marginTop:height(1.5),
    fontSize: height(2),
    fontWeight: 'bold',
    color: colors.steel,
  },
  cardDate1:{
    fontSize: height(2.5),
    fontWeight: 'bold',
    color: colors.appColor1,
  },
  price:{
    fontSize: height(2.5),
    fontWeight: 'bold',
  }
});
export default styles;
