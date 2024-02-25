import React from 'react';
import CategoryDetailInformation from '../../../components/category/CategoryDetailInformation';
import CategoryInfomation from '../../../components/category/CategoryInfomation';
import Title from '../../../components/layouts/Title';

const CategoryEnroll = () => {
  return (
    <div>
      <Title title={'Category'} mode={'Enroll'} />
      <CategoryInfomation />
      <CategoryDetailInformation />
    </div>
  );
};

export default CategoryEnroll;
