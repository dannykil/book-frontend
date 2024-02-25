import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryInfomation from '../../../components/category/CategoryInfomation';
import Title from '../../../components/layouts/Title';

let url = 'http://localhost:8080';
// let url = 'http://13.124.143.225:8080';

const CategoryRead = () => {
  const { id } = useParams();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(url + '/api/category/' + id, { method: 'GET' })
      .then((res) => res.json()) // 응답이 온 데이터를 json object로 변환하겠다
      .then((res) => {
        console.log(1, res);
        setCategory(res);
      });
  }, []);

  return (
    <div>
      <Title title={'Category'} mode={'Read'} id={id} />
      <CategoryInfomation isRead={true} category={category} />
    </div>
  );
};

export default CategoryRead;
