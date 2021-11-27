import styles from './background.module.css'


const BackgroundSlice = props => {

    const {src} = props

    return (
        <div className={styles.slice} style={{ backgroundImage: `url(${src})` }} >
        </div>
    )
}

export default BackgroundSlice
