import { Typography } from '@mui/material'
import {
	backToUpIcon,
	facebookIcon,
	gmailIcon,
	instagramIcon,
	linkedNewIcon,
} from '../../assets/icons'
import styles from './footer.module.less'

const Footer = () => {
	return (
		<div className={styles.footerMain}>
			<div className={styles.backToUp}>
				<img src={backToUpIcon} alt='back-up-icon' />
				<Typography
					variant='body2'
					sx={{ my: 1, color: '#fff', fontWeight: 600 }}
				>
					Back To Top
				</Typography>
			</div>

			<div className={styles.socialIcon}>
				<img src={facebookIcon} alt='fb-icon' />
				<img src={instagramIcon} alt='insta-icon' />
				<img src={gmailIcon} alt='gmail-icon' />
				<img src={linkedNewIcon} alt='linkedin-icon' />
			</div>

			<Typography variant='body2' gutterBottom color={'#fff'}>
				All Right Resarved © 2023 Mustfai
			</Typography>
		</div>
	)
}

export default Footer
