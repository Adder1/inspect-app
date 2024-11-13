// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import MainPage from './pages/MainPage';
import TestPage from './pages/TestPage';
import ResultPage from './pages/ResultPage';
import { TestProvider } from './contexts/context';
import './styles/animations.css'; // 애니메이션 스타일 추가

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        classNames="page"
        timeout={300}
        unmountOnExit
      >
        <Routes location={location}>
          <Route path="/" element={<MainPage />} />
          <Route path="/test/:step" element={<TestPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
}

function App() {
  return (
    <TestProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </TestProvider>
  );
}

export default App;
