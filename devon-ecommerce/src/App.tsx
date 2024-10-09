import '@mantine/core/styles.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/auth/login.tsx';
import RegisterPage from './components/pages/auth/register.tsx';
import { createTheme, MantineProvider } from '@mantine/core';
import { HeaderNavBar } from './components/molecules/navbar/index.tsx';
import ForgotPasswordPage from './components/pages/auth/forgot-password.tsx';
import ResetPasswordPage from './components/pages/auth/reset-password.tsx';
import { Notifications } from '@mantine/notifications';
import profilePage from './components/pages/user/profile.tsx';
import productPage from './components/pages/product/index.tsx';
import aboutPage from './components/pages/about/index.tsx';
import contactPage from './components/pages/contact/index.tsx';
import FooterComponent from './components/molecules/footer/index.tsx';


const theme = createTheme({
  /** Put your mantine theme override here */
  colors: {
    'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
    'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
  },

});
function App() {
  return (
    <div className='bg-slate-50  h-screen'>
      <MantineProvider theme={{ colors: theme.colors, }} withGlobalClasses withCssVariables>
        <Notifications />
        <BrowserRouter>
          <HeaderNavBar />
          <Routes>
            <Route path="/login" Component={LoginPage} />
            <Route path="/register" Component={RegisterPage} />
            <Route path="/forgot-password" Component={ForgotPasswordPage} />
            <Route path="/reset-password/:token" Component={ResetPasswordPage} />
            <Route path="/profile/:userId" Component={profilePage} />
            <Route path="/products" Component={productPage} />
            <Route path="/about" Component={aboutPage} />
            <Route path="/contact-us" Component={contactPage} />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </MantineProvider></div>
  )
}

export default App
