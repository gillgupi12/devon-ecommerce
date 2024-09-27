import '@mantine/core/styles.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/login.tsx';
import RegisterPage from './components/pages/register.tsx';
import { createTheme, MantineProvider } from '@mantine/core';
import { HeaderNavBar } from './components/molecules/navbar/index.tsx';


const theme = createTheme({
  /** Put your mantine theme override here */
  colors: {
    'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
    'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
  },

});
function App() {
  return (
    <>
      <MantineProvider theme={{ colors: theme.colors, }} withGlobalClasses withCssVariables> 
        <BrowserRouter>
          <HeaderNavBar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider></>
  )
}

export default App
