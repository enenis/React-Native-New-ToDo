import { StyleSheet } from 'react-native'
import colors from '../../styles/color'

    const base_style =StyleSheet.create({
        container:{
            backgroundColor:colors.red,
            marginLeft:140,
            padding:13,
            marginVertical:20,
            borderBottomLeftRadius:23,
            borderTopLeftRadius:23,
            position:"absolute",
            bottom:25,
            right:2,
        },
        title:{
            textAlign:"right",
            color:"white",
            fontWeight:"bold",
            fontSize:18,
            
        }
    })

export default {
    primary:StyleSheet.create({
        container:{
            ...base_style.container,
        },
        title:{
            ...base_style.title,
        }
    }),
    secondary:StyleSheet.create({
        container:{
            ...base_style.container,
            marginBottom:70
        },
        title:{
            ...base_style.title
        }
    })
}