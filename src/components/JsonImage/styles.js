import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    word-break: break-word;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const Pixel = styled.div`
  margin: 0.5px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
`;
