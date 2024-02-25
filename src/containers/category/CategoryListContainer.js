import React, { useEffect } from 'react';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
// import { listPosts } from 'modules/posts';
import { useLocation } from 'react-router-dom';
import CategoryList from '../../components/category/CategoryList';
import { listCategory } from '../../modules/category';
// import { listCategory } from '../../libs/api/category';

const CategoryListContainer = () => {
  // const { username } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { categories, loading } = useSelector(({ categories, loading }) => ({
    categories: categories.categories,
    loading: loading['category/LIST_CATEGORY'],
  }));
  // const { posts, error, loading, user } = useSelector(
  // ({ posts, loading, user }) => ({
  //   posts: posts.posts,
  //   error: posts.error,
  //   loading: loading['posts/LIST_POSTS'],
  //   user: user.user,
  // }),
  // );

  useEffect(() => {
    const { page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    // dispatch(listCategory({ tag, username, page }));
    dispatch(listCategory(page));
  }, [dispatch, location.search]);

  return (
    // <CategoryList
    //   loading={loading}
    //   error={error}
    //   posts={posts}
    //   showWriteButton={user}
    // />
    <CategoryList categories={categories} loading={loading} />
  );
};

export default CategoryListContainer;
