import {SET_CARTOES} from "../actions/cartoesActions.js";

export default function configCartoes(state = {}, action) {

    switch(action.type){
        case SET_CARTOES:
            return action.cartoes;
        default: 
            return state;
    }
}