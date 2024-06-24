import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import styles from './App.module.css';
import { useState } from 'react';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
import Layout from './components/layout/Layout';

export const HOME = "/";
export const GITHUB_TABLE_ID = 'githubtable';
export const CONTACT_ID = 'contact';

/*
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      // default: '#f6eee3'
    },
    primary: {
      // main: 'orange'
    }
  }
});
*/

const theme = createTheme();

function App() {
  const [selectedItem, setSelectedItem] = useState();

  function handleScrollTo(id, behavior = 'smooth') {
    setSelectedItem(id);
    const section = document.getElementById(id);
    if (section) {
      const offset = -65;
      const y = section.getBoundingClientRect().top + window.scrollY + offset;
      // section.scrollIntoView({
      //   behavior: 'smooth'
      // });
      window.scrollTo({top: y, behavior});
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <div className={styles.container}>
        <BrowserRouter>
          <ScrollToTop />
          
          <Layout selectedItem={selectedItem} handleScrollTo={handleScrollTo}>
            <Routes>
              <Route path={HOME} element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
