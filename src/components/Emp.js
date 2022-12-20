import React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const Emp = (props) => {

  return (
    <div className = "justify-content-center d-flex m-2">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.data.photo} />
      <Card.Body>
        <Card.Title className=''>{`${props.data.name}`}</Card.Title>
        <Card.Text>
          <h3>{props.data.role}</h3>
          <ul className='text-left text-justify'>
            <li>ID: {props.data.id}</li>
            <li>Start Date: {props.data.startDate}</li>
            <li>Department: {props.data.department}</li>
          </ul>

        </Card.Text>
        <Button onClick={props.reset} variant="primary">Go Back to list</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Emp

