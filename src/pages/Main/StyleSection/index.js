import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function StyleSection({ onChangeName, onChangeColor }) {
  return (
    <Container>
      <input
        type="text"
        placeholder="Nome"
        maxLength={50}
        onChange={(e) => onChangeName(e.target.value)}
      />

      <input
        type="color"
        defaultValue="#ffffff"
        onChange={(e) => onChangeColor(e.target.value)}
      />
    </Container>
  );
}

StyleSection.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  onChangeColor: PropTypes.func.isRequired,
};
