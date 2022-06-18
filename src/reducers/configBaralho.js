import {SET_BARALHO} from "../actions";

export default function configBaralho(state = {}, action) {

    switch(action.type){
        case SET_BARALHO:
            return action.baralho;
        default: 
            return state;
    }
}