// src/pages/TestPage.jsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Box } from '@mui/material';

function TestPage() {
  const navigate = useNavigate();
  const { step } = useParams();
  const totalSteps = 5;  // 총 검사 단계 수
  const [selectedChoices, setSelectedChoices] = useState([]);

  const handleChoice = (choice) => {
    setSelectedChoices((prev) => [...prev, choice]);
    const nextStep = parseInt(step) + 1;

    if (nextStep <= totalSteps) {
      navigate(`/test/${nextStep}`);
    } else {
      navigate('/result', { state: { choices: selectedChoices } });
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" minHeight="100vh">
      <Box component="img" src="/main-image.jpg" alt="테스트 이미지" maxWidth="100%" mb={2} />
      <Button variant="contained" color="primary" size="large" onClick={() => handleChoice('Option 1')}>
        Option 1
      </Button>
      <Button variant="contained" color="secondary" size="large" onClick={() => handleChoice('Option 2')}>
        Option 2
      </Button>
    </Box>
  );
}

export default TestPage;
