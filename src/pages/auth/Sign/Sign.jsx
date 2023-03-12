import React from 'react'
import { Text, View } from 'react-native'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import styles from "./Sign.style"
import auth from '@react-native-firebase/auth';
import { Formik } from 'formik'
import {showMessage} from "react-native-flash-message";


function Sign({navigation}) {
    const [loading,setLoading]=React.useState(false)

    const initialFormValues={
        usermail:"",
        password:"",
        repassword:""
    }

   async function handleFormSubmit(formValues) {
    if(!formValues.password||!formValues.usermail){
        showMessage({
            message: "Password or mail empty!",
            type: "warning",
          });
          return;
    }
    if(formValues.password!==formValues.repassword){
        showMessage({
            message: "Password's are not match!",
            type: "warning",
          });
        return;
    }
        try {
            setLoading(true)
            await auth().createUserWithEmailAndPassword(
                formValues.usermail,
                formValues.password
                )
                setLoading(false)
                showMessage({
                    message: "User created! You are being redirected",
                    type: "success",
                  });
                navigation.navigate("LoginPage")
        } catch (error) {
            showMessage({
                message: error.code,
                type: "danger",
              });
            setLoading(false)
        }
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>enenis software</Text>
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
            {({values,handleChange,handleSubmit})=>(
            <>
                <Input value={values.usermail} onChange={handleChange("usermail")} placeholder="enter your e-mail..." />
                <Input value={values.password} onChange={handleChange("password")} placeholder="enter your password..." isSecure={true}/>
                <Input value={values.repassword} onChange={handleChange("repassword")} placeholder="enter your password again..." isSecure={true}/>
                <Button text="Sign In" onPress={handleSubmit} loading={loading}/>
            </>
            )}
        </Formik>
        <Button theme='secondary' text="Go Back" onPress={()=>navigation.goBack()}/>

    </View>
  )
}

export default Sign