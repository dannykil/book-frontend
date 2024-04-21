import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoryHeader = ({
  categoryId,
  category,
  loading,
  onEdit,
  onPublish,
  onCancle,
  onDelete,
  error,
  isList,
  isWrite,
  isRead,
  isEdit,
}) => {
  // 에러 발생 시
  //   if (error) {
  //     if (error.response && error.response.status === 404) {
  //       return (
  //         <CategoryViewerBlock>존재하지 않는 포스트입니다.</CategoryViewerBlock>
  //       );
  //     }
  //     return <CategoryViewerBlock>오류 발생!</CategoryViewerBlock>;
  //   }

  // 로딩 중이거나 아직 포스트 데이터가 없을 때
  if (loading) {
    return null;
  }

  var title = null;
  var component = null;
  if (isList) {
    title = 'List';
    component = (
      <Link
        to={'/settings/category/write'}
        className="btn btn-primary"
        variant="primary"
      >
        Write
      </Link>
    );
  } else if (isWrite) {
    title = 'Write';
    component = <Button onClick={onPublish}>Save</Button>;
  } else if (isRead) {
    title = 'Read';
    component = (
      <Link
        to={'/settings/category/edit'}
        className="btn btn-primary"
        variant="primary"
        onClick={onEdit}
      >
        Edit
      </Link>
    );
  } else if (isEdit) {
    title = 'Edit';
    component = <Button onClick={onPublish}>Save</Button>;
  } else {
    title = 'Error';
    component = null;
  }

  return (
    <>
      <Card className="mb-2">
        <Card.Header as="h3">Category {title}</Card.Header>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          {component} {isList ? '' : <Button onClick={onCancle}>Cancel</Button>}{' '}
          {isRead ? <Button onClick={onDelete}>Delete</Button> : ''}
        </Card.Body>
      </Card>
    </>
  );
};

export default CategoryHeader;
