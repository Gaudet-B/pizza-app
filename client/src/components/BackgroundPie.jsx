import styles from './background.module.css'


const BackgroundPie = props => {

    const {src} = props

    return (
        <div className={styles.pie} style={{ backgroundImage: `url(${src})`, backgroundSize: "cover" }} >
        </div>
    )
}

export default BackgroundPie