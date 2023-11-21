import { phoneIcon, tgIcon, waIcon } from "../../utils"
import { NavLink, Link } from 'react-router-dom';
import styles from './contact-bar.module.css'

export enum Position {
    header = 'header',
    footer = 'footer',
}
interface ContactBarProps {
    position: Position,
}

export const ContactBar = ({position}:ContactBarProps) => {
    const barStyle = position === 'footer' ? styles.contactsColumn : styles.contactsBar;
    const iconsStyle = position === 'footer' ? `${styles.navMenu} ${styles.navMenuFooter}` 
    : styles.navMenu;

    return (
        <ul className={barStyle}>
            <li className={styles.tel}><Link to='tel:+75555555'>+7 555 555-55-55</Link></li>
            <li><ul className={iconsStyle}>
                <li><NavLink to='/'><img src={tgIcon} alt='иконка для связи через Telegram'/></NavLink></li>
                <li><NavLink to='/'><img src={phoneIcon} alt='иконка для связи по телефону'/></NavLink></li>
                <li><NavLink to='/'><img src={waIcon} alt='иконка для связи через WatsApp'/></NavLink></li>
            </ul></li>
            {position === 'footer' && <li><p className={styles.text}>Москва, Путевой проезд 3с1, к 902</p></li>}
         </ul>
    )
}