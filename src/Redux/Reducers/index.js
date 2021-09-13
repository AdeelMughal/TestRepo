import {dataReducer} from './data.reducers';
import {combineReducers} from 'redux';

export default combineReducers({
  data: dataReducer,
});
