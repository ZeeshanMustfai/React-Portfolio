import { Typography } from '@mui/material'
import { ServiceCard } from '../../components'
import { Spliter } from '../../lib'
import CommonTitle from '../../lib/commonTitle/CommonTitle'
import { servicesList } from '../../mock'
import styles from './about.module.less'

const About = () => {
	return (
		<div className={styles.aboutMain}>
			<CommonTitle>About</CommonTitle>

			<div className={styles.shortAbout}>
				<Typography variant='body2' gutterBottom>
					Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
					varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
					quis libero viverra facilisis ut ac est.
				</Typography>
			</div>

			<Spliter />
			<div className={styles.services}>
				{servicesList.map(({ title, icon }) => (
					<ServiceCard serviceName={title} icon={icon} />
				))}
			</div>
			<Spliter />
		</div>
	)
}

export default About
