// src/pages/MainPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import mainImage from '../images/main-image.png';
import Sidebar from '../components/Sidebar';

function MainPage() {
  const navigate = useNavigate();

  const startTest = () => {
    navigate('/test/1'); // 첫 번째 검사 페이지로 이동
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" minHeight="100vh">
      <Box component="img" src={mainImage} alt="메인 이미지" maxWidth="100%" mb={2} />
      <Box component="h1" textAlign="center" fontSize="2rem" mb={2}>
        조선의 미식 유형 테스트
      </Box>
      <Button variant="contained" color="primary" size="large" onClick={startTest}>
        검사 시작
      </Button>
      {/* <Sidebar /> */}
    </Box>
  );
}

export default MainPage;
