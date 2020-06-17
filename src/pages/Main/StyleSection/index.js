import React, { useEffect } from 'react';

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
} from './styles';

export default function StyleSection({
  onChangeName,
  onClearImage,
  onChangeTool,
  tool,
  colorRef,
  history,
}) {
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
  onChangeTool: PropTypes.func.isRequired,
  tool: PropTypes.string.isRequired,
  history: PropTypes.arrayOf(PropTypes.string),
};

StyleSection.defaultProps = {
  history: [],
};
