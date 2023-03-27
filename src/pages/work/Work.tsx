import { Box, Button } from '@mui/material'
import { ProjectCard } from '../../components'
import { CommonTitle } from '../../lib'
import { projectsList } from '../../mock'
type TWorkProps = {
	projectRef: any
}
const Work = ({ projectRef }: TWorkProps) => {
	return (
		<div ref={projectRef}>
			<CommonTitle>Projects</CommonTitle>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					flexWrap: 'wrap',
					gap: 2,
				}}
			>
				{projectsList.map((project) => {
					return <ProjectCard key={project.id} projects={project} />
				})}
			</Box>
			<Box sx={{ pt: 4, textAlign: 'right' }}>
				<Button variant='contained'>View More</Button>
			</Box>
		</div>
	)
}

export default Work
