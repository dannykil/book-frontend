import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoryItem = (props) => {
  const { id, category } = props.category;
  // console.log(category);

  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Link
          to={'/settings/category/' + id}
          className="btn btn-primary"
          variant="primary"
          category={category}
        >
          Read Details
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CategoryItem;
