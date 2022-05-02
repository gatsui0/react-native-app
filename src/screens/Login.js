import React, {Component, useState, useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableHighlight, Image, ActivityIndicator} from 'react-native';
import { initializeApp, firebase } from "firebase/app";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";


export default function Login(props){

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassord, setShowPassword] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyD6IPKQ9tDD1FioiIGh8HIw6HPTSHAcZTE",
      authDomain: "flashcardsapp-1ee16.firebaseapp.com",
      projectId: "flashcardsapp-1ee16",
      storageBucket: "flashcardsapp-1ee16.appspot.com",
      messagingSenderId: "31381622835",
      appId: "1:31381622835:web:31596d19b9e495cc46d346",
      measurementId: "G-FR3Y3407SS"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  });

  function MessageShow(){
    switch(message){
      case "auth/invalid-email": return "E-mail invalido!"
      case "auth/wrong-password": return "Senha inválida!"
      default: return "Erro desconhecido!"

    }
  }

  function processLogin(){ 

    setLoading(true);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
    .then(user => {props.navigation.navigate("Menu"); setMessage("Logado com sucesso!")})
    .catch(erro => setMessage(erro.code))
    .then( () => {
      setLoading(false);
    })
  }

  function renderBottonOrLoading(){

    if(loading){
      return( <ActivityIndicator /> );
    }

    return(        
      <TouchableHighlight style={style.button} onPress={() => {processLogin()}}>
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
