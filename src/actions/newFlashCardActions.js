
import { auth, database } from "../firebase/config";
import {ref, push, set} from 'firebase/database';


export const SET_FIELD_FLASHCARD = 'SET_FIELD_FLASHCARD';
export const CLEAR_FIELDS_FLASHCARD = 'CLEAR_FIELDS_FLASHCARD';
export const SET_ALL_FIELDS_FLASHCARD = 'SET_ALL_FIELDS_FLASHCARD';

export const setAllFieldsFlashCard = flashCard => {
  return {
    type: SET_ALL_FIELDS_FLASHCARD,
    flashCard: flashCard,
  };
};

export const setFieldFlashCard = (field, value) => {
  return {
    type: SET_FIELD_FLASHCARD,
    value: value,
    field: field,
  };
};

export const clearFieldsFlashCard = () => {
  return {
    type: CLEAR_FIELDS_FLASHCARD
  };
};

export const saveFlashCard = (flashCard, id) => dispatch => {
  const {currentUser} = auth;

  if(flashCard.id){
    console.log('entrou');
    console.log(flashCard);
    console.log(id)
    const path = ref(database, 'users/' + currentUser.uid + '/coleçãoBaralho/' + id + '/coleçãoFlashCards/' + flashCard.id + '/');

    set(path, flashCard).then(props => {
      const action = clearFieldsFlashCard();
      dispatch(action);
    });
  }
  else{
    console.log('entrou');
    console.log(flashCard);
    console.log(id)
    const path = ref(database, 'users/' + currentUser.uid + '/coleçãoBaralho/' + id + '/coleçãoFlashCards/');
    push(path, flashCard).then(props => {
      const action = clearFieldsFlashCard();
      dispatch(action);
    });
  }
};
