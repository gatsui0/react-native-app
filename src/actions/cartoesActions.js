

import { ref, onValue, remove } from "firebase/database";
import { auth, database } from "../firebase/config";
import {Alert} from 'react-native';



export const SET_CARTOES = "SET_CARTOES";

export const setCartoes = (cartoes) => ({
    type: SET_CARTOES,
    cartoes
})

export const searchCartoes = (idBaralho) => dispatch => {

    const { currentUser} = auth;

    const path = ref(database,'users/' + currentUser.uid + '/coleçãoBaralho/' + idBaralho + '/coleçãoFlashCards');
    onValue(path, snapshot => {
        const cartoes = snapshot.val();
        const action = setCartoes(cartoes);
        dispatch(action);
    })
}

export const deletarCartoes =  (baralhoId, flashCardId) => {

    return new Promise((resolve, reject) => {
        Alert.alert("","Você tem certezas que deseja excluir esse baralho?", [{
            text: 'Não',
            onPress: () =>{
                resolve(false);
                
            }},{
            text: 'Sim',
            onPress: async () =>{
                const {currentUser} = auth;
                try{
                    const path =  ref(database, 'users/' + currentUser.uid + 
                                      '/coleçãoBaralho/' + baralhoId + 
                                      '/coleçãoFlashCards/' + flashCardId);
                    remove(path);
                    resolve(true);
                }catch(e){
                    console.log(e.message);
                    reject(e);
                }
            }
        }
        
        ], {cancelable:false})
    })
}


