import { Link } from 'react-router-dom'
import deepDish from '../deep-dish.jpg'
import nyStyle from '../ny-style-temp.jpg'
import sicilian from '../sicilian-crust-temp.png'


const Pizza = () => {
    return (
        <div className="d-flex flex-column bg-danger text-center" style={{ height: "fit-content", width: "55%" }}>
            <h3 className="display-5 my-2">Step 1!</h3>
            <h5 className="text-light my-3">Select Crust:</h5>
                <div className="d-flex flex-column my-3"  style={{ width: "fit-content", margin: "auto" }}>
                    <Link>
                        <img
                            src={nyStyle}
                            alt=""
                            href="/"
                            height="100px"
                            width="100px"
                            margin="auto"
                        />
                        <p>New York Style</p>
                    </Link>
                </div>
                <div className="d-flex flex-column my-3"  style={{ width: "fit-content", margin: "auto" }}>
                    <Link className="text-decoration-none text-light">
                        <img
                            src={deepDish}
                            alt=""
                            href="/"
                            height="100px"
                            width="100px"
                            margin="auto"
                        />
                        <p>Deep Dish</p>
                    </Link>
                </div>
                <div className="d-flex flex-column my-3" style={{ width: "fit-content", margin: "auto" }}>
                    <img
                        src={sicilian}
                        alt=""
                        href="/"
                        height="100px"
                        width="100px"
                        margin="auto"
                    />
                    <Link>Sicilian</Link>
                </div>
        </div>
    )
}

export default Pizza
