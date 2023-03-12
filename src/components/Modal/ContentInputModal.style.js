import { StyleSheet,Dimensions } from 'react-native'

const deviceSize=Dimensions.get("window")

export default StyleSheet.create({
    container:{
        backgroundColor:"#2F2B2B",
        height:deviceSize.height/3,
        borderBottomLeftRadius:23,
        borderTopLeftRadius:23,
    },
    inner_container:{
        flex:1,
        padding:20
    }, 
    modal:{
        marginRight:0
    
    },
    Input:{
        color:"white",
        
    }
})