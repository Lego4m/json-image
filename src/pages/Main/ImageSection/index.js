import React from 'react';

import PropTypes from 'prop-types';

import {
  FiPlusCircle,
  FiMinusCircle,
  FiArrowDown,
  FiArrowUp,
  FiArrowRight,
  FiArrowLeft,
} from 'react-icons/fi';

import JsonImage from '../../../components/JsonImage';

import {
  Container,
  Buttons,
  SizeControlButton,
  SizeButtonLine,
} from './styles';

export default function ImageSection({
  data,
  onClickInPixel,
  onAddRow,
  onAddColumn,
  onRemoveRow,
  onRemoveColumn,
}) {
  return (
    <Container>
      <JsonImage data={data} onClickInPixel={onClickInPixel} />
      <Buttons>
        <SizeControlButton>
          <button type="button" onClick={() => onRemoveRow('begin')}>
            <FiArrowDown size={18} color="#fff" />
          </button>
          <SizeButtonLine>
            <button type="button" onClick={() => onRemoveColumn('begin')}>
              <FiArrowRight size={18} color="#fff" />
            </button>

            <FiMinusCircle size={18} color="#fff" />

            <button type="button" onClick={() => onRemoveColumn('end')}>
              <FiArrowLeft size={18} color="#fff" />
            </button>
          </SizeButtonLine>
          <button type="button" onClick={() => onRemoveRow('end')}>
            <FiArrowUp size={18} color="#fff" />
          </button>
        </SizeControlButton>

        <SizeControlButton>
          <button type="button" onClick={() => onAddRow('begin')}>
            <FiArrowUp size={18} color="#fff" />
          </button>
          <SizeButtonLine>
            <button type="button" onClick={() => onAddColumn('begin')}>
              <FiArrowLeft size={18} color="#fff" />
            </button>

            <FiPlusCircle size={18} color="#fff" />

            <button type="button" onClick={() => onAddColumn('end')}>
              <FiArrowRight size={18} color="#fff" />
            </button>
          </SizeButtonLine>
          <button type="button" onClick={() => onAddRow('end')}>
            <FiArrowDown size={18} color="#fff" />
          </button>
        </SizeControlButton>
      </Buttons>
    </Container>
  );
}

ImageSection.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  }).isRequired,
  onClickInPixel: PropTypes.func.isRequired,
  onAddRow: PropTypes.func.isRequired,
  onAddColumn: PropTypes.func.isRequired,
  onRemoveRow: PropTypes.func.isRequired,
  onRemoveColumn: PropTypes.func.isRequired,
};
