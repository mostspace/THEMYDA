import React from 'react';
import { InputAdornment, Typography } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import Iconify from 'src/components/iconify';
import {hero1, hero2, heroObject} from 'src/assets';

const Hero = ({theme}) => {
  return (
    <section className='w-full flex justify-center items-center relative'>
      <div className='absolute w-full max-w-[1580px] z-10'>
        <img src={hero1} className='w-[90px] sm:w-[100px] md:w-[50px] lg:w-[273px] hidden sm:block absolute left-5 -top-10 md:-bottom-[150px] hero-img-1' />
        <img src={heroObject} className='w-[70px] hidden md:block md:w-[150px] absolute left-[170px] -bottom-[10px] hero-object' />
        <img src={hero2} className='w-[90px] sm:w-[140px] lg:w-[273px] hidden sm:block  absolute right-5 md:right-[110px] -top-10 md:-top-[210px] hero-img-2 z-10' />
      </div>
      <div className='flex flex-col justify-center items-center gap-[40px] py-[62px] z-50'>
        <div className='flex flex-col justify-center items-center text-center'>
          <Typography variant="h1" className="text-[64px] sm:text-[100px] md:text-[200px] bg-gradient-to-r from-[#311B92] via-[#006064] to-[#F8BBD0] text-transparent bg-clip-text opacity-40 z-1">
            SUPPORT
          </Typography>
          <Typography variant='h1' className='font-montExtraBold text-[24px] sm:text-[32px] md:text-[64px] -mt-[42px] sm:-mt-[60px] md:-mt-[117px] z-10 hero-title' style={{ color: theme === 'light' ? 'black' : 'white' }}>
            <span>How</span>
            <span>can</span>
            <span>we</span>
            <span>help?</span>
          </Typography>
        </div>
        <OutlinedInput
          id='search-field'
          className='w-full max-w-[826px] bg-[#303030] rounded-[19px] text-white md:px-[40px] z-50'
          type='text'
          placeholder='Ask a question'
          startAdornment={
            <InputAdornment position='start'>
              <Iconify icon='eva:search-fill'
                sx={{ color: 'text.disabled', width: 20, height: 20 }}
              />
            </InputAdornment>
          }
        />
      </div>
    </section>
  )
}

export default Hero