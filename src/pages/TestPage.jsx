// src/pages/TestPage.jsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import testImage1 from '../images/test-image-1.jpg';
import testImage2 from '../images/test-image-2.jpg';
import testImage3 from '../images/test-image-3.jpg';
import testImage4 from '../images/test-image-4.jpg';
import { useTestContext } from '../contexts/context';
import '../styles/fonts.css';

function TestPage() {
  const navigate = useNavigate();
  const { step } = useParams();
  const totalSteps = 4;
  const { selectedChoices, setSelectedChoices } = useTestContext();

  const stepImages = { 1: testImage1, 2: testImage2, 3: testImage3, 4: testImage4 };
  
  // 각 단계별 질문과 선택지 정의
  const questions = {
    // 1번 질문 : 오늘 날씨는 어떤가요?
    1: {
      optionA: "따사로운 햇살 아래 산책하고 싶은 날씨",
      optionB: "비 오는 날 창가에서 커피 한 잔 마시고 싶은 날씨"
    },
    // 2번 질문 : 오늘 당신의 기분은 어때요?
    2: {
      optionA: "기분이 좋아서 춤추고 싶은 날",
      optionB: "카페에서 조용히 책을 읽고 싶은 날"
    },
    // 3번 질문 : 맥주를 어디서 마시고 싶나요?
    3: {
      optionA: "오늘은 힘들어! 집에서 조용히 마시고 싶어",
      optionB: "오늘은 기분 전환이 필요해! 떠들썩한 분위기에서 마시고 싶어"
    },
    // 4번 질문 : 맥주를 누구랑 마시고 싶나요?
    4: {
      optionA: "친구들과 함께 파티하며 즐기는 맥주",
      optionB: "가족이나 연인과 함께 힐링하며 마시는 맥주"
    }
  };

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
      <Box 
        component="img" 
        src={stepImages[step]} 
        alt={`테스트 이미지 ${step}`} 
        sx={{
          width: { xs: '90%', sm: '80%', md: '600px' },
          height: 'auto',
          mb: 4
        }}
      />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '20px', 
        width: { xs: '90%', sm: '80%', md: '600px' },
        px: 2
      }}>
        <Button 
          variant="contained" 
          size="large" 
          onClick={() => handleChoice('A')}
          sx={{
            borderRadius: '8px',
            padding: { xs: '12px 20px', sm: '15px 40px', md: '15px 60px' },
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
            color: '#ffffff',
            textTransform: 'none',
            width: '100%',
            backgroundColor: '#3d2815',
            fontFamily: 'Pretendard',
            '&:hover': {
              backgroundColor: '#2b1b0f',
            },
          }}
        >
          {questions[step].optionA}
        </Button>
        <Button 
          variant="contained" 
          size="large" 
          onClick={() => handleChoice('B')}
          sx={{
            borderRadius: '8px',
            padding: { xs: '12px 20px', sm: '15px 40px', md: '15px 60px' },
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
            color: '#ffffff',
            textTransform: 'none',
            width: '100%',
            backgroundColor: '#3d2815',
            fontFamily: 'Pretendard',
            '&:hover': {
              backgroundColor: '#2b1b0f',
            },
          }}
        >
          {questions[step].optionB}
        </Button>
      </Box>
    </Box>
  );
}

export default TestPage;