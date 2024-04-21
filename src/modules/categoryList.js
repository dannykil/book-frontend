import * as categoryAPI from '../libs/api/category';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../libs/createRequestSaga';
import { createAction, handleActions } from 'redux-actions';
import debug from 'debug';
const authLogger = debug('auth');

// 1. Category 액션타입 정의
const [LIST_CATEGORY, LIST_CATEGORY_SUCCESS, LIST_CATEGORY_FAILURE] =
  createRequestActionTypes('category/LIST_CATEGORY'); // createRequestActionTypes의 역할은?

// 2. 액션함수 생성
export const categoryListAction = createAction(
  LIST_CATEGORY,
  // ({ tag, username, page }) => ({ tag, username, page }),
  // ({ page }) => ({ page }),
);

const listCategorySaga = createRequestSaga(
  LIST_CATEGORY,
  categoryAPI.listCategory,
);

export function* categoryListSaga() {
  authLogger('categorySaga Start');
  yield takeLatest(LIST_CATEGORY, listCategorySaga);
}

// 3. 초기값 설정
const initialState = {
  categories: null,
  error: null,
  originalCategoryId: null,
  lastPage: 1,
};

// 4.
const categoryList = handleActions(
  {
    // payload를 중괄호없이 선언하면?
    [LIST_CATEGORY_SUCCESS]: (
      state,
      { payload: categories, meta: response },
    ) => ({
      ...state,
      categories,
      lastPage: parseInt(response.headers['last-page'], 10),
    }),
    [LIST_CATEGORY_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default categoryList;
