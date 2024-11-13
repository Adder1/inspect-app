// src/contexts/TestContext.jsx
import React, { createContext, useContext, useState } from 'react';

const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const [selectedChoices, setSelectedChoices] = useState([]);

  const resetChoices = () => setSelectedChoices([]); // 선택 초기화

  return (
    <TestContext.Provider value={{ selectedChoices, setSelectedChoices, resetChoices }}>
      {children}
    </TestContext.Provider>
  );
};

export const useTestContext = () => useContext(TestContext);
