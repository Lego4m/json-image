import React, { useMemo } from 'react';

import PropTypes from 'prop-types';

import { Container, Buttons } from './styles';

export default function JsonSection({ data, onCode }) {
  const JSONFormatted = useMemo(() => JSON.stringify(data), [data]);

  function handlePromptCode() {
    const response = prompt('Insira o código'); // eslint-disable-line no-alert

    if (!response) {
      return;
    }

    try {
      const json = JSON.parse(response);

      onCode(json);
    } catch {
      alert('Código inválido!'); // eslint-disable-line no-alert
    }
  }

  return (
    <Container>
      <textarea
        placeholder="JSON"
        readOnly
        autoCorrect="false"
        value={JSONFormatted}
      />
      <Buttons>
        <button type="button" onClick={handlePromptCode}>
          Inserir Código
        </button>
      </Buttons>
    </Container>
  );
}

JsonSection.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  }).isRequired,
  onCode: PropTypes.func.isRequired,
};
