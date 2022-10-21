import styled from 'styled-components';
import Spring from '../assets/img/spring.png';

const Head = styled.div`
  padding: 30px 24px 8px;
  position: relative;
  border-bottom: 2px solid #cb5917;
  &::before {
    content: '';
    width: 100%;
    height: 76px;
    background-image: url(${Spring});
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: -15px;
    transform: translate(-50%, -50%);
  }
`;

const TodoHeader = () => {
  return (
    <Head>
      <h1>My Todo</h1>
    </Head>
  );
};

export default TodoHeader;
