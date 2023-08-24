import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import { RouterProvider } from 'react-router-dom'
import theme from './styles/theme'
import router from './routes/router'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<RouterProvider router={router} />
				</ThemeProvider>
			</RecoilRoot>
		</QueryClientProvider>
	)
}

export default App
