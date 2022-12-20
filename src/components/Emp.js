import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Emp = (props) => {

  return (
    <span className = "justify-content-center d-flex m-2">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.data.photo} />
      <Card.Body>
        <Card.Title>{`${props.data.name}`}</Card.Title>
        <Card.Text>
          <span>
          <span>{props.data.role}</span>
          <ul >
            <li>ID: {props.data.id}</li>
            <li>Start Date: {props.data.startDate}</li>
            <li>Department: {props.data.department}</li>
          </ul >

          </span>

        </Card.Text>
        <Button onClick={props.reset} variant="primary">Go Back to list</Button>
      </Card.Body>
    </Card>
    </span>

    
  )
}

export default Emp

