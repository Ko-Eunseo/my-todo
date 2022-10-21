import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faPenNib,
  faSquareCheck,
} from '@fortawesome/free-solid-svg-icons';

const List = styled.li`
  border-bottom: 3px solid #cb5917;
  display: flex;
  justify-content: space-between;
  padding: 4px;

  div > * {
    padding-right: 8px;

    &:not(span) {
      color: #cb5917;
    }

    &:not(span):hover {
      color: #171e71;
    }
  }

  .isChecked {
    color: #171e71;
  }
`;

// eslint-disable-next-line react/prop-types
const TodoItem = ({ id, done, text }) => {
  const [isChecked, setIsChecked] = useState(done);
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleDoneClick = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'Application/json' },
      body: JSON.stringify({ done: isChecked }),
    })
      .then(() => {
        console.log(isChecked);
      })
      .catch((error) => console.log(error));
  }, [isChecked]);

  const handleDeleteBtn = () => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'DELETE',
    })
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  const handleEditBtn = () => {
    setIsEdit(!isEdit);
  };

  useEffect(() => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'Application/json' },
      body: JSON.stringify({ text: editText }),
    })
      .then(() => console.log(isEdit))
      .catch((err) => console.log(err));
  }, [isEdit]);

  const onChange = (e) => setEditText(e.target.value);

  return (
    <List>
      <div>
        <FontAwesomeIcon
          icon={faSquareCheck}
          className={isChecked ? 'isChecked' : ''}
          onClick={handleDoneClick}
        />
        {isEdit ? (
          <input value={editText} onChange={onChange} />
        ) : (
          <span>{editText}</span>
        )}
      </div>
      <div>
        <FontAwesomeIcon icon={faPenNib} onClick={handleEditBtn} />
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="deleteBtn"
          onClick={handleDeleteBtn}
        />
      </div>
    </List>
  );
};

export default TodoItem;
