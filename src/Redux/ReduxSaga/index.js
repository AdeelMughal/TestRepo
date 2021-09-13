import {put, call, fork, takeLatest} from 'redux-saga/effects';
import {GetDataAPI} from '../../services/api/data.api';
import {FetchingData, FetchingDataSuccess} from '../Actions';
import axios from 'axios';
// import User from './User';

// function* fetchData(action) {
//   try {
//     const allData = yield call(GetDataAPI, action.payload.amount);
//     // console.log('Data in saga: ', allData);
//     yield put({type: 'FETCHING_DATA', data: allData});
//   } catch (e) {
//     yield put({type: 'FETCHING_DATA', message: e.message});
//   }
// }

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* rootSaga() {
//   yield takeEvery('FETCHING_DATA', fetchData);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* rootSaga() {
//   yield takeLatest('FETCHING_DATA', fetchData);
// }
// const getResponse = res => {
//   console.log('ressssss::::', res);
// };

// export function* fetchData() {
//   yield call(GetDataAPI());
// }

export function* rootSaga() {
  try {
    const {data} = yield call(
      axios.get,
      'https://randomuser.me/api?results=100',
    );
    console.log('data got ::::', data.results);
    yield put(FetchingData(data.results));
  } catch (e) {
    console.log(e.message);
  }
}

// export {rootSaga};
export default rootSaga;
