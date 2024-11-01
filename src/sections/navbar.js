import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Box, Container, Grid, Drawer, IconButton, styled, Button, Divider } from "@mui/material";
import ThemeSwitch from "src/components/theme-switch";
import { logo, logoDark } from "src/assets";
import { navLinks } from 'src/constants';
import HamburgerIcon from 'src/assets/icons/HamburgerIcon';
import styles from 'src/style';

const Navbar = ({ theme, toggleTheme }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 30 ? true : false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <>
      <Box
        sx={{
          width: 250,
          display: "flex",
          flexDirection: 'column',
          alignItems: "start",
          gap: "14px",
          padding: '30px 16px 15px 16px'
        }}
      >
        <Button className="w-full uppercase bg-[#D1C4E9] text-[#651FFF] rounded-full px-[58px] py-[7px] text-[16px] font-montSemiBold">Login</Button>
        <Button className="w-full uppercase bg-[#D1C4E9] text-[#651FFF] rounded-full px-[58px] py-[7px] text-[16px] font-montSemiBold">Register</Button>
        <ThemeSwitch toggleTheme={toggleTheme} theme={theme}/>
      </Box>
      <Divider />
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {navLinks.map((link) => (
          <ScrollLink
            key={link.title}
            to={link.href}
            smooth={'true'}
            duration={500}
            offset={-70}
            onClick={toggleDrawer(false)}
            style={{
              display: "block",
              padding: "16px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "400",
              color: theme === 'light' ? 'black' : 'white',
              cursor: "pointer",
            }}
          >
            {link.title}
          </ScrollLink>
        ))}
      </Box>
    </>
  );

  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexStart} !px-0`}>
        <div className={`${styles.boxWidth}`}>
          <Container
            maxWidth="xl"
            className={`header-container ${isFixed ? `fixed ${theme === 'dark' ? 'bg-[#0c072475]' : 'bg-white'} border border-[#ffffff26] rounded-t-none border-t-0` : 'relative mt-[16px] bg-transparent border-none'} backdrop-blur-lg rounded-[8px]`}
            sx={{
              top: { xs: '0', md: '0' },
              left: { xs: '0', md: '50%' },
              zIndex: '999',
              transform: { xs: 'unset', md: 'translateX(-50%)' },
              padding: { xs: '16px', md: '1em' },
              width: { xs: '100%', md: '100%' },
              boxShadow: isFixed ? { xs: '0 2px 4px rgba(0, 0, 0, 0.1)', md: '0 4px 8px rgba(0, 0, 0, 0.1)' } : 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <Grid container alignItems={"center"}>
              <Grid item xs={6} lg={2}>
                <Box sx={{ width: "200px" }}>
                  <ScrollLink to="/" smooth={'true'} duration={500} offset={-70} style={{display: "flex", alignItems: "center", gap: '1rem', cursor: "pointer"}}>
                    <StyledImage src={theme === 'dark' ? logo : logoDark} alt="Logo" style={{ cursor: "pointer", width: "260px" }} />
                  </ScrollLink>
                </Box>
              </Grid>
              <Grid item md={8} sx={{ display: { xs: "none", lg: "block" } }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: {
                      xs: "1rem",
                      lg: "2.5rem",
                    },
                    paddingLeft: "50px"
                  }}
                >
                  {navLinks.map((link, index) => (
                    <ScrollLink
                      className={`${theme === 'light' ? 'text-black' : 'text-white'} font-mont link-hover-effect`}
                      key={index}
                      to={link.href}
                      smooth={'true'}
                      duration={500}
                      offset={-70}
                      style={{
                        fontSize: "16px",
                        cursor: "pointer",
                        position: "relative",
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {link.title}
                    </ScrollLink>
                  ))}
                </Box>
              </Grid>
              <Grid item md={2} sx={{ display: { xs: "none", lg: "block" } }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "12px",
                  }}
                >
                  <Button className="uppercase bg-transparent rounded-full px-[40px] py-[7px] text-[16px] font-mont" style={{ color: theme === 'light' ? 'black' : 'white' }}>Login</Button>
                  <Button className="uppercase bg-[#D1C4E9] text-[#651FFF] rounded-full px-[58px] py-[7px] text-[16px] font-montSemiBold">Register</Button>
                  <Divider className="w-[2px] h-[25px] bg-[#D8D8D8] opacity-30" />
                  <ThemeSwitch toggleTheme={toggleTheme} theme={theme} />
                </Box>
              </Grid>
              <Grid item xs={6} sx={{ 
                display: { xs: "flex", lg: "none" },
                justifyContent: 'flex-end'
              }}>
                <IconButton onClick={toggleDrawer(true)}>
                  <HamburgerIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerList()}
      </Drawer>
    </>
  );
};

export default Navbar;

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%', 
  maxWidth: '200px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '130px',
  },
}));