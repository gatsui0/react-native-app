import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import { deletarBaralho} from "../actions/";
import {connect} from "react-redux";

function CollectionList({
  navigation,
  baralhoItem,
  deletarBaralho
}) {
  return (

    <View key={baralhoItem.id} style={style.box}>

      <TouchableHighlight onPress={() => navigation.navigate('Cartões', {idBaralho: baralhoItem.id})}>
        <View style={style.box2}>
          <Image source={require('../icons/bola.png')} style={style.icons} />
          <Text style={style.names}>{baralhoItem.name}</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight 
        style={style.iconLapis} 
        onPress={() => navigation.navigate("Criar um Baralho", {baralhoItem})}>
        <View>
          <Image source={require('../icons/3.png')} />
        </View>
      </TouchableHighlight>

      <TouchableHighlight 
        style={style.iconLixo} 
        onPress={async () => {
          const isDeleted = await deletarBaralho(baralhoItem);
          if(isDeleted){
            navigation.goBack();
          }
          }}>
        <View>
          <Image source={require('../icons/2.png')} />
        </View>
      </TouchableHighlight>
    </View>
  );
}

const style = StyleSheet.create({
  names: {
    fontSize: 36,
    color: '#27ACA7',
    marginLeft: 23,
  },
  box: {
    width: 374,
    height: 126,
    margin: 19,
    backgroundColor: 'white',
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box2: {
    width: 374,
    height: 126,
    margin: 6,
    backgroundColor: 'white',
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    width: 90,
    height: 90,
    marginLeft: 5,
  },
  iconLapis: {
    position: 'absolute',
    right: 10,
    top: 20,
    width: 35,
    height: 35,
  },
  iconLixo: {
    position: 'absolute',
    right: 10,
    top: 75,
    width: 35,
    height: 35,
  },
});

export default connect(null, {deletarBaralho} ) (CollectionList);