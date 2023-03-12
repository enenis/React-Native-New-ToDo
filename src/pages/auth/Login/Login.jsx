import React from 'react'
import { View,Text, } from 'react-native'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import styles from "./Login.style"
import auth from '@react-native-firebase/auth';
import {Formik} from "formik"
import {showMessage} from "react-native-flash-message";

function Login({navigation}) {
  const[loading,setLoading]=React.useState(false)

  const initalFormValues={
    usermail:"",
    password:"",
  }

 async function handleFormSubmit(formValues) {
  if(!formValues.password||!formValues.usermail){
    showMessage({
      message: "Password or mail empty!",
      type: "warning",
    });
    return;
  }
    try {
      setLoading(true)
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
        )
      setLoading(false)
      showMessage({
        message: "Login Succesfuly! You are being redirected",
        type: "success",
      });
      navigation.navigate("TodoPage")
    } catch (error) {
      showMessage({
        message: "User not found!",
        type: "danger",
      });
      setLoading(false)

    }
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>enenis software</Text>
        <Formik initialValues={initalFormValues} onSubmit={handleFormSubmit}>
          {({values,handleChange,handleSubmit})=>(
          <>
            <Input value={values.usermail} onChange={handleChange("usermail")} placeholder="enter e-mail..." />
            <Input value={values.password} onChange={handleChange("password")} placeholder="enter password..." isSecure={true}/>
            <Button text={"Login"} onPress={handleSubmit} loading={loading}/>
          </>
          )}
        </Formik>
        <Button theme='secondary' text={"Sign In"} onPress={()=>navigation.navigate("SignPage")}/>
    </View>
  )
}

export default Login