import React from 'react';
import MultiSelect from './MultiSelect';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="title">Multi-Select Dropdown</h1>
      <MultiSelect value={['India', 'Australia']} readonly={false} />
    </div>
  );
};

export default App;
