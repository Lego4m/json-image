import React from 'react';

import PropTypes from 'prop-types';

import JsonImage from '../../../components/JsonImage';

import { Container } from './styles';

export default function ImageSection({ data, onChangeColor }) {
  return (
    <Container>
      <JsonImage data={data} onChangeColor={onChangeColor} />
    </Container>
  );
}

ImageSection.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  }).isRequired,
  onChangeColor: PropTypes.func.isRequired,
};
