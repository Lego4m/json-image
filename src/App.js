import React from 'react';

import JsonImage from './components/JsonImage';

import example from './example.json';

function App() {
  return <JsonImage data={example.image} />;
}

export default App;
