import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const URL = "https://reqres.in/api/users"



class Ui extends Component{
  constructor(props){
    super(props);
    this.state = {
      userslist:[]
    }
  }
  componentDidMount = () => {
    axios.get(URL)
    .then((response) => {
      
      this.setState({
        userslist: (response.data.data)
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }
    
    render() {
      const {userslist} = this.state;
        return (
          <div>
            <h1>Login form</h1>
          <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" required />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form>  
  <br></br>

          <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>email</th>
      <th>first_name</th>
      <th>last_name</th>
      <th>avatar</th>
    </tr>
  </thead>
{
  userslist.map(data =>{
    return(
      
      <tr>
      <td>{data.id}</td>
      <td>{data.email}</td>
      <td>{data.first_name}</td>
      <td>{data.last_name}</td>
      <td ><a href="#">{data.avatar}</a></td>
    </tr>
  
    )
  })
}
</Table>
   
</div>  
        )
    };
}

export default Ui;