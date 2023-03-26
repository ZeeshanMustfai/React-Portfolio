import { Box, Grid, Typography } from '@mui/material'
import CommonTitle from '../../lib/commonTitle/CommonTitle'
import { Spliter } from '../../lib'
import { skillsList } from '../../mock'
import styles from './skills.module.less'

type TSkillsRef = {
	skillsRef: any
}
const Skills = ({ skillsRef }: TSkillsRef) => {
	return (
		<Grid container className={styles.skillsMain} ref={skillsRef}>
			<Grid item xs={12}>
				<CommonTitle>Skills</CommonTitle>
			</Grid>

			<Grid item xs={12} gap={6} className={styles.skills}>
				{skillsList.map(({ name, icon }, index) => {
					return (
						<Box key={`skills-${index}`} className={styles.skillSection}>
							<img src={icon} alt={name} />
							<Typography variant='h6' paddingTop={2}>
								{name}
							</Typography>
						</Box>
					)
				})}
				<Spliter />
			</Grid>
		</Grid>
	)
}

export default Skills
