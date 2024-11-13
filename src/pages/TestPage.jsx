// src/pages/TestPage.jsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import testImage1 from '../images/test-image-1.jpg';
import testImage2 from '../images/test-image-2.jpg';
import testImage3 from '../images/test-image-3.jpg';
import testImage4 from '../images/test-image-4.jpg';
import { useTestContext } from '../contexts/context';

function TestPage() {
  const navigate = useNavigate();
  const { step } = useParams();
  const totalSteps = 4; // 총 4단계
  const { selectedChoices, setSelectedChoices } = useTestContext();

  const stepImages = { 1: testImage1, 2: testImage2, 3: testImage3, 4: testImage4 };

  const handleChoice = (choice) => {
    const updatedChoices = [...selectedChoices, choice];
    setSelectedChoices(updatedChoices);
    const nextStep = parseInt(step) + 1;

    if (nextStep <= totalSteps) {
      navigate(`/test/${nextStep}`);
    } else {
      navigate('/result');
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" minHeight="100vh">
      <Box component="img" src={stepImages[step]} alt={`테스트 이미지 ${step}`} maxWidth="100%" mb={2} />
      <Button variant="contained" color="primary" size="large" onClick={() => handleChoice('A')}>
        Option 1
      </Button>
      <Button variant="contained" color="secondary" size="large" onClick={() => handleChoice('B')}>
        Option 2
      </Button>
    </Box>
  );
}

export default TestPage;