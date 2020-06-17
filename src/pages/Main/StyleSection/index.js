import React, { useEffect, useState } from 'react';

import { FiAlertCircle } from 'react-icons/fi';

import PropTypes from 'prop-types';

import {
  Container,
  Tools,
  PencilTool,
  DropperTool,
  EraserTool,
  History,
  HistoryPixel,
  Buttons,
  ClearButton,
} from './styles';

export default function StyleSection({
  onChangeName,
  onClearImage,
  onChangeTool,
  tool,
  colorRef,
  history,
}) {
  const [clearSecurityLayer, setClearSecurityLayer] = useState(true);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      const { keyCode } = e;

      switch (keyCode) {
        case 81: // Q
          onChangeTool('pencil');
          break;
        case 87: // W
          onChangeTool('dropper');
          break;
        case 69: // E
          onChangeTool('eraser');
          break;
        default:
      }
    });

    return () => {
      document.removeEventListener('keydown');
    };
  }, [onChangeTool]);

  function handleChangeColor(color) {
    colorRef.current.value = color;
  }

  function handleClear() {
    setClearSecurityLayer(true);
    onClearImage();
  }

  return (
    <Container>
      <input
        type="text"
        placeholder="Nome"
        maxLength={50}
        onChange={(e) => onChangeName(e.target.value)}
      />

      <Tools>
        <PencilTool
          selected={tool === 'pencil'}
          onClick={() => onChangeTool('pencil')}
        />
        <DropperTool
          selected={tool === 'dropper'}
          onClick={() => onChangeTool('dropper')}
        />
        <EraserTool
          selected={tool === 'eraser'}
          onClick={() => onChangeTool('eraser')}
        />
      </Tools>

      <input type="color" defaultValue="#ffffff" ref={colorRef} />

      <History>
        {history.map((color) => (
          <HistoryPixel
            key={`HP${color}`}
            color={color}
            onClick={() => handleChangeColor(color)}
          />
        ))}
      </History>

      <Buttons>
        {clearSecurityLayer ? (
          <ClearButton onClick={() => setClearSecurityLayer(false)} security>
            Limpar
          </ClearButton>
        ) : (
          <ClearButton // eslint-disable-line jsx-a11y/mouse-events-have-key-events
            onMouseOut={() => setClearSecurityLayer(true)}
            onClick={handleClear}
          >
            <FiAlertCircle size={16} color="#d66f0f" />
            Tem certeza?
          </ClearButton>
        )}
      </Buttons>
    </Container>
  );
}

StyleSection.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  colorRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  onClearImage: PropTypes.func.isRequired,
  onChangeTool: PropTypes.func.isRequired,
  tool: PropTypes.string.isRequired,
  history: PropTypes.arrayOf(PropTypes.string),
};

StyleSection.defaultProps = {
  history: [],
};
