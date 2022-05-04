import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <header className="desafio-coleta-header">
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">Desafio Coleta</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
