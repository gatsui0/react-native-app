import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableHighlight,
  FlatList
} from 'react-native';
import CollectionCards from '../components/CollectionCard';
import {connect} from "react-redux";
import { searchCartoes } from '../actions/cartoesActions';

function Cartoes({navigation, route, searchCartoes, cartoes}) {
  
  const {idBaralho} = route.params

  useEffect(() => {
    searchCartoes(idBaralho);
  }, []);

  return (
    <View style={style.view}>
      <TextInput
        placeholder="filtro"
        style={style.txtinput}
        placeholderTextColor="#6200EE"
      />
      <TouchableHighlight
        style={style.button}
        onPress={pros => navigation.navigate('Play', {cartoes: cartoes, idBaralho: idBaralho})}>
        <Text style={{color: 'white'}}>Jogar!</Text>
      </TouchableHighlight>

      <ScrollView>
        <FlatList
          data={cartoes}
          renderItem={({item}) => {
            return (
              <CollectionCards
                navigation={navigation}
                cartaoItem={item}
                idBaralho={idBaralho}
              />
            );
          }}
          keyExtractor={item => item.id}
        />
      </ScrollView>

      <View style={style.bottom} >
                  <TouchableHighlight onPress={() => navigation.navigate("Criar um flashCard", {id: idBaralho})}> 
                    <Image style={style.img}  source={require('../icons/bottom2.png')} />
                  </TouchableHighlight>
                  
          </View>
    </View>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: '#57966A',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#B58D97',
    marginHorizontal: 140,
    marginBottom: 10,
    width: 150,
    height: 46,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    position: 'absolute',
    width: 75,
    height: 75,
    right: 0,
    bottom: 20
  },
  img: {
    height: 70,
    width: 70
  },
  view: {
    flex: 1,
    backgroundColor: '#332E56',
  },
  txtinput: {
    backgroundColor: 'white',
    margin: 19,
    marginBottom: 24,
  },
});

const mapStateToProps = state => {
  
  const {cartoes} = state;

  if (cartoes == null) return null;
  const key = Object.keys(cartoes);

  

  const baralhoWithId = key.map(key => {
    return {...cartoes[key], id: key}
  });

  return{cartoes: baralhoWithId};

}

export default connect(mapStateToProps, {searchCartoes})(Cartoes);