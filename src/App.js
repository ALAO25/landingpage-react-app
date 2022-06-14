import './App.css';
import { Navbar, Container, Nav, NavDropdown, Row, Col, Image, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <header>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Creative Style Design</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
      </header>
    <main>
    <Container>
    <Row className="px-4 my-5 ">
       <Col sm={7}> <Image src="https://picsum.photos/id/0/5616/3744/"
       fluid
       rounded
       className="" 
       /></Col>
         <Col sm={5}>
          <h1 class="font-weigh-light">Media Agency</h1> 
          <p class="mt-4">
          Subscribe to our YouTube channel and watch more videos on website development, Digital Marketing, 
          and Graphics Designing for more easy tutorials and updates.
          </p>
          <Button variant="outline-secondary">Call to action</Button> 
         </Col>
    </Row>
  <Row>
    <Card className="text-center bg secondary text-whhite my-5 py4">
  <Card.Body>This is some text within a card body.</Card.Body>
</Card>
</Row>
<Row>
  <Col>
  <Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH2KD27bnm5lGntF11yD9kg-hNFoVYKZ1SM5lBryWMuBw-wPV_fJLgxg6-sFtZXtBlSqw&usqp=CAU" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  </Col>
  <Col>
  <Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src="https://agexplorer.ffa.org/sites/default/files/styles/focus_image/public/career_img/graphic%20designer%20-%20edited.jpg?itok=eK-mPUND" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  </Col>
  <Col>
  <Card style={{ width: '22em' }}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5QQu1UrEntODjLQi-HdGVsvHYPOgheoBU81e4zvce6h2T0fFDXkcE7tqJgpIM6s5nSIk&usqp=CAU" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  </Col>
  </Row>
</Container>
    </main>
    </div>
  );
}

export default App;
