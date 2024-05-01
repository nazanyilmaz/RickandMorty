import {
  CHARACTERS_REJECT,
  FETCH_CHARACTERS,
  PENDING_CHARACTERS,
  FETCH_SINGLECHARACTER,
  PENDING_SINGLECHARACTER,
  CHARACTERS_SINGLEREJECT,
  RESET_DATA,
  CHANGE_PARAMS,
  LOAD_MORE_DATA,
} from '../types/characterTypes';

const initialState = {
  characterList: [],
  singleCharacter: {},
  pendingSingleCharacter: true,
  pending: false,
  errorSingleCharacter: null,
  error: null,
  params: {
    page: 1,
    status: null,
    gender: null,
    name: null,
  },
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characterList: action.payload,
        pending: false,
      };

    case LOAD_MORE_DATA:
      return {
        ...state,
        characterList: [...state.characterList, ...action.payload],
      };

    case PENDING_CHARACTERS:
      return {
        ...state,
        pending: true,
      };
    case CHARACTERS_REJECT:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    case FETCH_SINGLECHARACTER:
      return {
        ...state,
        singleCharacter: action.payload,
        pendingSingleCharacter: false,
      };
    case PENDING_SINGLECHARACTER:
      return {
        ...state,
        pendingSingleCharacter: true,
      };
    case CHARACTERS_SINGLEREJECT:
      return {
        ...state,
        pendingSingleCharacter: false,
        errorSingleCharacter: action.error,
      };
    case RESET_DATA:
      return {
        ...state,
        pendingSingleCharacter: false,
        errorSingleCharacter: null,
        singleCharacter: {},
      };
    case CHANGE_PARAMS:
      return {
        ...state,
        params: {...state.params, ...action.params},
      };

    default:
      return state;
  }
};

export default characterReducer;
