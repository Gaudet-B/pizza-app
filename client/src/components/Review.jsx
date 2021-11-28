import styles from './background.module.css'
import deepDishThumb from '../assets/deepDish-crust-thumb.png'
import nyStyleThumb from '../assets/nyStyle-crust-thumb.png'
import sicilianThumb from '../assets/sicilian-crust-thumb.png'
import whiteSauceThumb from '../assets/white-sauce-thumb.png'
import pizzaSauceThumb from '../assets/pizza-sauce-thumb.png'
import marinaraSauceThumb from '../assets/marinara-sauce-thumb.png'
import { useEffect, useState } from 'react'


const Review = props => {

    // props set globally at App.js level
    const {order} = props

    // state hooks for displaying images
    const [crustImg, setCrustImg] = useState()
    const [sauceImg, setSauceImg] = useState()

    useEffect(() => {
        getCrustImg(order)
        getSauceImg(order)
    }, [])

    // functions to retreive images based on the "order" from props
    // crust
    const getCrustImg = order => {
        let crust = order.crust
        if (crust === "NY Style") {
            setCrustImg(nyStyleThumb)
        } else if (crust === "Deep Dish") {
            setCrustImg(deepDishThumb)
        } else {
            setCrustImg(sicilianThumb)
        }
    }
    // sauce
    const getSauceImg = order => {
        let sauce = order.sauce
        if (sauce === "Pizza Sauce") {
            setSauceImg(pizzaSauceThumb)
            // console.log(orderData.sauceImg)
        } else if (sauce === "Marinara Sauce") {
            setSauceImg(marinaraSauceThumb)
        } else {
            setSauceImg(whiteSauceThumb)
        }
    }

    return (
        <div className="d-flex flex-column text-center text-light rounded py-3 px-2" style={{ backgroundColor: "rgba(143, 3, 3, 0.774)" }} >
            <div className={styles.modalImage} > </div>

            {/* top: crust and sauce */}
            <div className="d-flex flex-row justify-content-evenly my-2">

                {/* crust */}
                <div className="d-flex flex-column text-center border border-light rounded" style={{ width: "40%" }}>
                    <p className="mb-0 mt-2" >Your</p>
                    <h3 className="mt-0 mb-2 text-decoration-underline" >Crust:</h3>
                    <img 
                        src={crustImg} 
                        alt="current crust"
                        height="100px"
                        width="100px"
                        className="rounded"
                        style={{ margin: "auto" }}
                    />
                    <p>{order.crust}</p>
                </div>

                {/* sauce */}
                <div className="d-flex flex-column text-center border border-light rounded" style={{ width: "40%" }}>
                    <p className="mb-0 mt-2" >Your</p>
                    <h3 className="mt-0 mb-2 text-decoration-underline" >Sauce:</h3>
                    <img 
                        src={sauceImg} 
                        alt="current sauce"
                        height="100px"
                        width="100px"
                        className="rounded"
                        style={{ margin: "auto" }}
                    />
                    <p>{order.sauce}</p>
                </div>
            </div>

            {/* bottom: toppings */}
            <div className="d-flex flex-column border border-light rounded mx-2 mb-2 px-4">

                <p className="mb-0 mt-2" >Your</p>
                <h3 className="mt-0 mb-2 text-decoration-underline" >Toppings:</h3>

                {/* cheese and meat */}
                <div className="d-flex flex-row justify-content-between my-2 border-bottom border-light">
                    {/* cheese */}
                    <div className="d-flex flex-row text-start" style={{ width: "40%" }}>
                        <p className="fw-bold text-center">Cheese:</p>
                        <ul>
                            {(order.toppings.cheese.length > 0) ?
                                order.toppings.cheese.map((cheese, idx) => {
                                    return(
                                        <li key={idx}>{cheese}</li>
                                    )
                                })
                                // if no cheeses selected
                                :
                                <li>N / A</li>
                            
                            }
                        </ul>
                    </div>
                    {/* divider */}
                    <div className="ms-3 border-start border-light my-2" style={{ height: "inherit", width: "1px" }}></div>
                    {/* meat */}
                    <div className="d-flex flex-row text-start" style={{ width: "40%" }}>
                        <p className="fw-bold text-center">Meat:</p>
                        <ul>
                            {(order.toppings.meat.length > 0) ?
                                order.toppings.meat.map((meat, idx) => {
                                    return(
                                        <li key={idx}>{meat}</li>
                                    )
                                })
                                // if no meats selected
                                :
                                <li>N / A</li>
                            
                            }
                        </ul>
                    </div>
                </div>

                {/* other toppings */}
                <div className="d-flex flex-row text-center mx-3">
                    <p className="fw-bold">Other:</p>
                    <ul className="d-flex flex-row justify-content-evenly" style={{ width: "80%", padding: "0px" }}>
                        {/* column #1 */}
                        <div className="d-flex flex-column text-start ms-4" >
                            {(order.toppings.other.length > 1) ?
                                // first half of other toppings array
                                order.toppings.other.slice(0, Math.floor(order.toppings.other.length/2)).map((other, idx) => {
                                    return(
                                        <li key={idx}>{other}</li>
                                    )
                                })
                                :
                                // if only one column is required
                                (order.toppings.other.length === 1) ?
                                <li>{order.toppings.other[0]}</li>
                                // if no other toppings selected
                                :
                                <li>N / A</li>
                            }
                        </div>
                        {/* column #2 */}
                        <div className="d-flex flex-column text-start ms-4" >
                            {(order.toppings.other.length > 1) ?
                                // second half of other toppings array
                                order.toppings.other.slice(Math.floor(order.toppings.other.length/2)).map((other, idx) => {
                                    return(
                                        <li key={idx}>{other}</li>
                                    )
                                })
                            :
                            // null will not display to the user, but will maintain consisten style, regardless of array length
                            <li style={{ listStyle: "none", color: "transparent" }}>null</li>
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Review
