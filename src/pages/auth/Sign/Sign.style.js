import { StyleSheet } from 'react-native'
import colors from '../../../styles/color'
export default StyleSheet.create({
    container:{
        backgroundColor:colors.background,
        flex:1,
    },
    title:{
        fontSize:70,
        textAlign:"center",
        color:colors.red,
        flex:1,
        textAlignVertical:"center"
    }
})