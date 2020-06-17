import React from 'react';

import PropTypes from 'prop-types';

import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

import JsonImage from '../../../components/JsonImage';

import { Container, Buttons } from './styles';

export default function ImageSection({
  data,
  onClickInPixel,
  onAddRow,
  onRemoveRow,
}) {
  return (
    <Container>
      <JsonImage data={data} onClickInPixel={onClickInPixel} />
      <Buttons>
        <button type="button" onClick={onRemoveRow}>
          <FiMinusCircle size={18} />
        </button>
        <button type="button" onClick={onAddRow}>
          <FiPlusCircle size={18} />
        </button>
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
  onRemoveRow: PropTypes.func.isRequired,
};
