import React from 'react';

import PropTypes from 'prop-types';

import { Container, Row, Pixel } from './styles';

export default function JsonImage({ data, size }) {
  return (
    <Container>
      <h1>{data.name}</h1>

      {data.image.map((row, rowIndex) => (
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
  data: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  }).isRequired,
  size: PropTypes.number,
};

JsonImage.defaultProps = {
  size: 20,
};
