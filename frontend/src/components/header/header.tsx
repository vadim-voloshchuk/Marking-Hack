import icon from '../../common/icon.svg'
import styles from './styles.module.scss'

const Haeder=()=>{
    return(
        <div className={styles.header}>
            <img src={icon} className={styles.header__img}/>
            <div className={styles.header__label}>
                <p className={styles.header__label_text}>
                    Прогнозирование продаж
                </p>
            </div>
            <div className={styles.header__nav}>
                <a href="/main" className={styles.header__nav_text}>Главная</a>
                <a href="/contacts" className={styles.header__nav_text}>О нас</a>
            </div>
        </div>
    )
}

export default Haeder