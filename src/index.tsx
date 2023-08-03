import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom'
import { AuthLayout } from './layouts/auth-layout'
import { HomeLayout } from './layouts/home-layout'
import { ProtectedLayout } from './layouts/protected-layout'
import { SingIn, SingUp } from 'routes/auth'
import { ProjectCreate, ProjectList } from 'routes/project'
import { Root } from './routes/root'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { ProjectRoot } from './routes/project-root'
import { SettingsRoot, GeneralSettings } from './routes/project-root/settings'
import { Hasura } from './routes/project-root/hasura'
import {
	AuthProvidersPage,
	AuthRoot,
	UsersPage,
} from './routes/project-root/auth'
import { Header } from './routes/root/header'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<AuthLayout />}>
			<Route element={<HomeLayout />}>
				<Route path='/' element={<SingIn />} />
				<Route path='/sing-in' element={<SingIn />} />
				<Route path='/sing-up' element={<SingUp />} />
			</Route>

			<Route path='/dashboard' element={<ProtectedLayout />}>
				<Route path='' element={<Header />}>
					<Route path='' element={<Root />}>
						<Route path='projects' element={<ProjectList />} />
					</Route>
					<Route path='projects/create' element={<ProjectCreate />} />
					<Route path='projects/:projectId' element={<ProjectRoot />}>
						<Route path='hasura' element={<Hasura />} />
						<Route path='auth' element={<AuthRoot />}>
							<Route path='' element={<UsersPage />} />
							<Route path='users' element={<UsersPage />} />
							<Route path='providers' element={<AuthProvidersPage />} />
						</Route>
						<Route path='settings' element={<SettingsRoot />}>
							<Route path='general' element={<GeneralSettings />} />
						</Route>
					</Route>
				</Route>
			</Route>
		</Route>
	)
)

const client = new ApolloClient({
	uri: 'https://app.coreup.io/hasura/v1/graphql',
	cache: new InMemoryCache(),
	credentials: 'include',
})

createRoot(document.getElementById('root') as any).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<RouterProvider router={router} />
		</ApolloProvider>
	</React.StrictMode>
)
