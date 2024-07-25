import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <Navbar className="custom-header" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ fontWeight: 'bold', color: '#d6bd97', fontFamily: 'Dancing Script' }} className='mx-4'>
            Kawther khlif
          </Navbar.Brand>
          <Navbar.Toggle className='navbar-toggler' aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
                <Nav.Link as={Link} to="/about" className="nav-link-custom">About</Nav.Link>
                <Nav.Link as={Link} to="/projects" className="nav-link-custom">Projects</Nav.Link>
                <Nav.Link as={Link} to="/testimonials" className="nav-link-custom">Testimonials</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
