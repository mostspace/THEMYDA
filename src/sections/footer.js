import * as React from 'react';
import { Typography, Grid, Stack, Button, } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { footerLinks, socialMedia } from 'src/constants'
import { logo, logoDark, icGlobal } from 'src/assets'

const Footer = ({theme}) => {
  return (
    <Grid 
      className='mt-0 sm:mt-[40px] py-[50px] sm:py-[100px]'
      container 
      direction="row"
      spacing={5} 
      sx={{
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <Grid item md={3}>
        <Stack 
          direction="column"
          spacing={3}
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <img src={theme === 'light' ? logoDark : logo} alt='logo' className='w-[230px] object-contain cursor-pointer'/>
          <Typography variant='title' className='leading-[26px]' style={{ color: theme === 'light' ? 'black' : 'white' }}>
            Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero.
          </Typography>
          <Typography variant='title' className='' style={{ color: theme === 'light' ? 'black' : 'white' }}>
            © Imajin Theme 2023
          </Typography>
        </Stack>
      </Grid>
      {footerLinks.map((link) => (
        <Grid item md={2} key={link.title}>
          <Typography variant='h6' className='font-montBold text-[#D1C4E9] uppercase' style={{ color: theme === 'light' ? 'black' : 'white' }}>{link.title}</Typography>
          <ul className='list-none mt-4'>
            {link.links.map((item, index) => (
              <li 
                key={item.name} 
                className={`font-mont font-normal text-[16px] leading-[24px] ${theme === 'light' ? 'text-black' : 'text-white'} hover:text-secondary cursor-pointer ${index !== link.links.length - 1 ? 'mb-6' : 'mb-0'}`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </Grid>
      ))}
      <Grid item md={3} 
        direction="column" 
        spacing={3}
        sx={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Stack direction="row" sx={{ justifyContent: "center" }} spacing={2}>
          {socialMedia.map((social, index) => (
            <img
              src={social.icon}
              key={social.id}
              alt={social.id}
              className={`w-[38px] h-[38px] object-contain cursor-pointer`}
            />
          ))}
        </Stack>
        <Stack direction="row" sx={{ justifyContent: "center" }} className='w-full mt-10'>
          <Button
            id="demo-customized-button"
            className='w-[200px] border border-[#673AB7] bg-[#424242] rounded-[5px] text-white capitalize flex'
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="standard"
            startIcon={<img src={icGlobal} className='w-[20px]' />}
            endIcon={<KeyboardArrowDownIcon className='ml-2' />}
          >
            English - En
          </Button>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Footer