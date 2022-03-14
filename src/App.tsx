import React from 'react';
import { DisplayWeather } from './components/DisplayWeather';
import { SearchInput } from './components/SearchInput';

function App() {
  return (
    <div className="App">
      <SearchInput />
      <DisplayWeather />
    </div>
  );
}

export default App;
