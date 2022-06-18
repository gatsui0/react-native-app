import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';
import {useState, useEffect} from 'react';

export default function Game({navigation, route}) {
  const {cartoes} = route.params;

  const [virar, setVirar] = useState(false);
  const [Prox, setProx] = useState(false);
  const [Indice, setIndice] = useState(0);
  const [copia2, setCopia2] = useState([{}]);
  const [Finalizar, setFinalizar] = useState(false);

  useEffect(() => {
    var copia3 = cartoes.slice();

    for (let i = copia3.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [copia3[i], copia3[j]] = [copia3[j], copia3[i]];
    }

    setCopia2(copia3);
  }, []);

  function ButtomVirarOrProximo() {
    if (copia2.length == Indice + 1 && Finalizar == true) {
      return (
        <TouchableHighlight
          style={style.BottomFinalizar}
          onPress={() => {
            setFinalizar(false);
            navigation.pop();
          }}>
          <Text style={{color: 'white'}}>FINALIZAR</Text>
        </TouchableHighlight>
      );
    }

    if (Prox) {
      return (
        <TouchableHighlight
          style={style.BottomVirar}
          onPress={props => {
            setProx(false);
            setIndice(Indice + 1);
            setFinalizar(false);
          }}>
          <Text style={{color: 'white'}}>PRÓXIMO</Text>
        </TouchableHighlight>
      );
    }

    return (
      <TouchableHighlight
        style={style.BottomVirar}
        onPress={props => {
          setProx(true);
          setFinalizar(true);
        }}>
        <Text style={{color: 'white'}}>VIRAR</Text>
      </TouchableHighlight>
    );
  }

  function Answer() {
    if (Prox) {
      return (
        <View>
          <Text style={{fontSize: 25}}>{copia2[Indice].verso}</Text>
        </View>
      );
    }
    return null;
  }

  return (
    <View style={style.container}>
      <Text style={style.Cards} color="white">
        Cartão {Indice + 1} / {copia2.length}
      </Text>

      <View style={style.box}>
        <Text style={style.word}>{copia2[Indice].frente}</Text>
        <Answer />
      </View>

      <ButtomVirarOrProximo />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  box: {
    height: 401,
    width: 325,
    backgroundColor: 'white',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  word: {
    fontSize: 40,
  },
  Cards: {
    marginTop: 35,
    marginHorizontal: 43,
    marginBottom: 40,
    color: 'white',
    fontSize: 18,
  },
  BottomVirar: {
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
  },
  BottomFinalizar: {
    backgroundColor: 'green',
    fontWeight: 'bold',
    padding: 10,
    margin: 42,
    borderWidth: 1,
    borderColor: '#6A61A1',
    width: 328,
    height: 46,
    borderRadius: 4,
    alignItems: 'center',
  },
});
