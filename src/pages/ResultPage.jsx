// src/pages/ResultPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { choices } = location.state || {};

  const calculateResult = (choices) => {
    // 선택한 정보에 따라 결과 계산 로직 추가 가능
    return 'result-image.jpg';
  };

  const restartTest = () => {
    navigate('/');
  };

  const resultImage = calculateResult(choices);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" minHeight="100vh">
      <Box component="img" src={`/${resultImage}`} alt="결과 이미지" maxWidth="100%" mb={2} />
      <Button variant="contained" color="primary" size="large" onClick={restartTest}>
        다시 하기
      </Button>
    </Box>
  );
}

export default ResultPage;
