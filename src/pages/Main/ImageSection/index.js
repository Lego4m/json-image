import React from 'react';

import PropTypes from 'prop-types';

import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import { GiVerticalFlip, GiHorizontalFlip } from 'react-icons/gi';

import JsonImage from '../../../components/JsonImage';

import { Container, Buttons, SizeControlButton } from './styles';

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
          <button type="button" onClick={onRemoveRow}>
            <GiVerticalFlip color="#fff" size={18} />
          </button>
          <FiMinusCircle size={18} color="#fff" />
          <button type="button" onClick={onRemoveColumn}>
            <GiHorizontalFlip color="#fff" size={18} />
          </button>
        </SizeControlButton>

        <SizeControlButton>
          <button type="button" onClick={onAddRow}>
            <GiVerticalFlip color="#fff" size={18} />
          </button>
          <FiPlusCircle size={18} color="#fff" />
          <button type="button" onClick={onAddColumn}>
            <GiHorizontalFlip color="#fff" size={18} />
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
