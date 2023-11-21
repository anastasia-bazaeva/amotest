import styles from './sphere.module.css'
import { SphereType } from './types'

interface SphereProps {
    type: SphereType
}

export const Sphere = ({type}:SphereProps) => {
    const style = () => {
        if (type === SphereType.medium) return `${styles.sphere} ${styles.medium}`
        if (type === SphereType.small) return `${styles.sphere} ${styles.small}`
        if (type === SphereType.big) return `${styles.sphere} ${styles.big}`
        if (type === SphereType.huge) return `${styles.sphere} ${styles.huge}`
        if (type === SphereType.giant) return `${styles.sphere} ${styles.giant}`
    }

    return (
        <div className={style()}></div>
    )
}