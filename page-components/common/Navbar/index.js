import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {
  Container,
  Flex,
  MenuContainer,
  MobileContainer,
  MobileNavContainer,
  MobileTitle,
  SubTitle,
  Title,
} from './styles';
import { Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NAV_CONTANTS from './constant';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={7}>
            <Link href="/">
              <Title>
                Vishal Laser <span className="span-title">Tech</span>
              </Title>
              <SubTitle>Precision cutting with a Laser touch</SubTitle>
            </Link>
          </Grid>
          <Grid item md={5}>
            <Flex>
              <Typography fontWeight={600}>
                <Link href="/">HOME</Link>
              </Typography>
              <Tooltip>
                <Flex onClick={handleClick}>
                  <Typography fontWeight={600}>
                    MANUFACTURING DETAILS
                  </Typography>
                  <KeyboardArrowDownIcon />
                </Flex>
              </Tooltip>
              <Typography fontWeight={600}>
                <Link href="/about-us">ABOUT</Link>
              </Typography>
              <Typography fontWeight={600}>
                <Link href="/contact">CONTACT</Link>
              </Typography>
            </Flex>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuContainer>
                {NAV_CONTANTS.map((val, index) => (
                  <Link href={`/service/${val.key}`} key={index}>
                    <MenuItem>{val.label}</MenuItem>
                  </Link>
                ))}
              </MenuContainer>
            </Menu>
          </Grid>
        </Grid>
      </Container>

      <MobileContainer>
        <Flex>
          <Link href="/">
            <MobileTitle>
              Vishal Laser <span className="span-title">Tech</span>{' '}
            </MobileTitle>
          </Link>
          <MenuIcon onClick={handleDrawer} />
          <SwipeableDrawer
            anchor="right"
            open={openDrawer}
            onClose={handleDrawer}
            onOpen={handleDrawer}
          >
            <MobileNavContainer>
              <Typography marginBottom={1} fontWeight={600}>
                <Link href="/">HOME</Link>
              </Typography>
              <Tooltip>
                <Flex onClick={handleClick}>
                  <Typography marginBottom={1} fontWeight={600}>
                    MANUFACTURING DETAILS
                  </Typography>
                  <KeyboardArrowDownIcon />
                </Flex>
              </Tooltip>
              <Typography marginBottom={1} fontWeight={600}>
                <Link href="/about-us">ABOUT</Link>
              </Typography>
              <Typography marginBottom={1} fontWeight={600}>
                <Link href="/contact">CONTACT</Link>
              </Typography>
            </MobileNavContainer>
          </SwipeableDrawer>
        </Flex>
      </MobileContainer>
    </>
  );
};

export default Navbar;
