import { OfferBlock } from '../../components/offer-block/offer-block'
import { Sphere } from '../../components/sphere/sphere'
import { SphereType } from '../../components/sphere/types'
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
            <Sphere type={SphereType.small}/>
            <Sphere type={SphereType.giant}/>
            <Sphere type={SphereType.medium}/>
            <Sphere type={SphereType.big}/>
            <Sphere type={SphereType.huge}/>
        </section>
    )
}