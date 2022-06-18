import React, {useState, useEffect} from 'react';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {auth, storage} from '../firebase/config';
import DocumentPicker, {types} from 'react-native-document-picker';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';

import {setField, saveBaralho, clearFields, setAllFields} from '../actions';

const CriarBaralho = ({
  route,
  navigation,
  deckForm,
  setField,
  saveBaralho,
  setAllFields,
  clearFields,
}) => {
  const [isCamera, setCamera] = useState(false);
  const [image, setImage] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (route.params) {
      const {baralhoItem} = route.params;
      setAllFields(baralhoItem);
    } else clearFields();
  }, []);

  function saveImg(baralho) {
    return new Promise((resolve, reject) => {
      const {currentUser} = auth;
      const storageRef = ref(
        storage,
        'users/' + currentUser.uid + '/coleçãoBaralho/' + baralho.name + '.jpg',
      );

      uploadBytes(storageRef, image).then(snapshot => {
        getDownloadURL(storageRef).then(url => {
          const action = setField('img', url);
          dispatch(action);
          resolve('fucionou!!');
        });
      });
    });
  }

  const handleDocumentSelection = () => {
    DocumentPicker.pick({
      presentationStyle: 'fullScreen',
      type: [types.images],
    }).then(async images => {
      const imageContent = await fetch(images[0].uri);
      const blob = await imageContent.blob();
      setImage(blob);
    });
  };

  function components() {
    return (
      <View style={style.View}>
        <View style={{marginBottom: 35, marginTop: 0}}>
          <Text style={style.txtOrder}>
            Preecha os dados referente à coleção a ser criada
          </Text>
        </View>

        <TextInput
          style={style.InputStyle}
          placeholderTextColor="#6200EE"
          placeholder="Nome de coleção"
          value={deckForm.name}
          onChangeText={props => {
            console.log(props);
            setField('name', props);
          }}
        />

        <TextInput
          style={style.InputStyle2}
          placeholderTextColor="#6200EE"
          placeholder="Descrição"
          value={deckForm.description}
          onChangeText={props => setField('description', props)}
          multiline={true}
        />

        <View
          style={style.InputStyle3}
          placeholderTextColor="#6200EE">
          <TouchableHighlight
            onPress={() => {
              Alert.alert('', 'De onde quer pegar a imagem?', [
                {
                  text: 'Camera',
                  onPress: () => {
                    setCamera(true);
                  },
                },
                {
                  text: 'Galeria',
                  onPress: () => {
                    console.log('galeria');
                    handleDocumentSelection();
                  },
                },
              ]);
            }}>
            <View style={{}}>
              <Text style={{color:'#6200EE', marginLeft: 5}}>Imagem</Text>
              <Image
                style={style.img}
                source={require('../icons/bottom2.png')}
              />
            </View>
          </TouchableHighlight>
        </View>

        <TouchableHighlight
          style={style.buttonCadastrar}
          onPress={() => {
            saveImg(deckForm)
              .then(resolve => {
                saveBaralho(deckForm);
                navigation.goBack();
              })
              .catch(erro => {
                console.log(erro);
              });
          }}>
          <Text style={style.txt}>CADASTRAR</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={style.buttonCancelar}
          onPress={() => {
            navigation.goBack();
          }}>
            <Text style={style.txt2}>CANCELAR</Text>


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
  View: {
    flex: 1,
    backgroundColor: '#423F5D',
    alignContent: 'center',
  },
  container: {},
  preview: {},
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
  InputStyle3: {
    height: 100,
    borderWidth: 1,
    borderBottomColor: '#6200EE',
    backgroundColor: 'white',
    marginBottom: 15,
    marginLeft: 42,
    marginRight: 42,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  InputStyle2: {
    borderWidth: 1,
    borderBottomColor: '#6200EE',
    backgroundColor: 'white',
    marginBottom: 15,
    marginLeft: 42,
    marginRight: 42,
    height: 100,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  txt: {
    color: 'white',
  },
  txt2: {
    color: 'white',
    borderColor: 'white',
    borderRadius: 6
  },
  buttonCadastrar: {
    backgroundColor: '#6A61A1',
    padding: 10,
    margin: 42,
    marginBottom: 18,
    marginTop: 10,
    width: 328,
    height: 46,
    borderRadius: 4,
    alignItems: 'center',
  },
  logo: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Pacifico-Regular',
  },
  imgIcon: {
    width: 64,
    height: 64,
  },
  txtOrder: {
    fontFamily: 'Roboto-Light',
    fontSize: 25,
    color: 'white',

    margin: 35,
    marginTop: 50,
    marginBottom: 0,
  },
  img: {
    height: 50,
    width: 50,
  },
});

const mapStateToProps = state => {
  return {deckForm: state.deckForm};
};

const mapDispatchToProps = {
  setField,
  saveBaralho,
  setAllFields,
  clearFields,
};

export default connect(mapStateToProps, mapDispatchToProps)(CriarBaralho);
