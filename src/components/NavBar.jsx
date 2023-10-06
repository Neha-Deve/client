


import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

const NavBar= ()=> {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/users">All USERS</Navbar.Brand>
          
        </Container>
      </Navbar>
     
     
    </>
  );
}

export default NavBar;