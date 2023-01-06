import * as types from '../../types';

const initialState = {
  iState: 1,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case types.STATE_UPDATE: {
      return {
        ...state,
        selectValue: action.payload
      }
    }

    case types.CONTRY_UPDATE: {
      return {
        ...state,
        selectValue: action.payload
      }
    }

    default: {
      return state;
    }
  }
}