import React, { useState, useRef } from 'react';

import blank from '../../blank.json';

import ImageSection from './ImageSection';
import StyleSection from './StyleSection';
import JsonSection from './JsonSection';

import { Container, Sections } from './styles';

export default function Main() {
  const [data, setData] = useState(blank);

  const [tool, setTool] = useState('pencil');
  const [colorsHistory, setColorsHistory] = useState(['#000000']);

  const colorRef = useRef();

  function changeColorHistory(color) {
    if (colorsHistory.includes(color)) {
      return;
    }

    if (colorsHistory.length >= 10) {
      const localHistory = [...colorsHistory];

      localHistory.shift();

      setColorsHistory([...localHistory, color]);
      return;
    }

    setColorsHistory([...colorsHistory, color]);
  }

  function handleClickInPixel(location) {
    const [row, pixel] = location;
    const localData = { ...data };

    switch (tool) {
      case 'pencil':
        localData.image[row][pixel] = colorRef.current.value;

        setData(localData);
        changeColorHistory(colorRef.current.value);
        break;

      case 'dropper':
        colorRef.current.value = localData.image[row][pixel];
        break;

      case 'eraser':
        localData.image[row][pixel] = '#ffffff';
        setData(localData);
        break;

      default:
    }
  }

  function handleChangeName(name) {
    setData({ ...data, name });
  }

  function handleAddRow(location) {
    const localData = { ...data };

    switch (location) {
      case 'begin':
        localData.image.unshift(localData.image[0].map(() => '#ffffff'));
        break;

      case 'end':
        localData.image.push(localData.image[0].map(() => '#ffffff'));
        break;

      default:
    }

    setData(localData);
  }

  function handleAddColumn(location) {
    const localData = { ...data };

    switch (location) {
      case 'begin':
        localData.image.map((row) => row.unshift('#ffffff'));
        break;

      case 'end':
        localData.image.map((row) => row.push('#ffffff'));
        break;

      default:
    }

    setData(localData);
  }

  function handleRemoveRow(location) {
    if (data.image.length <= 1) {
      return;
    }
    const localData = { ...data };

    switch (location) {
      case 'begin':
        localData.image.shift();
        break;

      case 'end':
        localData.image.pop();
        break;

      default:
    }

    setData(localData);
  }

  function handleRemoveColumn(location) {
    if (data.image[0].length <= 1) {
      return;
    }
    const localData = { ...data };

    switch (location) {
      case 'begin':
        localData.image.map((row) => row.shift());
        break;

      case 'end':
        localData.image.map((row) => row.pop());
        break;

      default:
    }

    setData(localData);
  }

  function handleClearImage() {
    const localData = { ...data };

    localData.image = localData.image.map((row) => row.map(() => '#ffffff'));

    setData(localData);
  }

  return (
    <Container>
      <main>
        <h1>JSON Image</h1>

        <Sections>
          <StyleSection
            onChangeName={handleChangeName}
            onClearImage={handleClearImage}
            onChangeTool={setTool}
            tool={tool}
            history={colorsHistory}
            colorRef={colorRef}
          />

          <ImageSection
            data={data}
            onClickInPixel={handleClickInPixel}
            onAddRow={handleAddRow}
            onAddColumn={handleAddColumn}
            onRemoveRow={handleRemoveRow}
            onRemoveColumn={handleRemoveColumn}
          />

          <JsonSection data={data} onCode={setData} />
        </Sections>
      </main>
    </Container>
  );
}
