import Chart from '../../components/chart/chart'
import Header from '../../components/header/header'
import Menu from '../../components/menu/Menu'
import CustomTable from '../../components/table/table'

import styles from './styles.module.scss'

export const Main=()=>{
    return(
        <div className={styles.main}>
            <Header/>
            <div className={styles.content}>
            <Menu/>
            <div className={styles.content__stat}>
                
            <Chart/>
            <CustomTable/>
            </div>
            </div>
        </div>
    )

}

export default Main