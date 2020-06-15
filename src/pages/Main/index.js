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

  return (
    <Container>
      <main>
        <h1>JSON Image</h1>

        <Sections>
          <ImageSection data={data} onChangeColor={handleChangeColor} />

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
