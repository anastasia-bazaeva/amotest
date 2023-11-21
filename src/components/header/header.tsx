import { NavLink, Link } from 'react-router-dom';
import styles from './header.module.css';
import { mainLogo1, mainLogo2, navLinks, phoneIcon, tgIcon, waIcon } from '../../utils';

export const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.navBar}>
                <NavLink to='/' className={styles.logoBar}>
                    <div className={styles.logoWrapper}>
                        <img src={mainLogo1} alt='иконка логотипа'/>
                        <img src={mainLogo2} alt='стилизованный текст логотипа Welbex'/>
                    </div>
                    <h5 className={styles.logoText}>крупный интегратор CRM в России и еще 8 странах</h5>
                </NavLink>
                <ul className={styles.navMenu}>
                    {navLinks.map((link) => {
                        return(
                            <li key={navLinks.indexOf(link)}>
                                <NavLink to={link.link}>{link.name}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={styles.contactsBar}>
                <Link to='tel:+75555555'>+7 555 555-55-55</Link>
                <ul className={styles.navMenu}>
                    <li><NavLink to='/'><img src={tgIcon} alt='иконка для связи через Telegram'/></NavLink></li>
                    <li><NavLink to='/'><img src={phoneIcon} alt='иконка для связи по телефону'/></NavLink></li>
                    <li><NavLink to='/'><img src={waIcon} alt='иконка для связи через WatsApp'/></NavLink></li>
                </ul>
            </div>
        </header>
    )
}