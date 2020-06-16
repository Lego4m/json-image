import React from 'react';

import PropTypes from 'prop-types';

import { Container, Buttons } from './styles';

export default function StyleSection({ onChangeName, onClearImage, colorRef }) {
  return (
    <Container>
      <input
        type="text"
        placeholder="Nome"
        maxLength={50}
        onChange={(e) => onChangeName(e.target.value)}
      />

      <input type="color" defaultValue="#ffffff" ref={colorRef} />

      <Buttons>
        <button type="button" onClick={onClearImage}>
          Limpar
        </button>
      </Buttons>
    </Container>
  );
}

StyleSection.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  colorRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  onClearImage: PropTypes.func.isRequired,
};
