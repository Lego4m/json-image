import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;

  background-color: #202020;
  border-radius: 20px;

  margin: 10px;
  padding: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 40px;
    width: 100%;
    padding: 5px;
    margin: 0 1px;

    background: #7159c1;
    border: 0;
    border-radius: 4px;
    color: #fff;
  }
`;
