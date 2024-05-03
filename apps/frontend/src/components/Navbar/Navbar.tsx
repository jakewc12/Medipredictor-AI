import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { NAVBAR_MENUS } from './constants';

import { StyledAppBar, NavbarLink, Logo, StyledToolbar, Picture } from './styles';

const Navbar: React.FC = () => {
  return (
    // <a href="https://neudorms.com/">
    <StyledAppBar position="static" >
      <StyledToolbar>
        {/* put profile picture in this logo */}
        <Logo>
          Jacob Wu-Chen | Software Developer
        </Logo>

        {NAVBAR_MENUS.map((menu) => (
          <Button key={menu.text}>
            <NavbarLink to={menu.path}>{menu.text}</NavbarLink>
          </Button>
        ))}
      </StyledToolbar>
      {/* add picture that is hyperlinkable */}
    </StyledAppBar>
    //  </a>
  );
};



export default Navbar;
