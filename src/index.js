import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Homepage from './components/Homepage';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category" element={<Homepage />} />
      </Routes>
    </App>
  </BrowserRouter>
);
