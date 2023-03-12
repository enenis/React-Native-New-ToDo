import React from 'react'
import { View,Text,ScrollView,FlatList } from 'react-native'
import Button from '../../components/Button'
import FloatingButton from '../../components/FloatingButton'
import InputCard from '../../components/InputCard'
import ContentInputModal from '../../components/Modal/ContentInputModal'
import styles from "./Todo.style"
import database from "@react-native-firebase/database"
import auth from '@react-native-firebase/auth'
import parseContentData from '../../utils/parseContentData'
import {showMessage} from "react-native-flash-message";
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

function Todo() {
  const [isModalVisible,setIsModalVisible]=React.useState(false)
  const [contentList,setContentList]=React.useState([])

  React.useEffect(()=>{
    database().ref("todos/").on("value",snapshot=>{
      const contentData=snapshot.val()
      const parsedData=parseContentData(contentData||{});
      setContentList(parsedData)
      
    })
  },[])

  function handleInputToggle() {
    setIsModalVisible(!isModalVisible)
  }

  function handleSendContent(content) {
    handleInputToggle()

    database().ref("/todos/")
    sendContent(content)
    showMessage({
      message: "Success, Your task will be there!",
      type: "success",
    });
  }

  function handleDeleteContent(item) {
    database().ref(`/todos/${item.id}`).remove()
    showMessage({
      message: "Your task was be delete!",
      type: "success",
    });
  }

  function sendContent(content){
    const userMail=auth().currentUser.email
    const contentObj={
      text:content,
      date:(new Date()).toISOString(),
      username: userMail.split("@")[0]
    }
    database().ref("todos/").push(contentObj)
  }

const renderShownTodo=({item})=>(<InputCard text={item} onPress={()=>handleDeleteContent(item)} />)


  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.title}>enenis software</Text>
        <Icon style={styles.tnt} name="logout" color="red" size={25} onPress={()=>auth().signOut()} />
        </View>
        <FlatList data={contentList} renderItem={renderShownTodo} />
        <FloatingButton text="Send Button" onPress={handleInputToggle} />
        <ContentInputModal visible={isModalVisible} onClose={handleInputToggle} onSend={handleSendContent} />
    </View>
  )
}

export default Todo