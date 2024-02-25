import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import categories, { categorySaga } from './category';

const rootReducer = combineReducers({
  categories,
  loading,
});

// const rootReducer = combineReducers({
//   auth,
//   loading,
//   user,
//   write,
//   post,
//   posts,
// });

// 리듀서에 사가를 등록한다는 것은 무슨 의미?
export function* rootSaga() {
  // yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
  yield all([categorySaga()]);
}

export default rootReducer;
