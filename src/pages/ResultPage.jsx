// src/pages/ResultPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import { useTestContext } from '../contexts/context';
import resultImage1 from '../images/result-image-1.png';
import resultImage2 from '../images/result-image-2.png';
import resultImage3 from '../images/result-image-3.png';
import resultImage4 from '../images/result-image-4.png';
import resultImage5 from '../images/result-image-5.png';
import resultImage6 from '../images/result-image-6.png';
import resultImage7 from '../images/result-image-7.png';
import resultImage8 from '../images/result-image-8.png';
import resultImage9 from '../images/result-image-9.png';
import resultImage10 from '../images/result-image-10.jpeg';
import resultImage11 from '../images/result-image-11.png';
import resultImage12 from '../images/result-image-12.png';
import resultImage13 from '../images/result-image-13.png';
import resultImage14 from '../images/result-image-14.png';
import resultImage15 from '../images/result-image-15.png';
import resultImage16 from '../images/result-image-16.png';
import '../styles/fonts.css';

function ResultPage() {
  const navigate = useNavigate();
  const { selectedChoices, resetChoices } = useTestContext();

  // 선택지 조합에 따라 결과 이미지 결정
  const calculateResultImage = (choices) => {
    const key = choices.join('');
    const images = {
      'AAAA': resultImage1,
      'AAAB': resultImage2,
      'AABA': resultImage3,
      'AABB': resultImage4,
      'ABAA': resultImage5,
      'ABAB': resultImage6,
      'ABBA': resultImage7,
      'ABBB': resultImage8,
      'BAAA': resultImage9,
      'BAAB': resultImage10,
      'BABA': resultImage11,
      'BABB': resultImage12,
      'BBAA': resultImage13,
      'BBAB': resultImage14,
      'BBBA': resultImage15,
      'BBBB': resultImage16,
    };
    return images[key] || 'default-result-image.jpg';
  };

  const resultImage = calculateResultImage(selectedChoices);

  const restartTest = () => {
    resetChoices();
    navigate('/');
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" minHeight="100vh">
      <Box component="img" src={resultImage} alt="결과 이미지" maxWidth="100%" mb={2} />
      <Button 
        variant="contained" 
        size="large" 
        onClick={restartTest}
        startIcon={<ReplayIcon sx={{ fontSize: '2rem' }} />}
        sx={{
          borderRadius: '50px',
          padding: '10px 60px',
          height: '65px',
          fontSize: '1.8rem',
          color: '#ffffff',
          textTransform: 'none',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          width: '400px',
          backgroundColor: '#F0B249',
          fontFamily: 'Pretendard',
          '&:hover': {
            backgroundColor: '#d9a242',
          },
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        다시하기 重来
      </Button>
    </Box>
  );
}

export default ResultPage;
