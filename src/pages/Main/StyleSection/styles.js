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

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 5px;
    margin: 0 1px;

    background: #7159c1;
    border: 0;
    border-radius: 4px;
    color: #fff;
  }
`;
