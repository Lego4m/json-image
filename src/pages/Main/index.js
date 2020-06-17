import React, { useState, useRef } from 'react';

import blank from '../../blank.json';

import ImageSection from './ImageSection';
import StyleSection from './StyleSection';
import JsonSection from './JsonSection';

import { Container, Sections } from './styles';

export default function Main() {
  const [data, setData] = useState(blank);
  const [colorsHistory, setColorsHistory] = useState([]);
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

  function handleChangeColor(location) {
    const { value: color } = colorRef.current;
    const [row, pixel] = location;

    const localData = { ...data };

    localData.image[row][pixel] = color;

    setData(localData);
    changeColorHistory(color);
  }

  function handleChangeName(name) {
    setData({ ...data, name });
  }

  function handleAddRow() {
    const localData = { ...data };

    localData.image.push(localData.image[0].map(() => '#ffffff'));

    setData(localData);
  }

  function handleRemoveRow() {
    if (data.image.length <= 1) {
      return;
    }
    const localData = { ...data };

    localData.image.pop();

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
            history={colorsHistory}
            colorRef={colorRef}
          />

          <ImageSection
            data={data}
            onChangeColor={handleChangeColor}
            onAddRow={handleAddRow}
            onRemoveRow={handleRemoveRow}
          />

          <JsonSection data={data} onCode={setData} />
        </Sections>
      </main>
    </Container>
  );
}
