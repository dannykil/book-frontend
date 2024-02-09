import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Detail from './pages/book/Detail';
import BookList from './pages/book/BookList';
import SaveForm from './pages/book/SaveForm';
import UpdateForm from './pages/book/UpdateForm';
import JoinForm from './pages/user/JoinForm';
import LoginForm from './pages/user/LoginForm';
import About from './pages/user/About';
import Footer from './components/layouts/Footer';
import Header3 from './components/layouts/Header3';
import Home from './components/layouts/Home';
import DataTable from './pages/book/Table';

function App() {
  return (
    <div>
      {/* 로그인이 되면 Header/Footer가 보이도록 세팅 */}
      <Header3 />
      <Container>
        <Routes>
          {/* <Route path="/" exact={true} component={Home} />
          <Route path="/saveForm" exact={true} component={SaveForm} />
          <Route path="/book/:id" exact={true} component={Detail} />
          <Route path="/loginForm" exact={true} component={LoginForm} />
          <Route path="/joinForm" exact={true} component={JoinForm} />
          <Route path="/updateForm/:id" exact={true} component={UpdateForm} /> */}
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/table" exact={true} element={<DataTable />} />
          <Route path="/booklist" exact={true} element={<BookList />} />
          <Route path="/saveForm" exact={true} element={<SaveForm />} />
          <Route path="/book/:id" exact={true} element={<Detail />} />
          <Route path="/loginForm" exact={true} element={<LoginForm />} />
          <Route path="/about" exact={true} element={<About />} />
          <Route path="/joinForm" exact={true} element={<JoinForm />} />
          <Route path="/updateForm/:id" exact={true} element={<UpdateForm />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
