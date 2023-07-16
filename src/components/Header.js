import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="primary" className="fixed-top" data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Brand onClick={handleShow}>
            <Link className="nav-link">Book</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <Link to="/" className="nav-link" onClick={handleClose}>
                Home
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
            <Link to="/saveForm" className="nav-link" onClick={handleClose}>
              글쓰기
            </Link>
          </Offcanvas.Body>
        </Offcanvas>
        <Link
          to="/loginForm"
          style={{ position: 'absolute', right: 0, marginRight: '30px' }}
        >
          Login
        </Link>
      </Navbar>
    </>
    // <Navbar bg="primary" variant="dark">
    //   <Container>
    //     <Link to="/" className="navbar-brand">
    //       홈
    //     </Link>
    //     <Nav className="me-auto">
    //       <Link to="/joinForm" className="nav-link">
    //         회원가입
    //       </Link>
    //       <Link to="/loginForm" className="nav-link">
    //         로그인
    //       </Link>
    //       <Link to="/saveForm" className="nav-link">
    //         글쓰기
    //       </Link>
    //     </Nav>
    //   </Container>
    // </Navbar>
  );
};

export default Header;
