import { Typography } from '@mui/material'
import styles from './service.module.less'

type TServiceCardProps = {
	serviceName: string
	description?: string
	icon: string | undefined
}
export const ServiceCard = ({
	serviceName,
	icon,
	description,
}: TServiceCardProps) => {
	return (
		<div className={styles.serviceMain}>
			<div className={styles.serviceIcon}>
				<img src={icon} alt='services-icon' />
			</div>
			<div className={styles.service}>
				<Typography className={styles.serviceName} variant='h4'>
					{serviceName}
				</Typography>
				<Typography
					className={styles.serviceDescription}
					variant='body2'
					textAlign={'justify'}
				>
					{description ||
						'I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.'}
				</Typography>
			</div>
		</div>
	)
}
