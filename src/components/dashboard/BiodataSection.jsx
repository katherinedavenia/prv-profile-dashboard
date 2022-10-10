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
          flexDirection: { xs: 'column', sm: 'row' },
          mt: { xs: '14px', sm: '2px' },
        }}
      >
        {!openEditBiodata ? (
          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '18px', md: '20px' },
              fontWeight: 400,
              color: '#969696',
              mt: { xs: '2px', sm: 0 },
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
              mt: { xs: '2px', sm: 0 },
              mr: { sm: '24px' },
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
              mr: '12px',
              mt: '5px',
            }}
          >
            👋🏼
            <Button
              onClick={() => formik.setFieldValue('gender', 0)}
              sx={{
                color: '#808080',
                backgroundColor:
                  formik.values.gender === 0 ? 'lightblue' : 'whitesmoke',
                minHeight: 0,
                height: '25px',
                p: '0 14px',
                textTransform: 'none',
                fontSize: '14px',
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
                height: '25px',
                p: '0 14px',
                textTransform: 'none',
                fontSize: '14px',
                ml: '5px',
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
              mt: { xs: '2px', sm: 0 },
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
              mr: '12px',
              mt: '5px',
            }}
          >
            🎂
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
    <Box sx={{ p: { xs: '14px 0 50px', sm: '20px 0 50px' } }}>
      <Box onClick={() => setOpenEditBiodata(true)}>
        {!openEditBiodata ? (
          <Typography sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
            {bio}
          </Typography>
        ) : (
          <Textarea
            sx={{
              height: '150px',
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
            mt: '10px',
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
