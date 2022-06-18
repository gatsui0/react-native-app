import {SET_FIELD, CLEAR_FIELDS, SET_ALL_FIELDS} from '../actions';

export const INITIAL_STATE = {
  id: null,
  name: '',
  description: '',
  img: '',
};

export default function newDeck(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FIELD:
      const copyState = {...state};
      copyState[action.field] = action.value;
      return copyState;

    case CLEAR_FIELDS:
      return INITIAL_STATE;

    case SET_ALL_FIELDS:
        return action.baralho;

    default:
      return state;
  }
}
