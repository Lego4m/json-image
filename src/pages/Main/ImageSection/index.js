import React from 'react';

import PropTypes from 'prop-types';

import JsonImage from '../../../components/JsonImage';

import { Container, Buttons } from './styles';

export default function ImageSection({
  data,
  onChangeColor,
  onAddRow,
  onRemoveRow,
}) {
  return (
    <Container>
      <JsonImage data={data} onChangeColor={onChangeColor} />
      <Buttons>
        <button type="button" onClick={onRemoveRow}>
          -
        </button>
        <button type="button" onClick={onAddRow}>
          +
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
  onChangeColor: PropTypes.func.isRequired,
  onAddRow: PropTypes.func.isRequired,
  onRemoveRow: PropTypes.func.isRequired,
};
