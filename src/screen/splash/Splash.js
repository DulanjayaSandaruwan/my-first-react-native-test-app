import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

const Splash = () => {

  const [isGo, setIsGo] = useState(true);
  const Navigation = useNavigation();

  useEffect(() => {
    if(isGo == true){
      setTimeout(() => {
        Navigation.navigate("Login");
        setIsGo(false);
      },2000);
    }
  });

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Image source={require('../../assets/images/logo.png')} style={{width:100, height:100}}/>
      </View>
      <View>
        <Text style={{fontSize:18, textAlign:'center'}}>Designed By Dulanjaya Sandaruwan</Text>
      </View>
    </SafeAreaView>
  )
}

export default Splash;