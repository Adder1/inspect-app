// src/pages/MainPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import mainImage from '../images/main-image.jpg';
import Sidebar from '../components/Sidebar';
import '../styles/fonts.css';

function MainPage() {
  const navigate = useNavigate();

  const startTest = () => {
    navigate('/test/1'); // 첫 번째 검사 페이지로 이동
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" minHeight="100vh">
      <Box 
        component="img" 
        src={mainImage} 
        alt="메인 이미지" 
        sx={{
          maxWidth: '20%',  // 전체 너비의 60%로 설정
          width: 'auto',
          height: 'auto',
          mb: 2,  // margin-bottom
        }}
      />
      <Box 
        component="h1" 
        textAlign="center" 
        sx={{
          fontSize: '2.2rem',  // 글씨 크기 증가
          mb: 2,
          fontFamily: 'Pretendard',  // Pretendard 폰트 적용
          fontWeight: 500,  // Medium 굵기에 해당
        }}
      >
        오늘의 맥주를 추천해드립니다
      </Box>
      <Button 
        variant="contained" 
        size="large" 
        onClick={startTest}
        sx={{
          borderRadius: '50px',
          padding: '10px 60px',
          height: '65px',
          fontSize: '1.8rem',
          color: '#ffffff',
          textTransform: 'none',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          width: '300px',
          backgroundColor: '#133020',
          fontFamily: 'Pretendard',
          '&:hover': {
            backgroundColor: '#1b4530',
          },
        }}
      >
        시작하기
      </Button>
      {/* <Sidebar /> */}
    </Box>
  );
}

export default MainPage;
