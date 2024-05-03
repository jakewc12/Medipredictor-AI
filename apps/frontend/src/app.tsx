import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const App: React.FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
      text: {
        primary: green[500],
        secondary: 'rgba(132, 146, 166, 1)',
        disabled: 'rgba(60, 72, 88, 0.38)',
      }
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="projects" element={<Projects />} /> */}
        {/* <Route path="info" element={<Info />} /> */}
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MuiThemeProvider>
  );
};

export default App;
