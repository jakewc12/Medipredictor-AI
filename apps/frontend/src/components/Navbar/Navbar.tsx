import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { NAVBAR_MENUS } from './constants';

import { StyledAppBar, NavbarLink, Logo, StyledToolbar } from './styles';

const Navbar: React.FC = () => {
  return (
    <StyledAppBar position="static" >
      <StyledToolbar>
        <Logo>
          Disease detector
        </Logo>

        {NAVBAR_MENUS.map((menu) => (
          <Button key={menu.text}>
            <NavbarLink to={menu.path}>{menu.text}</NavbarLink>
          </Button>
        ))}
      </StyledToolbar>
    </StyledAppBar>
  );
};



export default Navbar;
