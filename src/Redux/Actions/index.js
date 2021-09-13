import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from '../constants';

export const FetchingData = data => {
  return {type: FETCHING_DATA_SUCCESS, data};
};

export const FetchingDataSuccess = data => {
  return {type: FETCHING_DATA_SUCCESS, data};
};
