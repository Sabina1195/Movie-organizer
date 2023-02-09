import React from 'react';
import MaingPage  from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import { BrowserRouter, Route } from 'react-router-dom';
import './reset.css';
import './common.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <Route path="*" element={<MaingPage />} />
          <Route path="/list/:id" element={<ListPage />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
