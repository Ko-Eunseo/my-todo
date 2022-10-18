import './App.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Suspense, lazy } from 'react';

const TodoHeader = lazy(() => import('./component/TodoHeader'))
const TodoList = lazy(() => import('./component/TodoList'))
const CreateTodo = lazy(() => import('./component/CreateTodo'))

const Wrapper = styled.div`
background: #F0EDE6;
width: 400px;
margin: 50px auto;
border-radius: 10px;
padding: 8px 16px;
border: 10px solid #FBDE8B;
border-bottom: 30px solid #FBDE8B;
border-radius: 10px;
`
function App() {

  const [todos, setTodos] = useState();

  useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setTodos(data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <Suspense>
        <Wrapper>
          <TodoHeader />
          <TodoList todos={todos} />
          <CreateTodo todos={todos} />
        </Wrapper>
      </Suspense>
    </div >
  );
}

export default App;