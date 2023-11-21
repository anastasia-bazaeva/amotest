import { OfferBlock } from '../offer-block/offer-block'
import styles from './main-page.module.css'

export const MainPage = () => {
    return (
        <section className={styles.wrapper} aria-label='главная страница с продающим предложением'>
            <div className={styles.column}>
                <h2 className={styles.title}>Зарабатывайте больше
                <p className={styles.accent}>с WELBEX</p></h2>
                <p className={styles.text}>Развиваем и контролируем продажи за вас</p>
            </div>
            <OfferBlock />
        </section>
    )
}