import React, { useMemo, useRef } from 'react';

import { FaFileImport, FaFileDownload } from 'react-icons/fa';
import { MdContentCopy, MdCode } from 'react-icons/md';

import PropTypes from 'prop-types';

import { Container, Buttons } from './styles';

export default function JsonSection({ data, onCode }) {
  const textArea = useRef();
  const inputFile = useRef();

  const JSONFormatted = useMemo(() => JSON.stringify(data), [data]);

  const JSONToDownload = useMemo(
    () =>
      URL.createObjectURL(
        new Blob([JSONFormatted], { type: 'application/json' })
      ),
    [JSONFormatted]
  );

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

  function handleFileCode(e) {
    const reader = new FileReader();

    reader.onerror = () => {
      alert('Erro ao ler arquivo'); // eslint-disable-line no-alert
    };

    reader.onabort = () => {
      alert('Erro ao ler arquivo'); // eslint-disable-line no-alert
    };

    reader.onload = () => {
      const { result } = reader;

      try {
        const json = JSON.parse(result);

        onCode(json);
      } catch {
        alert('Código inválido!'); // eslint-disable-line no-alert
      }
    };

    reader.readAsText(e.target.files[0]);
  }

  function handleCopy() {
    textArea.current.select();
    document.execCommand('copy');
  }

  return (
    <Container>
      <textarea
        placeholder="JSON"
        ref={textArea}
        readOnly
        autoCorrect="false"
        value={JSONFormatted}
      />
      <Buttons>
        <button
          type="button"
          onClick={() => inputFile.current.click()}
          title="Importar"
        >
          <FaFileImport size={24} color="#fff" />
        </button>
        <a href={JSONToDownload} download={`${data.name}.json`} title="Baixar">
          <FaFileDownload size={24} color="#fff" />
        </a>

        <button type="button" onClick={handlePromptCode} title="Inserir código">
          <MdCode size={24} color="#fff" />
        </button>

        {document.queryCommandSupported('copy') && (
          <button type="button" onClick={handleCopy} title="Copiar">
            <MdContentCopy size={24} color="#fff" />
          </button>
        )}

        <input
          type="file"
          ref={inputFile}
          accept="application/json"
          onChange={handleFileCode}
          style={{ display: 'none' }}
        />
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
