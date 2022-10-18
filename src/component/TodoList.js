import styled from "styled-components";
import TodoItem from "./TodoItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 24px;
  border: 5px double #CB5917;
  border-width: 5px 0px;
  min-height: 400px;
  ul > *:last-of-type {
    border-bottom: 2px solid #CB5917;
  }
`

const TodoWrapper = ({ todos }) => {
  return <Wrapper>
    <ul>
      {Array.isArray(todos) && todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id}
          text={todo.text}
          isChecked={todo.done}
          todos={todos}
        />
      ))
      }
    </ul>
  </Wrapper>
}

export default TodoWrapper;