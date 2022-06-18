import React, { useEffect } from 'react';
import {View, StyleSheet, ScrollView, Image, FlatList} from 'react-native';
import CollectionList from "../components/CollectionList";
import { TouchableHighlight } from 'react-native-gesture-handler';

import {searchBaralho} from "../actions/";
import {connect} from "react-redux";


function Main ({navigation, baralho, searchBaralho}){

  useEffect(() => {
    searchBaralho();
  }, []);

    
  return(
    <View style={style.view}>
      <ScrollView>
          <FlatList data={baralho} renderItem={({item, index}) => {
            return(

              <CollectionList navigation={navigation} baralhoItem={item} indexItem={index} />   
            )
          }}
          keyExtractor={item => item.id} />
      </ScrollView>

          <View style={style.bottom} >
                  <TouchableHighlight onPress={() => navigation.navigate("Criar um Baralho")}> 
                    <Image style={style.img}  source={require('../icons/bottom2.png')} />
                  </TouchableHighlight>
                  
          </View>
    </View>
  );

}


const style = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#332E56'
        
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
      }
});
const mapStateToProps = state => {
 

  const {baralho} = state; 
  if (baralho == null) return null;
  const key = Object.keys(baralho);

  

  const baralhoWithId = key.map(key => {
    return {...baralho[key], id: key}
  });

  return{baralho: baralhoWithId};

}

export default connect(mapStateToProps, {searchBaralho})(Main);


