import {
  SET_FIELD_FLASHCARD,
  CLEAR_FIELDS_FLASHCARD,
  SET_ALL_FIELDS_FLASHCARD,
} from '../actions/newFlashCardActions';

export const INITIAL_STATES = {
  id: null,
  frente: '',
  verso: '',
};

export default function newFlashCard(state = INITIAL_STATES, action) {
  switch (action.type) {
    case SET_FIELD_FLASHCARD:
      const copyState = {...state};
      copyState[action.field] = action.value;
      return copyState;

    case CLEAR_FIELDS_FLASHCARD:
      return INITIAL_STATES;

    case SET_ALL_FIELDS_FLASHCARD:
      return action.flashCard;

    default:
      return state;
  }
}
