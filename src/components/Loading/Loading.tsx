import styles from './Loading.module.css'

const Loading = () => (
    <div className={styles.loadingBody}>
        Loading<div className={styles.dots}><span>.</span><span>.</span><span>.</span></div>
    </div>
)

export default Loading;