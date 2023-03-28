import { Grid, Typography } from '@mui/material'
import styles from './header.module.less'
import { linkedInIcon, githubIcon } from '../../assets/icons'
import { profileImage } from '../../assets/images'
import ZeeshanResume from '../../assets/pdf/ZeeshanMustfai.pdf'
import { Badge } from '..'
export const Header = () => {
	return (
		<Grid container className={styles.headerMain}>
			<Grid item md={6} className={styles.infoSection}>
				<Typography className={styles.greeting}> Hi, I am</Typography>
				<div className={styles.profileInfo}>
					<Typography className={styles.devName}> Zeeshan Mustfai</Typography>
					<Typography className={styles.designation}>
						Front end devloper / React js & Next js
					</Typography>
				</div>

				<div className={styles.profilesLink}>
					<Badge>
						<a
							href={ZeeshanResume}
							download='ZeeshanResume'
							target={'_blank'}
							className={styles.downloadResume}
						>
							<Typography
								fontWeight={800}
								variant={'h6'}
								textAlign='center'
								padding={2}
							>
								Resume
							</Typography>
						</a>
					</Badge>
					<Badge>
						<a
							href='https://github.com/ZeeshanMustfai'
							className={styles.goToLink}
						>
							<img src={githubIcon} alt='icon' />
						</a>
					</Badge>
					<Badge>
						<a
							href='https://www.linkedin.com/in/zeeshan-mustfai-2bb4aaa9/'
							className={styles.goToLink}
						>
							<img src={linkedInIcon} alt='icon' />
						</a>
					</Badge>
				</div>
			</Grid>

			<Grid item md={6} className={styles.imageSection}>
				<img src={profileImage} alt='profile' width={'100%'} height={'100%'} />
			</Grid>
		</Grid>
	)
}
