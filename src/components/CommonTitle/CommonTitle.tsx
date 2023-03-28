import { Box } from '@mui/material'
import { ReactNode } from 'react'
import styles from './commonTitle.module.less'

type TCommonTitle = {
	children: ReactNode
}
export const CommonTitle = ({ children }: TCommonTitle) => (
	<Box className={styles.commonMain}>
		<div className={styles.button}>{children}</div>
	</Box>
)

export default CommonTitle
