import React, { useState } from 'react';

import blank from '../../blank.json';

import ImageSection from './ImageSection';
import StyleSection from './StyleSection';
import JsonSection from './JsonSection';

import { Container, Sections } from './styles';

export default function Main() {
  const [data, setData] = useState(blank);
  const [color, setColor] = useState('#ffffff');

  function handleChangeColor(location) {
    const [row, pixel] = location;

    setData((prevData) => {
      const localData = {
        ...prevData,
      };
      localData.image[row][pixel] = color;

      return localData;
    });
  }

  function handleChangeName(name) {
    setData({ ...data, name });
  }

  function handleAddRow() {
    const localData = {
      ...data,
    };

    localData.image.push(localData.image[0].map(() => '#ffffff'));

    setData(localData);
  }

  function handleRemoveRow() {
    if (data.image.length <= 1) {
      return;
    }
    const localData = {
      ...data,
    };
    localData.image.pop();

    setData(localData);
  }

  return (
    <Container>
      <main>
        <h1>JSON Image</h1>

        <Sections>
          <ImageSection
            data={data}
            onChangeColor={handleChangeColor}
            onAddRow={handleAddRow}
            onRemoveRow={handleRemoveRow}
          />

          <StyleSection
            onChangeName={handleChangeName}
            onChangeColor={setColor}
          />

          <JsonSection data={data} onCode={setData} />
        </Sections>
      </main>
    </Container>
  );
}
