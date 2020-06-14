import styled from 'styled-components';

export const Container = styled.div``;

export const Row = styled.div`
  display: flex;
`;

export const Pixel = styled.div`
  margin: 1px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
`;
