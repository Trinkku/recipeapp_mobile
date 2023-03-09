import { StyleSheet } from 'react-native'
import {COLORS} from '../../Customs/Colors'
export default StyleSheet.create({

    container:{
    alignItems:'center',
    flex: 1,
    backgroundColor:COLORS.backgroundLight
    },

    signUpContainer:{
    width: 350,
    alignItems: 'center',
    flexDirection:'column'
    },

    signUpForm:{
    justifyContent:'flex-start',
    width:'90%',
    
    },

    signUpForm1:{
    justifyContent:'flex-start',
    width:'45%',
    marginRight:20
    },
    label:{
    textAlign:'left'
    }
})