// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TestPage from './pages/TestPage';
import ResultPage from './pages/ResultPage';
// import { TestProvider } from './contexts/Context';

function App() {
  return (
    // <TestProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/test/:step" element={<TestPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    // </TestProvider>
  );
}

export default App;
