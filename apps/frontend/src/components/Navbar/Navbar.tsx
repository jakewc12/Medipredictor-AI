import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { NAVBAR_MENUS } from './constants';

import { NavbarLink, Logo, StyledToolbar } from './styles';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Logo>Jacob Wu-Chen | Software Developer</Logo>

        {NAVBAR_MENUS.map((menu) => (
          <Button key={menu.text}>
            <NavbarLink to={menu.path}>{menu.text}</NavbarLink>
          </Button>
        ))}
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
