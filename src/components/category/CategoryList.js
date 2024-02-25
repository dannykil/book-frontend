// import SubInfo from 'components/common/SubInfo';
import React from 'react';
import CategoryItem from './CategoryItem';
// import { Link } from 'react-router-dom';

// const CategoryList = ({ posts, loading, error, showWriteButton }) => {
const CategoryList = ({ categories, loading }) => {
  console.log('categories2 : ' + categories);
  // if (error) {
  //   return <CategoryListBlock>에러가 발생했습니다.</CategoryListBlock>;
  // }

  return (
    <>
      {!loading && categories && (
        <div>
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      )}
    </>
  );
};

export default CategoryList;
