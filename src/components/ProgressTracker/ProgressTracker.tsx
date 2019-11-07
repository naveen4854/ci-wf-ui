import React, { useState } from 'react';
import "./ProgressTracker.scss";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

const stateValues = ["success", "warning", "danger"];

const onboarding = [{
  id: 11,
  name: "Commissioned",
  stage: "success"
}];
const programming = [{
  id: 22,
  name: "STG Programming Done",
  stage: "success"
},
{
  id: 23,
  name: "ConformIT Programming Done",
  stage: "success"
}
];
const collection = [{
  id: 31,
  name: "STG Programming Done",
  stage: "success"
},
{
  id: 32,
  name: "ConformIT Collection Delayed",
  stage: "warning"
}
];
const crdc = [{
  id: 31,
  name: "Not Stasted",
  stage: "success"
}];
const delivery = [
  {
    id: 32,
    name: "NA",
    stage: "success"
  }
];

const stageElements = (data: any[]) => {
  return data.map(row => {
    return <Card bg={row.stage} text="white">
      <Card.Body>
        <Card.Text>{row.name}</Card.Text>
      </Card.Body>
    </Card>
  });
}

const ProgressTracker: React.FC = (props: any) => {
  console.log(props, 'iiii');
  return (
    <div className="progress-card-deck">
      <div className="row" style={{display:'flex', justifyContent:'space-between', margin:'auto' }}>
      <h4>Project {props.location.state.id} Status Tracker</h4>
      <Link to={{
        pathname: '/dashboard',
      }}>Click here to go Back</Link> 
      </div>
      <CardGroup>
        <Card className="progress-card">
          <Card.Header className="progress-card-header">Project onboarding</Card.Header>
          <Card.Body>
            {stageElements(onboarding)}
          </Card.Body>
        </Card>
        <Card className="progress-card">
          <Card.Header className="progress-card-header">Programming</Card.Header>
          <Card.Body>
            {stageElements(programming)}
          </Card.Body>
        </Card>
        <Card className="progress-card">
          <Card.Header className="progress-card-header">Collection</Card.Header>
          <Card.Body>
            {stageElements(collection)}
          </Card.Body>
        </Card>
        <Card className="progress-card">
          <Card.Header className="progress-card-header">CRDC</Card.Header>
          <Card.Body>
            {stageElements(crdc)}
          </Card.Body>
        </Card>
        <Card className="progress-card">
          <Card.Header className="progress-card-header">Delivery</Card.Header>
          <Card.Body>
            {stageElements(delivery)}
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default ProgressTracker;