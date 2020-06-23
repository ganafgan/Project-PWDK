import React, { useState } from 'react'
import { StyleSheet, View, Alert, Text, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Button, Gap, Header, Input } from '../../components'
import { colors } from '../../utils'
import Validator from 'validator'
import { API_URL } from '../../supports/constants/urlApi'
import { connect } from 'react-redux'
import { saveUserData } from './../../redux/actions/userAction'
import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

const Register = (props) => {

    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirm, setConfirm] = useState(null)

    const onRegisterPressBtn = () => {
        let otp = ''
        for(var i = 0; i < 4; i++){
            otp += Math.round(Math.random() * 9)
        }

        const storeData = async (value) => {
            try {
              const jsonValue = JSON.stringify(value)
              await AsyncStorage.setItem('data_user', jsonValue)
              console.log('success async storage')
            } catch (e) {
              console.log(e)
            }
          }


        if(username && email && password && confirm){
            if(!Validator.isEmail(email)){
                return Alert.alert('Email Format Incorrect')
            }
            
            if(password !== confirm){
                return Alert.alert("Password didn't match")
            }

            const data = {
                username : username,
                email : email,
                password : password,
                otp : otp
            }

            Axios.post(API_URL + 'auth/register', data)
            .then((res)=>{
                if(!res.data.error){
                    Alert.alert(res.data.message)
                    props.saveUserData(res.data)
                    storeData(res.data)
                    console.log(res.data)
                    props.navigation.navigate('Otp')
                }else{
                    Alert.alert(res.data.message)
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        }else{
            Alert.alert('Form Must be Filled')
        }

    }



    return (
        <KeyboardAvoidingView style={{flex:1}}>
            <ScrollView>
                <View style={styles.page}>
                    <Header onPress={()=> navigation.goBack()} title='Daftar Akun'/>
                    <View style={styles.content}>
                        <Input label='Username' onChangeText={(value) => setUsername(value)} value={username} />
                        <Gap height={24} />
                        <Input label='Email' onChangeText={(value) => setEmail(value)} value={email} />
                        <Gap height={24} />
                        <Input label='Password' onChangeText={(value) => setPassword(value)} value={password} />
                        <Gap height={24} />
                        <Input label='Confirm Password' onChangeText={(value) => setConfirm(value)} value={confirm} />
                        <Gap height={40} />
                        <Button title='Continue' onPress={onRegisterPressBtn}/>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    
    )
}

export default connect(null,{saveUserData})(Register)

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        padding: 40, 
        paddingTop: 0
    }
})
