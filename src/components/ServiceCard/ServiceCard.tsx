import { Grid, Typography } from '@mui/material'
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
		<Grid
			item
			className={styles.serviceMain}
			xs={12}
			sm={6}
			md={4}
			sx={{
				display: 'flex',
				flexDirection: { xs: 'column', sm: 'row' },
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
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
					{description}
				</Typography>
			</div>
		</Grid>
	)
}
