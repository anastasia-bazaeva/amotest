import { useEffect, useState } from 'react'
import { Button } from '../../ui/button/button'
import { ButtonType } from '../../ui/button/types'
import styles from './offer-block.module.css'

export const OfferBlock = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isSmall = width <= 600 ? true : false;

    useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const handleClick = () => {
        console.log('click')
    }
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Вместе с <span className={styles.accent}>БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span> мы дарим:</h2>
            {isSmall ? 
            <div className={styles.gridZone}>
                <h3 className={styles.semiTitle}><span className={styles.accent}>&mdash; </span>SKYPE АУДИТ</h3>
                <h3 className={styles.semiTitle}><span className={styles.accent}>&mdash; </span>30 ВИДЖЕТОВ</h3>
                <h3 className={styles.semiTitle}><span className={styles.accent}>&mdash; </span>DASHBOARD</h3>
                <h3 className={styles.semiTitle}><span className={styles.accent}>&mdash; </span>МЕСЯЦ AMOCRM</h3>
            </div>
            :<div className={styles.gridZone}>
                <article>
                    <h3 className={styles.semiTitle}>ВИДЖЕТЫ</h3>
                    <p className={styles.text}>30 готовых решений</p>
                </article>
                <article>
                    <h3 className={styles.semiTitle}>DASHBOARD</h3>
                    <p className={styles.text}>с показателями вашего бизнеса</p>
                </article>
                <article>
                    <h3 className={styles.semiTitle}>SKYPE АУДИТ</h3>
                    <p className={styles.text}>отдела продаж и CRM системы</p>
                </article>
                <article>
                    <h3 className={styles.semiTitle}>35 ДНЕЙ</h3>
                    <p className={styles.text}>использования CRM</p>
                </article>
            </div>}
            {!isSmall && <Button text='Получить консультацию' type={ButtonType.default} onClick={handleClick}/>}
        </div>
    )
}