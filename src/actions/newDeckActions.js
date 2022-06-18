
import { auth, database } from "../firebase/config";
import {ref, push, set} from 'firebase/database';


export const SET_FIELD = 'SET_FIELD';
export const CLEAR_FIELDS = 'CLEAR_FIELDS';
export const SET_ALL_FIELDS = 'SET_ALL_FIELDS';

export const setAllFields = baralho => {
  return {
    type: SET_ALL_FIELDS,
    baralho,
  };
};

export const setField = (field, value) => {
  return {
    type: SET_FIELD,
    value: value,
    field: field,
  };
};

export const clearFields = () => {
  return {
    type: CLEAR_FIELDS,
  };
};

export const saveBaralho = (baralho) => dispatch => {
  const {currentUser} = auth;

  if(baralho.id){
    const path = ref(database, 'users/' + currentUser.uid + '/coleçãoBaralho/' + baralho.id);

    set(path, baralho).then(props => {
      const action = clearFields();
      dispatch(action);
    });
  }
  else{
    const path = ref(database, 'users/' + currentUser.uid + '/coleçãoBaralho');

    push(path, baralho).then(props => {
      const action = clearFields();
      dispatch(action);
    });
  }
};
