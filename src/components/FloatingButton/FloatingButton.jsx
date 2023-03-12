import React from 'react'
import { TouchableOpacity,View,Text,ActivityIndicator } from 'react-native'
import styles from "./FloatingButton.style"


function Button({text,onPress,theme="primary",loading}) {
  return (
    <TouchableOpacity style={styles[theme].container} onPress={onPress}>
      {loading?<ActivityIndicator size={25} />:<Text style={styles[theme].title}>{text}</Text>}
        
    </TouchableOpacity>
  )
}

export default Button