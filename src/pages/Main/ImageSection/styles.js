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
  align-items: center;
  margin-top: 6px;

  span {
    color: #999;
    font-size: 12px;
    margin: 0 4px;
  }
`;

export const SizeControlButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  background: #7159c1;
  margin: 0 2px;
  border-radius: 4px;

  button {
    display: flex;

    background: none;
    border: 0;

    margin: 2px 0;
  }
`;

export const SizeButtonLine = styled.div`
  display: flex;

  button {
    display: flex;

    background: none;
    border: 0;

    margin: 0 2px;
  }
`;
