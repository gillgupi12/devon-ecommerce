import '@mantine/core/styles.css';
import './App.css'
import { createTheme, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import MainLayout from './layouts/main.tsx';
import { Provider } from 'react-redux';
import {store} from './stores/index.tsx';


const theme = createTheme({
  /** Put your mantine theme override here */
  colors: {
    'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
    'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
  },

});


function App() {
  return (
    <Provider store={store}>
    <div className='bg-slate-50  h-screen'>
      <MantineProvider theme={{ colors: theme.colors, }} withGlobalClasses withCssVariables>
        <Notifications />
        <MainLayout />
      </MantineProvider>
    </div>
    </Provider>
  )
}

export default App
