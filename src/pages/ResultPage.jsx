// src/pages/ResultPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
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


function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedChoices } = location.state || {}; // 선택한 항목 배열

  // 선택지 조합에 따라 결과 이미지 결정
  const calculateResultImage = (choices) => {
    const key = choices.join(''); // 배열을 문자열로 변환 (예: "ABAA")
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
    return images[key] || 'default-result-image.jpg'; // 선택지에 맞는 이미지 반환
  };

  const resultImage = calculateResultImage(selectedChoices || []);

  const restartTest = () => {
    navigate('/');
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" minHeight="100vh">
      <Box component="img" src={resultImage} alt="결과 이미지" maxWidth="100%" mb={2} />
      <Button variant="contained" color="primary" size="large" onClick={restartTest}>
        다시 하기
      </Button>
    </Box>
  );
}

export default ResultPage;
