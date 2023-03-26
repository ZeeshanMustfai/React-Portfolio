import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Tilt from 'react-parallax-tilt'

type TOneProjectProps = {
	name: string
	image: string
	description: string
	link: string
}

type TProjectProps = {
	projects: TOneProjectProps
}

export const ProjectCard = ({ projects }: TProjectProps) => {
	const { name, image, description, link } = projects
	return (
		<Tilt>
			<Card sx={{ maxWidth: 300, background: '#000' }}>
				<CardMedia sx={{ height: 300 }} image={image} title={name} />
				<CardContent sx={{ color: '#fff' }}>
					<Typography gutterBottom variant='h5' component='div'>
						{name}
					</Typography>
					<Typography variant='body2' color='#fff'>
						{description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small' href={link} color='secondary'>
						Read More
					</Button>
				</CardActions>
			</Card>
		</Tilt>
	)
}
