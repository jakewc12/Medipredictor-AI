import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar';
import { muiTheme } from './theme';
import Heart from './pages/Heart';
import Diabetes from './pages/Diabetes';
import DiabetesResources from './pages/DiabetesResources';
import NewNavbar from './components/Navbar/NewNavbar';
import 'flowbite/dist/flowbite.css';


const App: React.FC = () => {
  
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      
      <NewNavbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="heart" element={<Heart />} />
        <Route path="diabetes" element={<Diabetes />} />
        <Route path="diabetes-resources" element={<DiabetesResources formValues={null}/>}/>
      </Routes>
    </MuiThemeProvider>
  );
};

export default App;
