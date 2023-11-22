import styles from './not-found.module.css'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.error}>404</p>
            <p className={styles.text}>Запрашиваемая страница не существует</p>
            <Link className={styles.link} to='/'>На главную</Link>
        </div>
    )
}