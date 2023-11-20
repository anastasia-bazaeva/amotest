import { OfferBlock } from '../offer-block/offer-block'
import styles from './main-page.module.css'

export const MainPage = () => {
    return (
        <section className={styles.wrapper} aria-label='главная страница с продающим предложением'>
            <div>
                <h2>Зарабатывайте больше</h2>
                <h2>с WELBEX</h2>

                <p>Развиваем и контролируем продажи за вас</p>
            </div>
            <OfferBlock />
        </section>
    )
}