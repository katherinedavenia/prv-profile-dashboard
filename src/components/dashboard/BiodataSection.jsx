import React from 'react';
import { Textarea } from '@mui/joy';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Save } from '@mui/icons-material';

const BiodataSection = ({
  formik,
  name,
  hometown,
  birthday,
  gender,
  bio,
  onBiodataSave,
  openEditBiodata,
  setOpenEditBiodata,
}) => (
  <Box
    sx={{
      height: '100%',
      cursor: 'pointer',
      '&:hover': {
        opacity: !openEditBiodata && 0.7,
      },
    }}
  >
    <Box
      sx={{
        pl: { md: '224px' },
        pt: { xs: '80px', sm: '100px', md: '24px' },
      }}
      onClick={() => setOpenEditBiodata(true)}
    >
      {!openEditBiodata ? (
        <Typography
          sx={{
            fontSize: { xs: '28px', sm: '30px', md: '36px' },
            fontWeight: 600,
            color: '#000',
            cursor: 'pointer',
          }}
        >
          {name}
        </Typography>
      ) : (
        <Textarea
          label="outlined"
          placeholder={name || "What's your name?"}
          variant="outlined"
          onChange={formik.handleChange('name')}
          value={formik.values.name}
          sx={{
            fontSize: { xs: '28px', sm: '30px', md: '36px' },
            fontWeight: 600,
            padding: '0 14px',
            mb: '14px',
          }}
        />
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          mt: { xs: '16px', md: '2px' },
        }}
      >
        {!openEditBiodata ? (
          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '18px', md: '20px' },
              fontWeight: 400,
              color: '#969696',
              mt: { xs: '2px', md: 0 },
              mr: { sm: '24px' },
            }}
          >
            🏠&emsp;&emsp;
            {hometown || 'Hometown'}
          </Typography>
        ) : (
          <Textarea
            label="outlined"
            placeholder={hometown || '🏠  Hometown'}
            variant="outlined"
            onChange={formik.handleChange('hometown')}
            value={formik.values.hometown}
            sx={{ width: 'auto', p: '7px 10px', minHeight: 0 }}
          />
        )}
        {!openEditBiodata ? (
          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '18px', md: '20px' },
              fontWeight: 400,
              color: '#969696',
              mt: { xs: '2px', md: 0 },
              mr: { sm: '24px' },
              textTransform: 'capitalize',
            }}
          >
            👋🏼&emsp;&emsp;
            {gender || 'Gender'}
          </Typography>
        ) : (
          <Box
            sx={{
              p: '7px 10px',
              color: '#808080',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'start',
              alignItems: 'center',
              mr: '12px',
              mt: { xs: '14px', md: '5px' },
            }}
          >
            <Typography sx={{ fontSize: '16px' }}>👋🏼&emsp;Gender</Typography>
            <Button
              onClick={() => formik.setFieldValue('gender', 0)}
              sx={{
                color: '#808080',
                backgroundColor:
                  formik.values.gender === 0 ? 'lightblue' : 'whitesmoke',
                minHeight: 0,
                height: '30px',
                p: '7px 14px',
                textTransform: 'none',
                fontSize: '16px',
                ml: '15px',
                '&:hover': {
                  backgroundColor: 'lightblue',
                },
              }}
            >
              Male
            </Button>
            <Button
              onClick={() => formik.setFieldValue('gender', 1)}
              sx={{
                color: '#808080',
                backgroundColor:
                  formik.values.gender === 1 ? 'mistyrose' : 'whitesmoke',
                minHeight: 0,
                height: '30px',
                p: '7px 14px',
                textTransform: 'none',
                fontSize: '16px',
                ml: '7px',
                '&:hover': {
                  backgroundColor: 'mistyrose',
                },
              }}
            >
              Female
            </Button>
          </Box>
        )}
        {!openEditBiodata ? (
          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '18px', md: '20px' },
              fontWeight: 400,
              color: '#969696',
              mt: { xs: '2px', md: 0 },
              mr: { sm: '24px' },
            }}
          >
            🎂&emsp;&emsp;
            {birthday || 'Birthday'}
          </Typography>
        ) : (
          <Box
            sx={{
              p: '7px 10px',
              color: '#808080',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'start',
              alignItems: 'center',
              mr: '12px',
              mt: '5px',
            }}
          >
            <Typography sx={{ fontSize: '16px' }}>🎂&emsp;Birthday</Typography>
            <TextField
              id="standard-date-input"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                p: '0 !important',
                minHeight: 0,
                ml: '15px',
                transform: 'translateY(-2px)',
              }}
              variant="standard"
              onChange={formik.handleChange('birthday')}
              value={formik.values.birthday}
            />
          </Box>
        )}
      </Box>
    </Box>
    <Box sx={{ p: { xs: '14px 0 50px', md: '20px 0 50px' } }}>
      <Box onClick={() => setOpenEditBiodata(true)}>
        {!openEditBiodata ? (
          <Typography sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
            {bio}
          </Typography>
        ) : (
          <Textarea
            sx={{
              minHeight: '150px',
              height: '100%',
              fontSize: { xs: '14px', sm: '16px' },
            }}
            label="outlined"
            placeholder="Tell us a little bit about you...✨🌈"
            variant="outlined"
            onChange={formik.handleChange('bio')}
            value={formik.values.bio}
          />
        )}
      </Box>
      {openEditBiodata && (
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
            onClick={() => onBiodataSave()}
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
          <Button variant="outlined" onClick={() => setOpenEditBiodata(false)}>
            Cancel
          </Button>
        </Box>
      )}
    </Box>
  </Box>
);

export default BiodataSection;
