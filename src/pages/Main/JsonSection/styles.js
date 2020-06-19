import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;

  background-color: #202020;
  border-radius: 20px;

  margin: 10px;
  padding: 20px;

  textarea {
    width: 100%;
    resize: vertical;
    min-height: 150px;

    border-radius: 8px;
    padding: 5px;
    line-height: 12px;

    color: #999;
    background: transparent;
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 6px;

  button {
    display: flex;
    justify-content: center;

    width: 100%;
    padding: 5px;
    margin: 0 2px;

    background: #7159c1;
    border: 0;
    border-radius: 4px;
    color: #fff;
  }

  a {
    display: flex;
    justify-content: center;

    width: 100%;
    padding: 5px;
    margin: 0 2px;

    background: #7159c1;
    border: 0;
    border-radius: 4px;
    color: #fff;
    text-decoration: none;
  }
`;
