import { splitIcon } from '../../assets/icons'
import styles from './split.module.less'

export const Spliter = () => {
	return <img src={splitIcon} alt='split-icon' className={styles.spliter} />
}
