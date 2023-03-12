import { StyleSheet } from 'react-native'
import colors from '../../styles/color'
export default StyleSheet.create({
    container:{
        backgroundColor:colors.gray,
        marginVertical:20,
        marginRight:70,
        borderBottomRightRadius:23,
        borderTopRightRadius:23,
        padding:20
    },
    Input:{
        fontSize:17,
        fontWeight:"bold",
        color:"black",
    },
    inner_container:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    down_container:{
        flexDirection:"column",
        justifyContent:"space-between",
        
    },
    btn:{
        backgroundColor:"black",
        width:40,
        height:35,
        marginRight:-20,
        marginTop:-20,
        borderTopRightRadius:20,
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    },
    btnn:{
        backgroundColor:"red",
        width:40,
        height:35,
        marginRight:-20,
        marginBottom:-20,
        borderBottomRightRadius:20,
        justifyContent:"center",
        alignItems:"center",
        flex:1,

    },
    btn_text:{
        color:"white"
    }
})