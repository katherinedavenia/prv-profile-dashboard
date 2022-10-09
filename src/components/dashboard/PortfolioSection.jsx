import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import randomGradient from 'random-gradient';
import { Add } from '@mui/icons-material';

const PortfolioSection = () => {
  const [addExperienceisOpen, setAddExperienceisOpen] = useState(false);
  const [addEducationisOpen, setAddEducationisOpen] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        pb: '55px',
      }}
    >
      <Box
        sx={{
          width: { md: '49%' },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: '10px',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '22px', sm: '24px' },
              fontWeight: 600,
            }}
          >
            Experience
          </Typography>
          <Button
            onClick={() => setAddExperienceisOpen(true)}
            sx={{
              borderRadius: '55px',
              minWidth: 0,
              minHeight: 0,
              width: '40px',
              height: '40px',
              padding: 0,
            }}
          >
            <Add sx={{ width: '25px', height: '25px', color: '#000' }} />
          </Button>
        </Box>
        <Box
          sx={{
            height: 'fit-content',
            borderRadius: '8px',
            backgroundColor: 'whitesmoke',
            mb: '16px',
            display: 'flex',
            flexDirection: 'row',
            p: { xs: '16px 14px', sm: '16px 24px' },
          }}
        >
          <Box>
            <Box
              sx={{
                width: { xs: '55px', sm: '70px' },
                height: { xs: '55px', sm: '70px' },
                background: randomGradient('Fe'),
                opacity: 0.5,
                mr: '10px',
              }}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: '16px', sm: '20px' },
                fontWeight: 600,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              Full Stack Developer
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '14px', sm: '18px' },
                fontWeight: 400,
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              Finfolk Network
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '12px', sm: '14px' },
                fontWeight: 400,
                mt: '6px',
              }}
            >
              January 2022 - December 2022
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: 'fit-content',
            borderRadius: '8px',
            backgroundColor: 'whitesmoke',
            mb: '16px',
            display: 'flex',
            flexDirection: 'row',
            p: { xs: '16px 14px', sm: '16px 24px' },
          }}
        >
          <Box
            sx={{
              width: { xs: '55px', sm: '70px' },
              height: { xs: '55px', sm: '70px' },
              background: randomGradient('Fe'),
              opacity: 0.5,
              mr: '10px',
            }}
          />
          <Box>
            <Typography
              sx={{
                fontSize: { xs: '16px', sm: '20px' },
                fontWeight: 600,
              }}
            >
              Full Stack Developer
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '14px', sm: '18px' },
                fontWeight: 400,
              }}
            >
              Finfolk Network
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '12px', sm: '14px' },
                fontWeight: 400,
                mt: '6px',
              }}
            >
              January 2022 - December 2022
            </Typography>
          </Box>
        </Box>
        {addExperienceisOpen && (
          <Box
            sx={{
              height: 'fit-content',
              borderRadius: '8px',
              backgroundColor: 'whitesmoke',
              mb: '16px',
              display: 'flex',
              flexDirection: 'column',
              p: { xs: '16px 14px', sm: '16px 24px' },
            }}
          >
            <Typography>Add New Experience</Typography>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="filled-basic" label="Position" variant="filled" />
              <TextField
                id="filled-basic"
                label="Company Name"
                variant="filled"
              />
              <TextField
                id="filled-basic"
                label="Starting From"
                variant="filled"
                type="date"
              />
              <TextField
                id="filled-basic"
                label="Ending In"
                variant="filled"
                type="date"
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Button>Save</Button>
              <Button onClick={() => setAddExperienceisOpen(false)}>
                Cancel
              </Button>
            </Box>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          width: { md: '49%' },
          display: 'flex',
          flexDirection: 'column',
          mt: { xs: '25px', md: 0 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: '10px',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '22px', sm: '24px' },
              fontWeight: 600,
            }}
          >
            Education
          </Typography>
          <Button
            onClick={() => setAddEducationisOpen(true)}
            sx={{
              borderRadius: '55px',
              minWidth: 0,
              minHeight: 0,
              width: '40px',
              height: '40px',
              padding: 0,
            }}
          >
            <Add sx={{ width: '25px', height: '25px', color: '#000' }} />
          </Button>
        </Box>
        <Box
          sx={{
            height: 'fit-content',
            borderRadius: '8px',
            backgroundColor: 'whitesmoke',
            mb: '16px',
            display: 'flex',
            flexDirection: 'row',
            p: { xs: '16px 14px', sm: '16px 24px' },
          }}
        >
          <Box>
            <Box
              sx={{
                width: { xs: '55px', sm: '70px' },
                height: { xs: '55px', sm: '70px' },
                background: randomGradient('Fe'),
                opacity: 0.5,
                mr: '10px',
              }}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: '16px', sm: '20px' },
                fontWeight: 600,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              Purwadhika Startup & Coding School
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '14px', sm: '18px' },
                fontWeight: 400,
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              Graduated
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '12px', sm: '14px' },
                fontWeight: 400,
                mt: '6px',
              }}
            >
              January 2022 - December 2022
            </Typography>
          </Box>
        </Box>
        {addEducationisOpen && (
          <Box
            sx={{
              height: 'fit-content',
              borderRadius: '8px',
              backgroundColor: 'whitesmoke',
              mb: '16px',
              display: 'flex',
              flexDirection: 'column',
              p: { xs: '16px 14px', sm: '16px 24px' },
            }}
          >
            <Typography>Add New Education</Typography>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="filled-basic"
                label="School Name"
                variant="filled"
              />
              <TextField
                id="filled-basic"
                label="Starting From"
                variant="filled"
                type="date"
              />
              <TextField
                id="filled-basic"
                label="Ending In"
                variant="filled"
                type="date"
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Button>Save</Button>
              <Button onClick={() => setAddEducationisOpen(false)}>
                Cancel
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PortfolioSection;
