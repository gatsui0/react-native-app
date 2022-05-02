import React, {Component, useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableHighlight, Image, ActivityIndicator} from 'react-native';
import { initializeApp, firebase } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Directions } from 'react-native-gesture-handler';
import { useEffect } from 'react/cjs/react.production.min';


export default function Cadastro({navigation}){

  const [emailNovo, setEmail] = useState("");
  const [senhaNova, setSenha] = useState("");
  const [senhaNovaR, setSenhaR] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassord, setShowPassword] = useState(true);
  const [showPassord2, setShowPassword2] = useState(true);
  const [message, setMessage] = useState("");

  function UserValid(){

    if(emailNovo.indexOf('@') == -1 || emailNovo.indexOf('.com') == -1){
      return setMessage("E-mail inválido!");
    }

    if(senhaNova != senhaNovaR){
      return setMessage("As senhas não são iguais!");
    }
    if(senhaNova.length < 6){
      return setMessage("A senha deve ter no mínimo 6 digítos");
    }
  }

  function processRegister(){ 

    setLoading(true);


    UserValid();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailNovo, senhaNova)
    .then(user => setMessage("Cadastro criado com sucesso!"))
    .catch( error => {console.log(error.code)})
    .then(() => setLoading(false))

  }
    return(

      <View style={style.View}> 

          <TouchableHighlight onPress={props => navigation.popToTop() }>
            <View style={style.containerBack}>
              <Image source={require('../icons/1.png')} style={style.imgIcon} />
              <Text style={style.logo}> Mind Booster </Text>
            </View>
          </TouchableHighlight>

            <Text style={style.txtOrder} >Preecha os dados do seu </Text>
            <Text style={style.txtOrder2}>cadastro</Text>

          <TextInput
              style={style.InputStyle} 
              placeholderTextColor='#6200EE'
              placeholder='Email' 
              value={emailNovo} 
              onChangeText={(e) => setEmail(e)} />   

          <TextInput 
              style={style.InputStyle}  
              placeholderTextColor='#6200EE'
              placeholder='Senha' 
              value={senhaNova}  
              secureTextEntry={showPassord ? true : false}
              onChangeText={(e) => setSenha(e)} /> 

          <TextInput 
              style={style.InputStyle}  
              placeholderTextColor='#6200EE'
              placeholder='Repetir senha' 
              value={senhaNovaR}  
              secureTextEntry={showPassord2 ? true : false}
              onChangeText={(e) => setSenhaR(e)} /> 
          

          <TouchableHighlight style={style.img} onPress={() => setShowPassword(!showPassord)}>
            <Image source={require('../icons/olho.png')} />
          </TouchableHighlight>

          <TouchableHighlight style={style.img2} onPress={() => setShowPassword2(!showPassord2)}>
            <Image source={require('../icons/olho.png')} />
          </TouchableHighlight>
      

          <Text style={style.message}>{message}</Text>

        <TouchableHighlight style={style.buttonCadastrar} onPress={() => processRegister()} >
            <Text style={style.txt}>CADASTRAR</Text>
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
  },
  txt: {
    color: 'white',
  },
  buttonCadastrar: {

    backgroundColor: '#6A61A1',
    fontWeight: 'bold',
    padding: 10,
    margin: 42,
    width: 328,
    height: 46,
    borderRadius: 4,
    alignItems: 'center',
  },
  logo: {
    fontSize: 28,
    color: 'white',
    fontFamily: "Pacifico-Regular",

  },
  img: {
    position: 'absolute',
    right: 50,
    bottom: 290,
  },
  img2: {
    position: 'absolute',
    right: 50,
    bottom: 225,
  },
  details: {
    position: 'absolute',
    right: 53,
    bottom: 225,
    color: 'white',
  },
  imgIcon: {
    width: 64,
    height: 64,
  },
  containerBack: {
    flexDirection: 'row',
  },
  txtOrder: {
    fontFamily: "Roboto-Light",
    fontSize: 30,
    color: 'white',

    margin: 35,
    marginTop: 50,
    marginBottom: 0,
  },
  txtOrder2: {
    fontFamily: "Roboto-Light",
    fontSize: 30,
    color: 'white',

    marginBottom: 75,
    marginLeft: 150,
  },
  message: {
    color: 'white',
    fontSize: 15,
    marginHorizontal: 145,
  }
})
