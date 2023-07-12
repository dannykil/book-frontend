import React, { useEffect, useState } from 'react';
import BookItem from '../../components/BookItem';

// let url = 'http://localhost:8080';
let url = 'http://13.124.143.225:8080';

const Home = () => {
  const [books, setBooks] = useState([]);

  // 함수 실행 시 최초 한 번 실행되는 것 + 상태값이 변경될 때마다 실행
  useEffect(() => {
    // 비동기 함수
    // 왜 then이 2개인가?
    // 첫번째 인자에는 빈배열을 반환(오래걸릴 수 있으니-promise라고 한다), 그릐고 두번째에 데이터를 전달한다.
    fetch(url + '/book', { method: 'GET' })
      .then((res) => res.json()) // 응답이 온 데이터를 json object로 변환하겠다
      .then((res) => {
        console.log(1, res);
        setBooks(res);
      });
  }, []); // 마지막에 빈배열을 넣어야하며([]) books를 넣는 경우 계속 상태가 변하기 때문에 무한루프를 돌게된다.
  // CORS 오류가 발생하는데 이것은 외부에서 자바스크립트 요청이 들어오는 것을 막는 것이다.

  // useEffect(() => {
  //   effect;
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);

  return (
    <div>
      <h1>책 리스트 보기-webhook2</h1>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Home;
