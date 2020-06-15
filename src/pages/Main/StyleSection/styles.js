import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;

  background-color: #202020;
  border-radius: 20px;

  margin: 10px;
  padding: 20px;

  input[type='text'] {
    width: 100%;
    height: 26px;
    border: 0;
    border-radius: 4px;
    padding: 0 5px;
  }

  input[type='color'] {
    width: 100%;
    margin-top: 6px;
  }
`;