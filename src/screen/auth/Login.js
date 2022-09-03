import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, ImageBackground, TextInput, TouchableOpacity, Text, Image } from "react-native";

const Login = () => {
  return (
      <SafeAreaView style={{backgroundColor:'#fff'}}>
        <ScrollView>
          <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/bg_image.png')} resizeMode='cover' style={styles.bgImage}/>
          </View>
          <View style={{padding:10}}>
            <View style={styles.formInput}>
                <Text style={{textAlign:'center', fontSize:30, fontWeight:'bold', color:'#003865'}}>Login Page</Text>
            </View>
            <View style={styles.formInput}>
              <TextInput style={styles.textInput} placeholder="Enter your email address"/>
            </View>
            <View style={styles.formInput}>
              <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true}/>
            </View>
            <View style={styles.formInput}>
              <TouchableOpacity>
                <Text style={{textAlign:'right', fontSize:16, fontWeight:'bold', color:'#FF1E00'}}>Forget Password ?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.formInput}>
              <TouchableOpacity style={styles.loginBtn}>
                <Text style={{textAlign:'center', fontSize:18, color:'#fff'}}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.formInput}>
                <Text style={{textAlign:'center', fontSize:20, color:'#000000'}}>or</Text>
            </View>
            <View style={styles.formInput}>
              <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                <TouchableOpacity style={{marginRight:10}}>
                  <Image source={require('../../assets/images/google.png')} style={{width:40, height:40, borderRadius:1000}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:10}}>
                  <Image source={require('../../assets/images/facebook.png')} style={{width:40, height:40, borderRadius:1000}}/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.formInput}>
              <View style={{height:1, backgroundColor:'#ddd', width:'100%'}}></View>
            </View>
            <View style={styles.formInput}>
              <TouchableOpacity>
                <Text style={{textAlign:'center', fontSize:16, fontWeight:'bold', color:'#0096FF'}}>Need an account ? Register here !</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  bgImage:{
    width:'100%',
    height:120
  },
  formInput:{
    marginTop:10,
    padding:10
  },
  textInput:{
    padding:10,
    fontSize:16,
    borderWidth:1,
    borderColor:"#3B9AE1",
    borderRadius:10
  },
  loginBtn:{
    padding:15,
    backgroundColor:"#3120E0",
    borderRadius:10
  }
});

export default Login;