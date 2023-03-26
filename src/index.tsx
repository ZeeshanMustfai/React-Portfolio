import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.module.less'
import Home from './pages/Home'
import 'react-vertical-timeline-component/style.min.css'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	</React.StrictMode>
)
