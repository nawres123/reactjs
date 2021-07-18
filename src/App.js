
import { Navbar, Form,Button,Container} from 'react-bootstrap';
import './App.css';
import Logo from "./Logo.jpg"



function App() {
  return (
    <div className="App">
      <>
      <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#home">
      <img
        src={Logo}
        width="30"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Container>
  </Navbar>
      </>
     
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-4" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
      
     
    </div>
  );
}

export default App;
