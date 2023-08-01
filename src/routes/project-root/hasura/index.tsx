import { Box } from '@mui/material'
import { useProject } from 'hooks/useProject'
import { useState } from 'react'

// const StyledImg = styled('img')({})

export const Hasura = () => {
	const { project } = useProject()
	const imgPath = 'https://app.nhost.io/assets/hasuramodal.svg'
	const [isCopied, setIsCopied] = useState(false)

	async function copyTextToClipboard(text: string) {
		if ('clipboard' in navigator) {
			return await navigator.clipboard.writeText(text)
		}
	}

	const handleCopySecretKey = () => {
		copyTextToClipboard(project.hasuraPassword)
			.then(() => {
				setIsCopied(true)
				setTimeout(() => {
					setIsCopied(false)
				}, 300)
			})
			.catch(err => {
				console.log(err)
			})
	}

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
			<div className='hasura-card'>
				<img src={imgPath} alt='img' />
				<p className='hasura-card__title'>Open Hasura</p>
				<p className='hasura-card__subtitle'>
					Hasura is the dashboard you'll use to edit your schema and permissions
					as well as browse data. Copy the admin secret to your clipboard and
					enter it in the next screen.
				</p>
				<div className='hasura-card-items'>
					<div className='hasura-card-items-item--special'>
						<p>Admin secret</p>
					</div>
					<div className='hasura-card-items-item'>
						<input
							type={isCopied ? 'text' : 'password'}
							disabled={true}
							className={isCopied ? 'isCopied' : ''}
							value={project.hasuraPassword}
						></input>
						<button onClick={() => handleCopySecretKey()}>Copy</button>
					</div>
				</div>
				{/* <p>hasura pass: {project.hasuraPassword}</p> */}
				<a
					className='hasura-card__btn'
					href={`https://${project.domain}/hasura/`}
					target='_blank'
				>
					Open hasura
				</a>
			</div>
		</Box>
	)
}
