import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">


      <h1>Create Account</h1>
      <Form>

      <Form.Group controlId="formGridAddress1">
    <Form.Label>FirstName</Form.Label>
    <Form.Control placeholder="FirstName" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>LastName</Form.Label>
    <Form.Control placeholder="LastName" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

 
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Button type="submit">Submit</Button>
  </Form.Row>

</Form>
      </div>
   
  );
}

export default App;
