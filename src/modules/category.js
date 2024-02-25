import * as categoryAPI from '../libs/api/category';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../libs/createRequestSaga';
import { createAction, handleActions } from 'redux-actions';

const [LIST_CATEGORY, LIST_CATEGORY_SUCCESS, LIST_CATEGORY_FAILURE] =
  createRequestActionTypes('category/LIST_CATEGORY'); // createRequestActionTypes의 역할은?

export const listCategory = createAction(
  LIST_CATEGORY,
  // ({ tag, username, page }) => ({ tag, username, page }),
  // ({ page }) => ({ page }),
);

const listCategorySaga = createRequestSaga(
  LIST_CATEGORY,
  categoryAPI.listCategory,
);
export function* categorySaga() {
  yield takeLatest(LIST_CATEGORY, listCategorySaga);
}

const initialState = {
  categories: null,
  error: null,
  lastPage: 1,
};

const categories = handleActions(
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

export default categories;
