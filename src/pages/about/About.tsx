import { Grid, Typography } from '@mui/material'
import { ServiceCard, Spliter, CommonTitle } from '../../components'
import { servicesList } from '../../mock'
import styles from './about.module.less'

type TAboutProps = {
	aboutRef: any
}
const About = ({ aboutRef }: TAboutProps) => {
	return (
		<div className={styles.aboutMain} ref={aboutRef}>
			<CommonTitle>About</CommonTitle>

			<div className={styles.shortAbout}>
				<Typography variant='body2' gutterBottom textAlign={'justify'} p={1}>
					A Young Professional graduated in BS Information Technology with fresh
					and new ideas, having strong problem solving, communication and
					interpersonal skills. I am looking for a challenging role that gives
					me an opportunity to utilize my experience, skills, and knowledge for
					the research and development in academic and industrial areas.
				</Typography>
			</div>

			<Grid container spacing={3} my={6}>
				{servicesList.map(({ title, icon, description }, index) => (
					<ServiceCard
						serviceName={title}
						icon={icon}
						description={description}
						key={`service-${index}`}
					/>
				))}
			</Grid>
			<Spliter />
		</div>
	)
}

export default About
