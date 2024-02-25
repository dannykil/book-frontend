import React from 'react';
import { Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap';

const CategoryInfomation = ({ category, isRead }) => {
  const onChangeCategory = (e) => {
    console.log('Category Info : ' + e.target.value);
    // onChangeField({ key: 'category', value: e.target.value });
  };

  const onChangeNote = (e) => {
    console.log('Note : ' + e.target.value);
    // onChangeField({ key: 'category', value: e.target.value });
  };

  return (
    <Card className="mb-2">
      <Card.Header as="h5">Category Info.</Card.Header>
      <Card.Body>
        <Row className="g-2">
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Category">
              {isRead ? (
                <Form.Control
                  type="input"
                  placeholder="Category"
                  onChange={onChangeCategory}
                  value={category.category}
                  disabled
                />
              ) : (
                <Form.Control
                  type="input"
                  placeholder="Category"
                  onChange={onChangeCategory}
                />
              )}
              {/* <Form.Control
                type="input"
                placeholder="Category"
                onChange={onChangeCategory}
                value={title}
              /> */}
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Note">
              {isRead ? (
                <Form.Control
                  type="input"
                  placeholder="note"
                  onChange={onChangeNote}
                  value={category.note}
                  disabled
                />
              ) : (
                <Form.Control
                  type="input"
                  placeholder="note"
                  onChange={onChangeNote}
                />
              )}
              {/* <Form.Control
                type="input"
                placeholder="note"
                onChange={onChangeNote}
              /> */}
            </FloatingLabel>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CategoryInfomation;
