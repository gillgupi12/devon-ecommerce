import '@mantine/core/styles.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/login.tsx';
import RegisterPage from './components/pages/register.tsx';
import { createTheme, MantineProvider } from '@mantine/core';


const theme = createTheme({
  /** Put your mantine theme override here */
});
function App() {
  return (
    <>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<App />} /> {/* Example for main app route */}
        </Routes>
      </BrowserRouter>
    </MantineProvider></>
  )
}

export default App
