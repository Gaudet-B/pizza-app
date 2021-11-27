import whiteSauce from '../assets/white-sauce-temp.jpg'
import pizzaSauce from '../assets/pizza-sauce-temp.jpg'
import marinaraSauce from '../assets/marinara-sauce-temp.jpg'
import styles from './background.module.css'


const CurrentSauce = props => {

    const {sauce} = props

    return (
        <div className="d-flex flex-column text-center rounded py-3 ps-2" style={{ backgroundColor: "rgba(143, 3, 3, 0.774)" }}>
            <div>
                {
                    (sauce === "White Sauce") ?
                    <img 
                        src={whiteSauce} 
                        alt="white sauce"
                        height="280px"
                        width="80%"
                        className="rounded"
                    />
                    : (sauce === "Marinara Sauce") ?
                    <img 
                        src={marinaraSauce} 
                        alt="marinara sauce"
                        height="280px"
                        width="80%"
                        className="rounded"
                    />
                    :
                    <img
                    src={pizzaSauce} 
                        alt="pizza sauce"
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

export default CurrentSauce
