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
`;

export const SizeControlButton = styled.div`
  display: flex;
  align-items: center;

  background: #7159c1;
  margin: 0 2px;
  border-radius: 4px;

  button {
    display: flex;

    padding: 5px;
    background: none;
    border: 0;
  }

  svg {
    margin: 0 1px;
  }
`;
