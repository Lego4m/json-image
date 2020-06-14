import React, { useState, useEffect, useMemo } from 'react';

import JsonImage from '../../components/JsonImage';

import example from '../../example.json';

import {
  Container,
  Sections,
  ImageSection,
  StyleSection,
  JsonSection,
} from './styles';

export default function Main() {
  const [data, setData] = useState(example);

  const [name, setName] = useState(data.name);
  const [color, setColor] = useState('#fff');

  const JSONText = useMemo(() => JSON.stringify(data), [data]);

  function handleChangeColor(location) {
    const [row, pixel] = location;

    const localData = {
      ...data,
    };

    localData.image[row][pixel] = color;

    setData(localData);
  }

  useEffect(() => {
    setData((d) => ({ ...d, name }));
  }, [name]);

  return (
    <Container>
      <main>
        <h1>JSON Image</h1>

        <Sections>
          <ImageSection>
            <JsonImage data={data} changeColor={handleChangeColor} />
          </ImageSection>

          <StyleSection>
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </StyleSection>

          <JsonSection>
            <textarea
              placeholder="JSON"
              readOnly
              autoCorrect="false"
              value={JSONText}
            />
          </JsonSection>
        </Sections>
      </main>
    </Container>
  );
}
