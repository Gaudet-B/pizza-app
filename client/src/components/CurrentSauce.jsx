import whiteSauce from '../assets/white-sauce-temp.jpg'
import pizzaSauce from '../assets/pizza-sauce-temp.jpg'
import marinaraSauce from '../assets/marinara-sauce-temp.jpg'


const CurrentSauce = props => {

    // all props set globally at App.js level and are passed down to children
    const {sauce} = props

    return (
        <div className="d-flex flex-column text-center rounded py-3 ps-2" style={{ backgroundColor: "rgba(143, 3, 3, 0.774)" }}>
            <div>

                {/* demo version of application has hard-coded images with conditional rendering */}
                {
                    (sauce.name === "White Sauce") ?
                    <img 
                        src={whiteSauce} 
                        alt="white sauce"
                        height="280px"
                        width="80%"
                        className="rounded"
                    />
                    : (sauce.name === "Marinara Sauce") ?
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

            {/* descriptions of each sauce - NEEDS CONDITIONAL RENDERING! */}
            <p className="mx-4 my-2 text-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam eligendi, at id hic ex dolorum recusandae nam distinctio eius veniam.
            </p>
        </div>
    )
}

export default CurrentSauce
