import { Typography, Button, Box, Input } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { styled } from '@mui/material/styles'

import { useProject } from 'hooks/useProject'
import { useCopy } from 'hooks/useCopy'


const StyledImg = styled('img')({})

export const Hasura = () => {
	const { project } = useProject()
	const { handleCopyText } = useCopy(project.hasuraPassword)

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				flexGrow: 1,
				p: 3,
				alignItems: 'center',
			}}
		>
			<StyledImg
				src='https://app.nhost.io/assets/hasuramodal.svg'
				alt='Photo by Markus Spiske from Pexels'
				sx={{
					width: 72,
				}}
			/>
			<Typography
				paragraph={true}
				sx={{
					color: 'white',
					fontWeight: 600,
					fontSize: '1.125rem',
					marginTop: '15px',
				}}
			>
				Open Hasura
			</Typography>
			<Typography
				sx={{
					color: 'rgb(223, 236, 245)',
					textAlign: 'center',
					width: '30%',
				}}
				paragraph={true}
			>
				Hasura is the dashboard you'll use to edit your schema and permissions
				as well as browse data. Copy the admin secret to your clipboard and
				enter it in the next screen.
			</Typography>

			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					columnGap: '90px',
					borderTop: '1px solid rgb(47, 54, 61)',
					marginTop: '10px',
					borderBottom: '1px solid rgb(47, 54, 61)',
					paddingTop: '7px',
					paddingBottom: '7px',
				}}
			>
				<Box>
					<Typography
						sx={{
							color: 'white',
						}}
					>
						Admin secret
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						columnGap: '13px',
					}}
				>
					<Input
						type={'password'}
						disabled={false}
						disableUnderline={true}
						defaultValue={project.hasuraPassword}
						sx={{ color: 'white' }}
					></Input>
					<Button onClick={() => handleCopyText()}>
						<ContentCopyIcon />
					</Button>
				</Box>
			</Box>
			<Button
				href={`https://${project.domain}/hasura/`}
				target='_blank'
				size='large'
				sx={{
					marginTop: '20px',
					width: '32%',
					backgroundColor: 'rgb(56, 136, 255)',
					color: 'white',
					'&.MuiButton-root:hover': { bgcolor: 'rgb(56, 136, 255)' },
				}}
			>
				Open hasura
			</Button>
		</Box>
	)
}
