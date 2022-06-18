import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {deletarCartoes} from '../actions/cartoesActions';

const forUpper = string => {
  return string.toUpperCase();
};

function CollectionCard({
  route,
  navigation,
  cartaoItem,
  deletarCartoes,
  idBaralho,
}) {
  return (
    <View key={cartaoItem.id} style={style.bloco}>
      <View>
        <Text style={style.txtPlace}>Frente</Text>
        <Text style={style.txt}> {cartaoItem.frente} </Text>
      </View>

      <View>
        <Text style={style.txtPlace}>Verso</Text>
        <Text style={style.txt}> {cartaoItem.verso} </Text>
      </View>

      <TouchableHighlight
        style={style.edit}
        onPress={() => navigation.navigate('Criar um flashCard', {cartaoItem: cartaoItem, id: idBaralho})}>
        <View>
          <Image source={require('../icons/3.png')} />
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        style={style.lixo}
        onPress={async () => {
          const isDeleted = await deletarCartoes(idBaralho, cartaoItem.id);
          if (isDeleted) {
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

  imgconfig: {
    marginLeft: 120,
  },
  bloco: {
    backgroundColor: 'white',
    borderRadius: 13,
    margin: 10,
    flexDirection: 'row',
    padding: 17,
    alignItems: 'center',
  },
  txtPlace: {
    paddingLeft: 2,
    fontSize: 12,
  },
  viewflex: {
    flex: 1,
  },
  txt: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  edit: {
    position: 'absolute',
    right: 50,
    top: 25,
  },
  lixo: {
    position: 'absolute',
    right: 15,
    top: 25,
  },
});

export default connect(null, {deletarCartoes})(CollectionCard);
