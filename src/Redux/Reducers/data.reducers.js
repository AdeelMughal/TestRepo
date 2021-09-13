import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from '../constants';

const initialState = {
  data: [],
  isFeching: false,
  error: false,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        // data: [],
        data: action.data,
        isFeching: true,
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFeching: false,
      };

    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFeching: false,
        error: true,
      };
    default:
      return state;
  }
};
