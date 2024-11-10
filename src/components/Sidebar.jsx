// src/components/Sidebar.jsx
import React from 'react';
import { Box } from '@mui/material';

function Sidebar() {
  return (
    <Box position="fixed" right={0} top={0} p={2}>
      <img src="/side-image.jpg" alt="Side Image" width="100px" />
    </Box>
  );
}

export default Sidebar;
