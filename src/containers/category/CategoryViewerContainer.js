import CategoryActionButtons from '../../components/category/CategoryActionButtons';
import { removePost } from 'lib/api/posts';
import { readPost, unloadPost } from 'modules/post';
import { setOriginalPost } from 'modules/write';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const CategoryViewerContainer = () => {
  // const { categoryId } = useParams();
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { post, error, loading, user } = useSelector(
  //   ({ post, loading, user }) => ({
  //     post: post.post,
  //     error: post.error,
  //     loading: loading['category/READ_Category'],
  //     user: user.user,
  //   }),
  // );

  // useEffect(() => {
  //   dispatch(readCategory(categoryId));
  //   return () => {
  //     dispatch(unloadPost());
  //   };
  // }, [dispatch, categoryId]);

  const onEnroll = () => {
    console.log('Enroll');
    dispatch(writeCategory(post));
    navigate('/settings/category/enroll');
  };

  // const onEdit = () => {
  //   console.log('Edit');
  //   dispatch(readCategory(post));
  //   navigate('/settings/category/edit');
  // };

  const onCancel = async () => {
    console.log('Cancel');
    try {
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  // const onDelete = async () => {
  //   console.log('Delete');
  //   try {
  //     await deleteCategory(categoryId);
  //     navigate('/');
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const ownPost = (user && user._id) === (post && post.user._id);

  return (
    // <CategoryViewer
    //   post={post}
    //   loading={loading}
    //   error={error}
    //   actionButtons={
    //     ownPost && (
    //       <CategoryActionButtons
    //         onEnroll={onEnroll}
    //         onEdit={onEdit}
    //         onCancel={onCancel}
    //         onDelete={onDelete}
    //       />
    //     )
    //   }
    // />
    <CategoryActionButtons
      onEnroll={onEnroll}
      onEdit={onEdit}
      onCancel={onCancel}
      onDelete={onDelete}
    />
  );
};

export default CategoryViewerContainer;
