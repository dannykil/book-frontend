import React, { useEffect } from 'react';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CategoryList from '../../components/category/CategoryList';
import { categoryListAction } from '../../modules/categoryList';
import CategoryHeader from '../../components/category/CategoryHeader';

const CategoryListContainer = () => {
  // const { username } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { categoryList, loading, error } = useSelector(
    ({ categoryList, loading, error }) => ({
      categoryList: categoryList.categories,
      loading: loading['category/LIST_CATEGORY'],
      error: categoryList.error,
    }),
  );

  useEffect(() => {
    const { page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    // dispatch(listCategory({ tag, username, page }));
    dispatch(categoryListAction(page));
  }, [dispatch, location.search]);

  return (
    <>
      <CategoryHeader
        categories={categoryList}
        loading={loading}
        // onCancle={onCancle}
        // onPublish={onPublish}
        error={error}
        isList={true}
        isWrite={false}
        isRead={false}
        isEdit={false}
      />
      <CategoryList categories={categoryList} loading={loading} />
    </>
  );
};

export default CategoryListContainer;
