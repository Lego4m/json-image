import styled from 'styled-components';

import { MdBorderColor, MdColorize } from 'react-icons/md';
import { FaEraser } from 'react-icons/fa';

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

export const Tools = styled.div`
  display: flex;
  margin-top: 6px;
`;

export const PencilTool = styled(MdBorderColor).attrs(({ selected }) => ({
  title: 'Q - Lápis',
  size: 24,
  color: selected ? '#55ff00' : '#999',
}))`
  cursor: pointer;
  margin: 0 2px;
`;

export const DropperTool = styled(MdColorize).attrs(({ selected }) => ({
  title: 'W - Conta-gotas',
  size: 24,
  color: selected ? '#55ff00' : '#999',
}))`
  cursor: pointer;
  margin: 0 2px;
`;

export const EraserTool = styled(FaEraser).attrs(({ selected }) => ({
  title: 'E - Borracha',
  size: 24,
  color: selected ? '#55ff00' : '#999',
}))`
  cursor: pointer;
  margin: 0 2px;
`;

export const History = styled.div`
  display: flex;
  margin-top: 6px;
`;

export const HistoryPixel = styled.div`
  cursor: pointer;
  margin: 1px;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
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
