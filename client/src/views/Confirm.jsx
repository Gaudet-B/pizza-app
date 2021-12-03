import styles from '../components/background.module.css'
import pizza from '../assets/pizza-review-temp.png'

const Confirm = () => {
    return (
        <div className={styles.shop}>
            <div className="d-flex flex-column bg-light rounded my-3 p-2" style={{ width: "100%" }}>
                <div className="d-flex flex-row justify-content-between" style={{ width: "inherit" }}>
                    <img 
                        src={pizza}
                        alt="pizza logo"
                        width="50px"
                        height="50px"
                        className={styles.pizzaSpin}
                    />
                    <img 
                        src={pizza}
                        alt="pizza logo"
                        width="50px"
                        height="50px"
                        className={styles.pizzaSpin}
                    />
                </div>
                <p className="display-4 text-center m-3">It's almost pizza time!</p>
                <p className="fs-4 text-center text-danger m-3">Your order has been placed and will be heading your way in 2-3 business days!</p>
                <div className="d-flex flex-row justify-content-between" style={{ width: "inherit" }}>
                    <img 
                        src={pizza}
                        alt="pizza logo"
                        width="50px"
                        height="50px"
                        className={styles.pizzaSpin}
                    />
                    <img 
                        src={pizza}
                        alt="pizza logo"
                        width="50px"
                        height="50px"
                        className={styles.pizzaSpin}
                    />
                </div>
            </div>
        </div>
    )
}

export default Confirm
