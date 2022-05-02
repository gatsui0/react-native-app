import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image, TouchableHighlight} from 'react-native';
const {colecoes} = require('../../user.json');

export default function CollectionList({navigation}) {
    return(
        colecoes.map( (result, index) =>
            
            <TouchableHighlight key={index} onPress={() => navigation.navigate("Cartões", {indice: index})}>
            <View style={style.box}>
                <Image source={require('../icons/bola.png')} style={style.icons} />
                <Text style={style.names} >{result.nameColecao}</Text>
                <Image source={require('../icons/3.png')} style={style.iconLapis} />
                <Image source={require('../icons/2.png')} style={style.iconLixo} />
            </View>
            </TouchableHighlight>
            
        )
    )
}

const style = StyleSheet.create({
    "names": {
        fontSize: 36,
        color: '#27ACA7',
        marginLeft: 23,
    },
    "box": {
        width: 374,
        height: 126,
        margin: 19,
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
        right: 20,
        top: 20,
    },
    iconLixo: {
        position: 'absolute',
        right: 20,
        top: 80,
    }
});