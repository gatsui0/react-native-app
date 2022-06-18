import React, {Component, useState, useEffect} from 'react';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {auth, storage} from '../firebase/config';
import DocumentPicker, {types} from 'react-native-document-picker';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';

import {
  setFieldFlashCard,
  saveFlashCard,
  clearFieldsFlashCard,
  setAllFieldsFlashCard,
} from '../actions/newFlashCardActions';

const CriarFlashCard = ({
  flashCard, setFieldFlashCard, 
  saveFlashCard, route, 
  navigation, setAllFieldsFlashCard,
  clearFieldsFlashCard}) => {

  useEffect(() => {
    if (route.params.cartaoItem) {
      const {cartaoItem} = route.params;
      setAllFieldsFlashCard(cartaoItem);
    } 
    else clearFieldsFlashCard();
  }, []);

  const {id} = route.params;

  function components() {
    return (
      <View style={style.View}>
        <View style={{marginBottom: 35, marginTop: 0}}>
          <Text style={style.txtOrder}>
            Preecha os dados da frente e do verso do flashcard
          </Text>
        </View>

        <View style={style.containerInputs}>
          <View>
            <Text style={style.textfont}>Frente</Text>
            <TextInput
              onChangeText={props => setFieldFlashCard('frente', props)}
              value={flashCard.frente}
              placeholderTextColor="#6200EE"
            />
          </View>

          <View style={style.boxContainer}>
            <Text style={style.textfont}>Verso</Text>
            <TextInput
              placeholderTextColor="#6200EE"
              value={flashCard.verso}
              onChangeText={props => setFieldFlashCard('verso', props)}
              multiline={true}
            />
          </View>
        </View>

        <TouchableHighlight
          style={style.buttonCadastrar}
          onPress={() => {
            saveFlashCard(flashCard, id);
            navigation.goBack();
          }}>
          <Text style={style.txt}>CADASTRAR</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={style.buttonCancelar}
          onPress={() => {
            navigation.goBack();
          }}>
            <Text style={{color: 'white'}}>CANCELAR</Text>


        </TouchableHighlight>
      </View>
    );
  }

  return components();
};

const style = StyleSheet.create({
  buttonCancelar: {
    backgroundColor: '#423F5D',
    padding: 10,
    marginHorizontal: 42,
    marginBottom: 18,
    width: 328,
    height: 46,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 45
  },
  textfont: {
    fontSize: 20,
    color: 'grey',
  },
  boxContainer: {
    marginTop: 60,
  },
  View: {
    flex: 1,
    backgroundColor: '#423F5D',
    alignContent: 'center',
  },
  containerInputs: {
    padding: 12,
    height: 280,
    borderWidth: 1,
    borderBottomColor: '#6200EE',
    backgroundColor: 'white',
    marginBottom: 0,
    marginHorizontal: 42,
    borderRadius: 15,
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
  txtOrder: {
    fontFamily: 'Roboto-Light',
    fontSize: 25,
    color: 'white',

    margin: 35,
    marginTop: 50,
    marginBottom: 0,
  },
});

const mapStateToProps = state => {
  return {flashCard: state.flashCard};
};

const mapDispatchToProps = {
  setFieldFlashCard,
  saveFlashCard,
  setAllFieldsFlashCard,
  clearFieldsFlashCard
};

export default connect(mapStateToProps, mapDispatchToProps)(CriarFlashCard);
