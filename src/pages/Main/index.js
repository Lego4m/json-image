import React, { useState, useEffect, useMemo } from 'react';

import JsonImage from '../../components/JsonImage';

import blank from '../../blank.json';

import {
  Container,
  Sections,
  ImageSection,
  StyleSection,
  JsonSection,
} from './styles';

export default function Main() {
  const [data, setData] = useState(blank);

  const [name, setName] = useState(blank.name);
  const [color, setColor] = useState('#ffffff');

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

  function handleInputCode() {
    const response = prompt('Insira o código'); // eslint-disable-line no-alert

    if (!response) {
      return;
    }

    try {
      const json = JSON.parse(response);

      setData(json);
    } catch {
      alert('Código inválido!'); // eslint-disable-line no-alert
    }
  }

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
              maxLength={50}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />

            <div>
              <button type="button" onClick={handleInputCode}>
                Inserir código
              </button>
            </div>
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
