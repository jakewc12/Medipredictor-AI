import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { muiTheme } from './theme';

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="projects" element={<Projects />} /> */}
        {/* <Route path="info" element={<Info />} />
        <Route path="contact" element={<contact />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MuiThemeProvider>
  );
};

export default App;
