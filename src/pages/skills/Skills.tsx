import { Box, Button, Card, Grid, Typography } from '@mui/material'
import { Spliter, CommonTitle } from '../../components'
import { skillsList } from '../../mock'
import styles from './skills.module.less'
import { useState } from 'react'

type TSkillsRef = {
	skillsRef: any
}
const initialCounter = 8
const Skills = ({ skillsRef }: TSkillsRef) => {
	const [counter, setCounter] = useState(initialCounter)
	const handleShowMore = () => {
		setCounter((prev) => prev + 4)
	}
	const handleLessSkills = () => {
		setCounter(initialCounter)
		if (skillsRef.current) {
			skillsRef.current.scrollIntoView()
		}
	}

	return (
		<Grid container className={styles.skillsMain} ref={skillsRef}>
			<Grid item xs={12}>
				<CommonTitle>Skills</CommonTitle>
			</Grid>

			<Grid item xs={12} className={styles.skills}>
				{skillsList.slice(0, counter).map(({ name, icon }, index) => {
					return (
						<Card elevation={3} className={styles.skillCard}>
							<Box key={`skills-${index}`} className={styles.skillSection}>
								<img src={icon} alt={name} width={96} height={96} />
								<Typography variant='h6' paddingTop={2}>
									{name}
								</Typography>
							</Box>
						</Card>
					)
				})}
			</Grid>
			<Grid item xs={12} textAlign='center' mt={4}>
				{counter === skillsList.length ? (
					<Button variant='contained' size='large' onClick={handleLessSkills}>
						Show less
					</Button>
				) : (
					<Button variant='contained' onClick={handleShowMore}>
						Show More
					</Button>
				)}
			</Grid>
			<Grid item xs={12} textAlign='center' mt={4}>
				<Spliter />
			</Grid>
		</Grid>
	)
}

export default Skills
