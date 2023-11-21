import { Button, ButtonType } from '../../ui/button/button'
import styles from './offer-block.module.css'

export const OfferBlock = () => {
    const handleClick = () => {
        console.log('click')
    }
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Вместе с <span className={styles.accent}>БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span> мы дарим:</h2>
            <div className={styles.gridZone}>
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
            </div>
            <Button text='Получить консультацию' type={ButtonType.default} onClick={handleClick}/>
        </div>
    )
}