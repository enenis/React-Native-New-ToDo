import React from 'react'
import { TextInput,View,Text } from 'react-native'
import styles from "./Input.style"


function Input({placeholder,value,onChange,addSection,isSecure}) {
  return (
    <View style={styles.container}>
        <TextInput style={styles.Input} placeholder={placeholder} value={value} onChangeText={onChange} multiline={addSection} secureTextEntry={isSecure}/>
    </View>

  )
}

export default Input