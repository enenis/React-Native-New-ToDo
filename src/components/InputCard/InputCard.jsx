import React,{useState} from 'react'
import { TextInput,View,Text,TouchableOpacity } from 'react-native'
import styles from "./InputCard.style"
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import CheckBox from '@react-native-community/checkbox';
import {showMessage} from "react-native-flash-message";


function Input({text,onPress}) {
  const [toggleCheckBox, setToggleCheckBox] =useState(false)
 
  
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>

        <Text style={styles.Input}>{text.text}</Text>
        <View style={styles.down_container}>
          <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.btn_text}><Icon name="trash" size={20} /></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnn} onPress={()=>setToggleCheckBox(!toggleCheckBox)}>
            
            <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onCheckColor={"white"}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
          </TouchableOpacity>
        </View>
        </View>
        
       
    </View>

  )
}

export default Input