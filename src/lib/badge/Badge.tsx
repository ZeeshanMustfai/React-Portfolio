import { ReactNode } from 'react'
import styles from './badge.module.less'

type TBadgeProps = {
	children: ReactNode
}
export const Badge = ({ children }: TBadgeProps) => {
	return <div className={styles.badgeMain}>{children}</div>
}
