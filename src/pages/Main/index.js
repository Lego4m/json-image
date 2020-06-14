import React from 'react';

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
  return (
    <Container>
      <main>
        <h1>JSON Image</h1>

        <Sections>
          <ImageSection>
            <JsonImage data={example} />
          </ImageSection>

          <StyleSection>
            <input type="text" placeholder="Nome" />
            <input type="color" />
          </StyleSection>

          <JsonSection>
            <textarea placeholder="JSON" readOnly autoCorrect={false} />
          </JsonSection>
        </Sections>
      </main>
    </Container>
  );
}
