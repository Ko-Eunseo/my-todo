import { Suspense, lazy, useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';

const TodoHeader = lazy(() => import('./component/TodoHeader'));
const TodoList = lazy(() => import('./component/TodoList'));
const CreateTodo = lazy(() => import('./component/CreateTodo'));

const Wrapper = styled.div`
  background: #f0ede6;
  width: 400px;
  margin: 50px auto;
  border-radius: 10px;
  padding: 8px 16px;
  border: 10px solid #fbde8b;
  border-bottom: 30px solid #fbde8b;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
function App() {
  const [todos, setTodos] = useState();

  useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Suspense>
        <Wrapper>
          <TodoHeader />
          <TodoList todos={todos} />
          <CreateTodo todos={todos} />
        </Wrapper>
      </Suspense>
    </div>
  );
}

export default App;
