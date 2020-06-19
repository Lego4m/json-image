import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    word-break: break-word;
    text-align: center;
    margin-bottom: 5px;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const Pixel = styled.div`
  margin: ${(props) => (props.photoMode ? '0px' : '0.5px')};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 40px;
    width: 100%;
    margin: 0 3px;

    background: none;
    border: 0;
    color: #fff;
  }
`;
