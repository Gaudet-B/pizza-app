import deepDish from '../assets/deep-dish.jpg'
import nyStyle from '../assets/ny-style-temp.jpg'
import sicilian from '../assets/sicilian-crust-temp.png'
import styles from './background.module.css'

const CurrentCrust = props => {

    const {crust} = props

    return (
        <div className="d-flex flex-column text-center rounded py-3 ps-2" style={{ backgroundColor: "rgba(143, 3, 3, 0.774)" }}>
            <div>
                {
                    (crust === "Sicilian") ?
                    <img 
                        src={sicilian} 
                        alt="sicilian crust"
                        height="280px"
                        width="80%"
                        className="rounded"
                    />
                    : (crust === "Deep Dish") ?
                    <img 
                        src={deepDish} 
                        alt="deep dish crust"
                        height="280px"
                        width="80%"
                        className="rounded"
                    />
                    :
                    <img
                    src={nyStyle} 
                        alt="ny style crust"
                        height="280px"
                        width="80%"
                        className="rounded"
                    />
                }
            </div>
            <p className="mx-4 my-2 text-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam eligendi, at id hic ex dolorum recusandae nam distinctio eius veniam.
            </p>
        </div>
    )
}

export default CurrentCrust
