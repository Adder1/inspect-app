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
          maxWidth: { xs: '80%', sm: '60%', md: '30%' },  // 크기를 더 크게 조정
          width: 'auto',
          height: 'auto',
          mb: 2,
        }}
      />
      <Box 
        component="h1" 
        textAlign="center" 
        sx={{
          fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' },  // 반응형 폰트 크기
          mb: 2,
          fontFamily: 'Pretendard',
          fontWeight: 500,
          px: 2, // 좌우 패딩 추가
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
          padding: '10px 30px',
          height: { xs: '50px', sm: '60px', md: '65px' },
          fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
          width: { xs: '80%', sm: '300px' },  // 모바일에서는 화면의 80%
          color: '#ffffff',
          textTransform: 'none',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
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
