import { NavLink } from 'react-router-dom';
import styles from './footer-column.module.css'

type LinkInfo = {
    link: string;
    name: string;
}

interface FooterColumnProps {
    arr: Array<LinkInfo>,
    title?: string,
}

export const FooterColumn = ({arr, title }: FooterColumnProps) => {
    const columnStyle = !title ? `${styles.navList} ${styles.noTitleList}` : styles.navList;
    return (
        <ul className={columnStyle}>{title}
            {arr.map((link) => {
                return (
                    <li 
                    key={`${title}-${arr.indexOf(link)}`} 
                    className={arr.indexOf(link) === 0 ? styles.topLink : ''}>
                        <NavLink className={styles.linkText} to={link.link} >{link.name}</NavLink>
                    </li>
                    )
            })}
        </ul>
    )
}