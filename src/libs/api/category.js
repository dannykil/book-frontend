// import qs from 'qs';
import client from './client';

export const enrollCategory = ({ title, body, tags }) =>
  client.post('/api/category', { title, body, tags });

export const listCategory = (page) => {
  console.log('page : ' + page);
  // console.log('queryString : ' + queryString);
  // const queryString = qs.stringify({
  //   page,
  // });
  return client.get('/api/category');
};
// export const listCategory = ({ page, username, tag }) => {
//   const queryString = qs.stringify({
//     page,
//     username,
//     tag,
//   });
//   return client.get(`/api/category`);
// };

export const readCategory = (id) => client.get(`/api/category/${id}`);

// export const updateCategory = ({ id, title, body, tags }) =>
//   client.patch(`/api/category/${id}`, {
//     title,
//     body,
//     tags,
//   });

// export const deleteCategory = (id) => client.delete(`/api/category/${id}`);
