import { Link } from 'react-router-dom';
import styles from './footer.module.css'
import { FooterColumn } from '../footer-column/footer-column';
import { navLinksAbout, navLinksFooterColumn1, navLinksFooterColumn2 } from '../../utils';
import { ContactBar, Position } from '../contact-bar/contact-bar';

export const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.columnBar}>
                <div className={styles.navBar}>
                    <FooterColumn arr={navLinksAbout} title='О КОМПАНИИ'/>
                    <FooterColumn arr={navLinksFooterColumn1} title='МЕНЮ'/>
                    <FooterColumn arr={navLinksFooterColumn2} title=''/>
                </div>
                <ul className={styles.columnList}>КОНТАКТЫ
                    <ContactBar position={Position.footer}/>
                </ul>
            </div>
            <div className={styles.creditsBar}>
                <p className={styles.creditsText}>&#169;WELBEX 2022. Все права защищены.</p>
                <Link className={styles.creditsLink} to='/'>Политика конфиденциальности</Link>
            </div>
        </footer>
    )
}