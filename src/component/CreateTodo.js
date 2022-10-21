import { useState } from 'react';
import styled from 'styled-components';

const CreateWrap = styled.div`
  input {
    margin-right: 4px;
    border: 3px solid #171e71;
    border-radius: 5px;
    padding: 4px;
    width: 200px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  button {
    padding: 10px 30px;
    color: white;
    border: none;
    background-color: #171e71;
    border-radius: 10px;
    margin-bottom: 24px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover {
      border: 0;
      background-color: #cb5917;
    }
  }
`;

const CreateTodo = () => {
  const [text, setText] = useState('');
  const onChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      text,
      done: false,
    };
    fetch('http://localhost:3001/todos/', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(() => window.location.reload())
      .catch((error) => console.log(error));
  };

  return (
    <CreateWrap>
      <form onSubmit={handleSubmit}>
        <input type="text" label={'내용'} onChange={onChange} value={text} />
        <button>ADD TODO</button>
      </form>
    </CreateWrap>
  );
};

export default CreateTodo;
