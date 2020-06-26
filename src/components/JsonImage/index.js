import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { FiZoomIn, FiZoomOut } from 'react-icons/fi';
import { MdCameraAlt } from 'react-icons/md';

import { Container, Row, Pixel, Buttons } from './styles';

export default function JsonImage({
  data,
  size,
  photo,
  zoomRange,
  onClickInPixel,
  canResize,
  canChangePhotoMode,
}) {
  const [pixelSize, setPixelSize] = useState(size);
  const [photoMode, setPhotoMode] = useState(photo);

  function handleZoomIn() {
    if (pixelSize >= 20 + zoomRange) {
      return;
    }

    setPixelSize(pixelSize + 2);
  }

  function handleZoomOut() {
    if (pixelSize <= 20 - zoomRange) {
      return;
    }

    setPixelSize(pixelSize - 2);
  }

  return (
    <Container>
      <h1>{data.name}</h1>

      {canResize && (
        <Buttons>
          <button type="button" onClick={handleZoomIn}>
            <FiZoomIn size={24} color="#fff" />
          </button>
          {canChangePhotoMode && (
            <button type="button" onClick={() => setPhotoMode(!photoMode)}>
              <MdCameraAlt size={24} color={photoMode ? '#55ff00' : '#999'} />
            </button>
          )}
          <button type="button" onClick={handleZoomOut}>
            <FiZoomOut size={24} color="#fff" />
          </button>
        </Buttons>
      )}

      {data.image.map((row, rowIndex) => (
        <Row key={String(rowIndex)}>
          {row.map((color, pixelIndex) => (
            <Pixel
              key={String(`${rowIndex}${pixelIndex}`)}
              color={color}
              size={pixelSize}
              onClick={() => onClickInPixel([rowIndex, pixelIndex])}
              photoMode={photoMode}
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
  photo: PropTypes.bool,
  zoomRange: PropTypes.number,
  onClickInPixel: PropTypes.func,
  canResize: PropTypes.bool,
  canChangePhotoMode: PropTypes.bool,
};

JsonImage.defaultProps = {
  onClickInPixel: () => {},
  size: 20,
  photo: false,
  zoomRange: 10,
  canResize: true,
  canChangePhotoMode: true,
};
