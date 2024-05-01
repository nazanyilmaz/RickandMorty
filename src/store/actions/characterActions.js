import {CHARACTERS_URL} from '../../service/urls';
import {getRequest} from '../../service/verbs';
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

export const getCharacterList = params => {
  return async dispatch => {
    dispatch({type: PENDING_CHARACTERS});
    try {
      const response = await getRequest(CHARACTERS_URL, params);
      //console.log(response.data);
      dispatch({
        type: FETCH_CHARACTERS,
        payload: response.data.results,
      });
    } catch (error) {
      dispatch({type: CHARACTERS_REJECT, error: error});
    }
  };
};

export const loadMoreCharacter = params => {
  return async dispatch => {
    try {
      const response = await getRequest(CHARACTERS_URL, params);
      //console.log(response.data);
      dispatch({
        type: LOAD_MORE_DATA,
        payload: response.data.results,
      });
    } catch (error) {
      dispatch({type: CHARACTERS_REJECT, error: error});
    }
  };
};

export const getSingleCharacter = characterID => {
  const url = `${CHARACTERS_URL}/${characterID}`;
  return async dispatch => {
    dispatch({type: PENDING_SINGLECHARACTER});
    try {
      const response = await getRequest(url);
      //console.log(response.data);
      dispatch({
        type: FETCH_SINGLECHARACTER,
        payload: response.data,
      });
    } catch (error) {
      dispatch({type: CHARACTERS_SINGLEREJECT, error: error});
    }
  };
};

export const resetData = () => {
  return async dispatch => {
    dispatch({type: RESET_DATA});
  };
};

export const changeParams = params => {
  return async dispatch => {
    dispatch({type: CHANGE_PARAMS, params: params});
  };
};
