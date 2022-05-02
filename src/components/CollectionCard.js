import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';

const {colecoes} = require('../../user.json');


const forUpper = string => {
    return string.toUpperCase()
}

export default function CollectionCard ({route, navigation}){
    console.log(route.params.indice);
    const {listaCards} = colecoes[route.params.indice];
    return(
        listaCards.map( (result, index) =>
            <View key={index} style={style.bloco}>

                <View>
                    <Text style={style.txtPlace}>Frente</Text>
                    <Text key={result.frente} style={style.txt} > {result.frente} </Text>
                </View>

                <View>
                    <Text style={style.txtPlace}>Verso</Text>
                    <Text key={result.verso} style={style.txt} > {result.verso} </Text>
                </View>

                <Image source={require('../icons/3.png')} style={style.edit} />
                <Image source={require('../icons/2.png')} style={style.lixo}/>

            </View>
    )
    )
}

const style = StyleSheet.create({
    "imgconfig": {
        marginLeft: 120,
    },
    "bloco":{
        backgroundColor: 'white',
        borderRadius: 13,
        margin: 10,
        flexDirection: 'row',
        padding: 17,
        alignItems: 'center',
    },
    "txtPlace":{
        paddingLeft: 2,
        fontSize: 12,
    },
    "viewflex":{
        flex: 1,
    },
    "txt": {
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    "edit":{
        position: 'absolute',
        right: 50,
        top: 25,
    },
    lixo: {
        position: 'absolute',
        right: 15,
        top: 27,
    }
})