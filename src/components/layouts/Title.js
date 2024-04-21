import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Title = ({ title, mode }) => {
  console.log('title : ' + title);
  console.log('mode : ' + mode);

  return (
    <div>
      <Card className="mb-2">
        <Card.Header as="h3">Category List</Card.Header>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Link
            to={'/settings/category/enroll'}
            className="btn btn-primary"
            variant="primary"
          >
            Enroll
          </Link>{' '}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Title;
