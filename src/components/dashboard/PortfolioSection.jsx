import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import randomGradient from 'random-gradient';
import { Add, Edit, Save } from '@mui/icons-material';

const AddItemContainer = ({
  title,
  children,
  onCancelButtonClick,
  onSaveButtonClick,
}) => (
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
    <Typography sx={{ fontWeight: 600, fontSize: '20px', mb: '40px' }}>
      {title}
    </Typography>
    {children}
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        mt: '20px',
      }}
    >
      <Button
        variant="contained"
        sx={{ mr: '10px' }}
        onClick={onSaveButtonClick}
      >
        <Save
          sx={{
            height: '20px',
            width: 'auto',
            mr: '7px',
          }}
        />
        Save
      </Button>
      <Button variant="outlined" onClick={onCancelButtonClick}>
        Cancel
      </Button>
    </Box>
  </Box>
);

const PortfolioSection = ({
  experience,
  education,
  formik,
  onSaveExperience,
  onSaveEducation,
}) => {
  const [addExperienceisOpen, setAddExperienceisOpen] = useState(false);
  const [addEducationisOpen, setAddEducationisOpen] = useState(false);

  const haveExperience =
    experience.company_name || experience.starting_from || experience.ending_in;

  const haveEducation = education.school_name || education.graduation_time;

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
            {haveExperience ? (
              <Edit sx={{ width: '25px', height: '25px', color: '#000' }} />
            ) : (
              <Add sx={{ width: '25px', height: '25px', color: '#000' }} />
            )}
          </Button>
        </Box>
        {haveExperience ? (
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
                  background: randomGradient('abc'),
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
                Employee
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
                {experience.company_name}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '12px', sm: '14px' },
                  fontWeight: 400,
                  mt: '6px',
                }}
              >
                {experience.starting_from} - {experience.ending_in}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Typography
            sx={{
              width: '100%',
              textAlign: 'center',
              fontsize: '12px',
              color: 'gainsboro',
              py: '10px',
            }}
          >
            Add your experience now
          </Typography>
        )}
        {addExperienceisOpen && (
          <AddItemContainer
            title={
              haveExperience ? 'Edit Your Experience' : 'Add New Experience'
            }
            onSaveButtonClick={() => onSaveExperience()}
            onCancelButtonClick={() => setAddExperienceisOpen(false)}
          >
            <Box component="form" noValidate autoComplete="off">
              <TextField
                required
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ mb: '20px' }}
                fullWidth
                id="standard-required"
                label="Company Name"
                variant="standard"
                onChange={formik.handleChange('companyName')}
                value={formik.values.companyName}
              />
              <TextField
                required
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ mb: '20px' }}
                fullWidth
                id="standard-date"
                label="Starting From"
                variant="standard"
                type="date"
                onChange={formik.handleChange('startingFrom')}
                value={formik.values.startingFrom}
              />
              <TextField
                required
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ mb: '20px' }}
                fullWidth
                id="standard-date"
                label="Ending In"
                variant="standard"
                type="date"
                onChange={formik.handleChange('endingIn')}
                value={formik.values.endingIn}
              />
            </Box>
          </AddItemContainer>
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
            {haveEducation ? (
              <Edit sx={{ width: '25px', height: '25px', color: '#000' }} />
            ) : (
              <Add sx={{ width: '25px', height: '25px', color: '#000' }} />
            )}
          </Button>
        </Box>
        {haveEducation ? (
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
                  background: randomGradient('abcd'),
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
                {education.school_name}
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
                {education.graduation_time}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Typography
            sx={{
              width: '100%',
              textAlign: 'center',
              fontsize: '12px',
              color: 'gainsboro',
              py: '10px',
            }}
          >
            Add your education now
          </Typography>
        )}
        {addEducationisOpen && (
          <AddItemContainer
            title={haveEducation ? 'Edit Your Education' : 'Add New Education'}
            onSaveButtonClick={() => onSaveEducation()}
            onCancelButtonClick={() => setAddEducationisOpen(false)}
          >
            <Box component="form" noValidate autoComplete="off">
              <TextField
                required
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ mb: '20px' }}
                fullWidth
                id="standard-basic"
                label="School Name"
                variant="standard"
                type="text"
                onChange={formik.handleChange('schoolName')}
                value={formik.values.schoolName}
              />
              <TextField
                required
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ mb: '20px' }}
                fullWidth
                id="standard-basic"
                label="Graduation Time"
                variant="standard"
                type="date"
                onChange={formik.handleChange('graduationTime')}
                value={formik.values.graduationTime}
              />
            </Box>
          </AddItemContainer>
        )}
      </Box>
    </Box>
  );
};

export default PortfolioSection;
