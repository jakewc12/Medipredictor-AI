import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Image from './unnamed.jpg'
export const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
}));

export const Logo = styled.div(() => ({
  // color: 'black',
  flexGrow: 1,
}));

export const NavbarLink = styled(Link)(() => ({
  // color: '#fff',
  textDecoration: 'none',
  textTransform: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const StyledAppBar = styled(AppBar)({
  // backgroundImage: 'url(' + Image + ')',
  backgroundSize: 'cover',  // Cover the entire space of the AppBar
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center', // Center the background image
  position: 'static',
  borderRadius: '25px',
});

export const Picture = styled.div(()=>({
  backgroundColor: 'yellow',
  //backgroundImage: 'url(' + Image + ')', //change this with picture of face
  backgroundSize: 'cover',  // Cover the entire space of the AppBar
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center', // Center the background image
}));

