import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import MyLayout from './components/MyLayout'

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
