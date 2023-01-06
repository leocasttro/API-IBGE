import * as types from '../../types';

export const stateUpdate = (newState) => {
  return {
    type: types.STATE_UPDATE,
    payload: newState
  };
}

export const contryUpdate = (newState) => {
  return {
    type: types.CONTRY_UPDATE,
    payload: newState
  };
}
