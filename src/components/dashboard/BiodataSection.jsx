import React from 'react';
import { Box, Typography } from '@mui/material';
import useResponsive from '../../lib/useResponsive';

const BiodataSection = () => {
  const { isMobile } = useResponsive();

  return (
    <Box sx={{ height: '100%' }}>
      <Box
        sx={{
          pl: { md: '224px' },
          pt: { xs: '80px', sm: '100px', md: '24px' },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '28px', sm: '30px', md: '36px' },
            fontWeight: 600,
          }}
        >
          Katherine Davenia
        </Typography>
        {isMobile ? (
          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '18px', md: '20px' },
              fontWeight: 400,
              color: '#969696',
              marginTop: { xs: '14px', sm: '2px' },
            }}
          >
            🏠 Tangerang Selatan
            <br />
            👋🏼 Female
            <br />
            🎂 21 April 2001
          </Typography>
        ) : (
          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '18px', md: '20px' },
              fontWeight: 400,
              color: '#969696',
              marginTop: '2px',
            }}
          >
            🏠 Tangerang Selatan &emsp;|&emsp; 👋🏼 Female &emsp;|&emsp; 🎂 21
            April 2001
          </Typography>
        )}
      </Box>
      <Box sx={{ p: { xs: '14px 0 50px', sm: '20px 0 50px' } }}>
        <Typography sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
          sint corporis. Repudiandae, reprehenderit. Ut commodi similique
          eveniet esse impedit est quasi autem, delectus tempora magni
          recusandae voluptas accusamus. Repudiandae, nihil. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Tenetur, sint corporis.
          Repudiandae, reprehenderit. Ut commodi similique eveniet esse impedit
          est quasi autem, delectus tempora magni recusandae voluptas accusamus.
          Repudiandae, nihil.
        </Typography>
      </Box>
    </Box>
  );
};

export default BiodataSection;
