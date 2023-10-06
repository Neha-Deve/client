import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useState} from 'react';
import axios from 'axios';



function RegistrationForm() {
 
  const [store,putinstore]=useState({
    name:"",
    username :"",
    email:"",
    password:"",
    phone:""

  })

  const handleChange=(e)=>{
    const fieldName=e.target.name
    const value = e.target.value
   
    putinstore((preState)=>{
      return {
      
        ...preState,
        [fieldName]:value
      }
    })
   
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
   axios.put('http://localhost:5000/',store)
  }
  return (
    <center>
    <Form>
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="name" value={store.name} onChange={handleChange} name='name'/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail" >
        <Form.Label column sm={2}>
          username
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="username" value={store.username} onChange={handleChange} name='username' />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" value={store.email} onChange={handleChange} name='email'/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" value={store.password} onChange={handleChange} name='password'/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          phone
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="number" placeholder="phone" value={store.phone} onChange={handleChange} name='phone'/>
        </Col>
      </Form.Group>
     
      
    </Form>
    <Button type='submit' onClick={handleSubmit} variant="outline-primary">Register</Button>
      
    </center>
  );
}

export default RegistrationForm;