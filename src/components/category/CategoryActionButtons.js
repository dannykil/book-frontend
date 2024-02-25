import React from 'react';
import { Button } from 'react-bootstrap';

// const WriteActionButtonsBlock = styled.div`
//   margin-top: 1rem;
//   margin-bottom: 3rem;
//   button + button {
//     margin-left: 0.5rem;
//   }
// `;

// TagBox에서 사용하는 버튼과 일치하는 높이로 설정한 후 서로 간의 여백 지정
// const StyledButton = styled(Button)`
//   height: 2.125rem;
//   & + & {
//     margin-left: 0.5rem;
//   }
// `;

const CategoryActionButtons = ({
  onEnroll,
  onEdit,
  onCancle,
  onDelete,
  isMode,
}) => {
  return (
    <CategoryActionButtonsBlock>
      <Button onClick={onEnroll}>{isMode ? 'onEnroll' : 'Edit'}</Button>
      {/* <Button onClick={onEdit}>Edit</Button> */}
      <Button onClick={onCancle}>Cancel</Button>
      <Button onClick={onDelete}>Delete</Button>
    </CategoryActionButtonsBlock>
  );
};

export default CategoryActionButtons;
