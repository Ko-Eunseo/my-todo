import { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

const List = styled.li`
border-bottom: 3px solid #CB5917;
display: flex;
justify-content: space-between;
padding: 4px;

  div > * {
    padding-right: 8px;

    &:not(span) {
    color: #CB5917;
    }

    &:not(span):hover {
      color: #171E71;
    }
  }

  .isChecked {
    color: #171E71;
  }
`

const TodoItem = ({ id, done, text }) => {
  const [isChecked, setIsChecked] = useState(done);

  const handleDoneClick = () => {
    setIsChecked(!isChecked);
  }

  // useEffect를 썻음에도 계속 렌더링됨
  useEffect(() => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify({ done: isChecked })
    })
      .then(() => {
        console.log(isChecked)
      })
      .catch(error => console.log(error))
  }, [isChecked])


  const handleDeleteBtn = (e) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE"
    }).then(() => window.location.reload())
      .catch(err => console.log(err))
  }

  return <List>
    <div>
      <FontAwesomeIcon icon={faSquareCheck}
        className={isChecked ? "isChecked" : ""}
        onClick={handleDoneClick} />
      <span>{text}</span>
    </div>
    <div>
      <FontAwesomeIcon icon={faPenNib} />
      <FontAwesomeIcon icon={faCircleXmark} className="deleteBtn"
        onClick={handleDeleteBtn} />
    </div>
  </List>
}

export default TodoItem;