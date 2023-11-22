import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './header.module.css';
import { mainLogo1, mainLogo2, navLinksHeader } from '../../utils';
import { ContactBar, Position } from '../contact-bar/contact-bar';

export const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isSmall = width <= 750 ? true : false;

    useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

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
                    {navLinksHeader.map((link) => {
                        return(
                            <li key={navLinksHeader.indexOf(link)} 
                            className={navLinksHeader.indexOf(link) === navLinksHeader.length - 1 ? styles.lastLink : ''}>
                                <NavLink to={link.link}>{link.name}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {!isSmall && <ContactBar position={Position.header} />}
        </header>
    )
}