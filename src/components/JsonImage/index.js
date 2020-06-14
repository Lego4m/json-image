import React from 'react';

import PropTypes from 'prop-types';

import { Container, Row, Pixel } from './styles';

export default function JsonImage({ data, size }) {
  return (
    <Container>
      {data.map((row, rowIndex) => (
        <Row key={String(rowIndex)}>
          {row.map((color, pixelIndex) => (
            <Pixel
              key={String(`${rowIndex}${pixelIndex}`)}
              color={color}
              size={size}
            />
          ))}
        </Row>
      ))}
    </Container>
  );
}

JsonImage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  size: PropTypes.number,
};

JsonImage.defaultProps = {
  size: 20,
};
