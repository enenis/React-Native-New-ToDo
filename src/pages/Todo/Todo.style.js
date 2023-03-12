import { StyleSheet } from 'react-native'
import colors from "../../styles/color"
export default StyleSheet.create({
    container:{
        backgroundColor:colors.background,
        flex:1,
    },
    title:{
        fontSize:30,
        textAlign:"center",
        color:colors.red,
        margin:10
        // flex:1,
        // textAlignVertical:"center"
    },
    inner_container:{
        flexDirection:"row",
        justifyContent:"space-around",
    },
    tnt:{
        marginLeft:40,
        marginTop:18
    }
})