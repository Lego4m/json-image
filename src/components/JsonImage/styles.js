import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;

  h1 {
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const Pixel = styled.div`
  margin: 1px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
`;
