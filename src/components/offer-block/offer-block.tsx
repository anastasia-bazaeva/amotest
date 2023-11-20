import styles from './offer-block.module.css'

export const OfferBlock = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Вместе с <span className={styles.accent}>БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span> мы дарим:</h2>
            <div className={styles.gridZone}>
                <article>
                    <h3>ВИДЖЕТЫ</h3>
                    <p>30 готовых решений</p>
                </article>
                <article>
                    <h3>DASHBOARD</h3>
                    <p>с показателями вашего бизнеса</p>
                </article>
                <article>
                    <h3>SKYPE АУДИТ</h3>
                    <p>отдела продажи CRM системы</p>
                </article>
                <article>
                    <h3>35 ДНЕЙ</h3>
                    <p>использования CRM</p>
                </article>
            </div>
        </div>
    )
}