import { Box, Button } from '@mui/material'
import { useState } from 'react'
import { ProjectCard, CommonTitle, Spliter } from '../../components'
import { projectsList } from '../../mock'
import styles from './project.module.less'
type TProjectsProps = {
	projectRef: any
}
const initialCounter = 3
const Projects = ({ projectRef }: TProjectsProps) => {
	const [projectCounter, setProjectsCounter] = useState<number>(initialCounter)

	const handleShowMore = () => {
		setProjectsCounter((prev) => prev + 3)
	}
	const handleLess = () => {
		setProjectsCounter(initialCounter)
		if (projectRef.current) {
			projectRef.current.scrollIntoView()
		}
	}
	return (
		<div ref={projectRef} className={styles.projectsMain}>
			<CommonTitle>Projects</CommonTitle>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'flex-start',
					flexWrap: 'wrap',
					gap: 2,
				}}
			>
				{projectsList.slice(0, projectCounter).map((project) => {
					return <ProjectCard key={project.id} projects={project} />
				})}
			</Box>
			<Box sx={{ pt: 4, textAlign: 'center' }}>
				{projectCounter === projectsList.length ? (
					<Button variant='contained' onClick={handleLess}>
						View Less
					</Button>
				) : (
					<Button variant='contained' onClick={handleShowMore}>
						View More
					</Button>
				)}
			</Box>
			<Box textAlign={'center'} sx={{ pt: 4 }}>
				<Spliter />
			</Box>
		</div>
	)
}

export default Projects
