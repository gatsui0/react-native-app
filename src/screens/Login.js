import React, { useState, useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight, Image, ActivityIndicator} from 'react-native';
import { initializeApp } from "firebase/app";

import {connect} from "react-redux";
import { getDatabase } from "firebase/database";

import {processLogin} from "../actions/";


function Login(props){

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassord, setShowPassword] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
 
  });

  function MessageShow(){
    switch(message){
      case "auth/invalid-email": return "E-mail invalido!"
      case "auth/wrong-password": return "Senha inválida!"
      default: return message

    }
  }

  function renderBottonOrLoading(){

    if(loading){
      return( <ActivityIndicator /> );
    }

    return(        
      <TouchableHighlight style={style.button} onPress={() => {props.processLogin(setLoading,setMessage, email, senha, props)}}>
      <Text style={style.txt}>ENTRAR</Text>
      </TouchableHighlight>
      );

  }

    return(


      <View style={style.View}> 

          <Image source={require('../icons/1.png')} style={style.imgIcon} />

          <Text 
              style={style.logo}>Mind Booster</Text>

          <TextInput
              style={style.InputStyle} 
              placeholderTextColor='#6200EE'
              placeholder='Email' 
              value={email} 
              onChangeText={(e) => setEmail(e)} />

          <TextInput 
              style={style.InputStyle}  
              placeholderTextColor='#6200EE'
              placeholder='Senha' 
              value={senha}  
              secureTextEntry={showPassord ? true : false}
              onChangeText={(e) => setSenha(e)} /> 
          
          <TouchableHighlight onPress={() => setShowPassword(!showPassord)} style={style.img}>
            <Image source={require('../icons/olho.png')}  />
          </TouchableHighlight>

          <Text style={style.details}>Esqueci a senha</Text>

          

        {renderBottonOrLoading()}

        <Text style={style.message}>{MessageShow()}</Text>

        <TouchableHighlight style={style.buttonCadastrar} onPress={() => props.navigation.navigate("Cadastro")} >
            <Text style={style.txt}>CADASTRE-SE</Text>
        </TouchableHighlight>

      </View>
    )
}

const style = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: '#423F5D',
  },
  InputStyle: {
    borderWidth: 1,
    borderBottomColor: '#6200EE',
    backgroundColor: 'white',
    marginBottom: 15,
    marginLeft: 42,
    marginRight: 42,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    elevation: 12,
  },
  txt: {
    color: 'white',
  },
  button: {

    backgroundColor: '#6A61A1',
    fontWeight: 'bold',
    padding: 10,
    margin: 42,
    borderWidth: 1,
    borderColor: '#6A61A1',
    width: 328,
    height: 46,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 15,
    
  },
  buttonCadastrar: {

    backgroundColor: '#B58D97',
    fontWeight: 'bold',
    padding: 10,
    margin: 42,
    borderWidth: 1,
    borderColor: '#B58D97',
    width: 328,
    height: 46,
    borderRadius: 4,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    fontSize: 56,
    color: 'white',
    width: 350,
    margin: 25,
    marginTop: 145,
    marginBottom: 40,
    fontFamily: "Pacifico-Regular",

  },
  img: {
    position: 'absolute',
    right: 53,
    bottom: 268,
  },
  details: {
    position: 'absolute',
    right: 53,
    bottom: 225,
    color: 'white',
  },
  imgIcon: {
    position: 'absolute',
    top: 40,
    left: 140,
  },
  message: {
    color: 'white',
    fontSize: 15,
    marginHorizontal: 140,
  }
})

export default connect(null, {processLogin})(Login);