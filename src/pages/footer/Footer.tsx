import { Typography } from '@mui/material'
import { backToUpIcon } from '../../assets/icons'
import styles from './footer.module.less'

type TFooterProps = {
	handleGoToUp: () => void
}
const Footer = ({ handleGoToUp }: TFooterProps) => {
	return (
		<div className={styles.footerMain}>
			<div className={styles.backToUp} onClick={handleGoToUp}>
				<img src={backToUpIcon} alt='back-up-icon' />
				<Typography
					variant='body2'
					sx={{ my: 1, color: '#fff', fontWeight: 600 }}
				>
					Back To Top
				</Typography>
			</div>

			<Typography variant='body2' gutterBottom color={'#fff'}>
				All Right Resarved © 2023 Mustfai
			</Typography>
		</div>
	)
}

export default Footer
