import React, { useEffect, useState } from 'react';
import CategoryItems from '../../../components/category/CategoryItem';
import Title from '../../../components/layouts/Title';
import CategoryListContainer from '../../../containers/category/CategoryListContainer';

// let url = 'http://localhost:8080';
// let url = 'http://13.124.143.225:8080';

const CategoryList = () => {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   fetch(url + '/api/category', { method: 'GET' })
  //     .then((res) => res.json()) // 응답이 온 데이터를 json object로 변환하겠다
  //     .then((res) => {
  //       console.log(1, res);
  //       setCategories(res);
  //     });
  // }, []);

  return (
    <div>
      <Title title={'Category'} mode={'List'} />
      <CategoryListContainer />
      {/* {categories.map((category) => (
        <CategoryItems key={category.id} category={category} />
      ))} */}
    </div>
  );
};

export default CategoryList;
