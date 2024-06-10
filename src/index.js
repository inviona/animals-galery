import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Homepage from './components/Homepage';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Birds from './components/Birds';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />
        <Route path="category" element={<Homepage />} />
        <Route path="category/cats" element={<Cats />} />
        <Route path="category/dogs" element={<Dogs/>}/>
        <Route path="category/birds" element={<Birds/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
