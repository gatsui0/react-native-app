

import { ref, onValue, remove } from "firebase/database";
import { auth, database } from "../firebase/config";
import {Alert} from 'react-native';



export const SET_BARALHO = "SET_BARALHO";

export const setBaralho = (baralho) => ({
    type: SET_BARALHO,
    baralho
})

export const searchBaralho = () => dispatch => {

    const { currentUser} = auth;

    const path = ref(database,'users/' + currentUser.uid + '/coleçãoBaralho');
    onValue(path, snapshot => {
        const baralho = snapshot.val();
        const action = setBaralho(baralho);
        dispatch(action);
    })
}

export const deletarBaralho =  baralho => {

    return new Promise((resolve, reject) => {
        Alert.alert("","Você tem certezas que deseja excluir essa coleção?", [{
            text: 'Não',
            onPress: () =>{
                resolve(false);
                
            }},{
            text: 'Sim',
            onPress: async () =>{
                const {currentUser} = auth;
                try{
                    const path =  ref(database, 'users/' + currentUser.uid + '/coleçãoBaralho/' + baralho.id);
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