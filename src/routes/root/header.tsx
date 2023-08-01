import { AppBar, Box, CssBaseline, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { Outlet } from 'react-router-dom'

export const Header = () => {
	return (
		<>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{ zIndex: theme => theme.zIndex.drawer + 1, bgcolor: '#171D26' }}
			>
				<Container maxWidth='xl'>
					<Toolbar disableGutters variant='dense'>
						<Typography
							variant='h6'
							noWrap
							component='a'
							href='/'
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							LOGO
						</Typography>
					</Toolbar>
				</Container>
			</AppBar>
			<Box
				sx={{ bgcolor: 'rgb(23, 29, 38)' }}
				component='main'
				paddingTop={6}
				height='100vh'
				display='flex'
			>
				<Outlet />
			</Box>
		</>
	)
}
