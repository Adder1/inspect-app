// src/pages/TestPage.jsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import testImage1 from '../images/test-image-1.jpg';
import testImage2 from '../images/test-image-2.jpg';
import testImage3 from '../images/test-image-3.jpg';
import testImage4 from '../images/test-image-4.jpg';

function TestPage() {
  const navigate = useNavigate();
  const { step } = useParams();
  const totalSteps = 4; // 총 4단계
  const [selectedChoices, setSelectedChoices] = useState([]);

  // 각 단계에 해당하는 이미지 설정
  const stepImages = {
    1: testImage1, // 1단계 이미지
    2: testImage2, // 2단계 이미지
    3: testImage3, // 3단계 이미지
    4: testImage4  // 4단계 이미지
  };

  const handleChoice = (choice) => {
    const updatedChoices = [...selectedChoices, choice];
    setSelectedChoices(updatedChoices);
    const nextStep = parseInt(step) + 1;

    if (nextStep <= totalSteps) {
      // 다음 단계로 이동하면서 선택한 항목 전달
      navigate(`/test/${nextStep}`, { state: { selectedChoices: updatedChoices } });
    } else {
      // 마지막 단계 후 결과 페이지로 이동
      navigate('/result', { state: { selectedChoices: updatedChoices } });
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" minHeight="100vh">
      {/* 단계에 따른 이미지 표시 */}
      <Box component="img" src={stepImages[step]} alt={`테스트 이미지 ${step}`} maxWidth="100%" mb={2} />
      
      {/* 선택 버튼 */}
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