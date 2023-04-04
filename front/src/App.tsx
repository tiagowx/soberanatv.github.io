import './App.css';
import { Pages } from './Pages';
import { ThemeProvider } from '@mui/material';
import { themeDefault } from './Themes/themeDefault';

function App() {
  return (
    <>
    <ThemeProvider theme={themeDefault}>
      <Pages />
    </ThemeProvider>
    </>
  );
}

export default App;
