import React from 'react'
import Modal from "react-native-modal";
import { View,TextInput } from 'react-native'
import Button from '../Button';
import styles from "./ContentInputModal.style"

function ContentInputModal({onClose,visible,onSend}) {
    const[text,setText]=React.useState()

    function handleContentSend() {
        if(!text){
            return;
        }
        onSend(text)
        setText(null)
    }


  return (
    <Modal
    animationIn={"fadeInRight"}
    animationOut={"fadeOutRight"}
    style={styles.modal}
    isVisible={visible}
    swipeDirection="right"
    onBackButtonPress={onClose}
    onBackdropPress={onClose}
    >
        <View style={styles.container}>
            <View style={styles.inner_container}>
            <TextInput placeholder='write your tasks' style={styles.Input} multiline onChangeText={setText} />
            </View>
            <Button text="Send" onPress={handleContentSend} />
        </View>
        
    </Modal>
  )
}

export default ContentInputModal