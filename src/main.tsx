import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, MantineProvider } from '@mantine/core';

// core styles are required for all packages
import '@mantine/core/styles.css'

const theme = createTheme({
  /** Put your mantine theme override here */
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
    <App />
    </MantineProvider>
  </React.StrictMode>,
)
