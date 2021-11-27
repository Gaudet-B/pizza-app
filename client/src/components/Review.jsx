import styles from './background.module.css'
import pizzaLogo from '../assets/pizza-logo-temp.jpg'
import pizzaReview from '../assets/pizza-review-temp.png'
import deepDish from '../assets/deep-dish.jpg'
import nyStyle from '../assets/ny-style-temp.jpg'
import sicilian from '../assets/sicilian-crust-temp.png'
import whiteSauce from '../assets/white-sauce-temp.jpg'
import pizzaSauce from '../assets/pizza-sauce-temp.jpg'
import marinaraSauce from '../assets/marinara-sauce-temp.jpg'
import deepDishThumb from '../assets/deepDish-crust-thumb.png'
import nyStyleThumb from '../assets/nyStyle-crust-thumb.png'
import sicilianThumb from '../assets/sicilian-crust-thumb.png'
import whiteSauceThumb from '../assets/white-sauce-thumb.png'
import pizzaSauceThumb from '../assets/pizza-sauce-thumb.png'
import marinaraSauceThumb from '../assets/marinara-sauce-thumb.png'
import { useEffect, useState } from 'react'


const Review = props => {

    const {order, setOrder} = props

    const [crustImg, setCrustImg] = useState()
    const [sauceImg, setSauceImg] = useState()

    // const [orderData, setOrderData] = useState({
    //     crustImg: "",
    //     sauceImg: ""
    // })
    // const [hidden, setHidden] = useState(true)

    useEffect(() => {
        // let toppings = order.toppings
        getCrustImg(order)
        getSauceImg(order)
    }, [])

    const getCrustImg = order => {
        let crust = order.crust
        if (crust === "NY Style") {
            setCrustImg(nyStyleThumb)
            // console.log(orderData.crustImg)
        } else if (crust === "Deep Dish") {
            setCrustImg(deepDishThumb)
        } else {
            setCrustImg(sicilianThumb)
        }
    }

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

    const handleOver = e => {
        // document.getElementById("").nextElementSibling
        e.target.nextElementSibling.setAttribute("class", `text-light`)
        // e.target.nextElementSibling.setAttribute("style", `background-color: #f8f9fa; color: red;`)
    }

    const handleOut = e => {
        e.target.nextElementSibling.removeAttribute("class")
        // e.target.nextElementSibling.removeAttribute("style")
        e.target.nextElementSibling.setAttribute("style", "color: transparent")
    }

    return (
        <div className="d-flex flex-column text-center text-light rounded py-3 px-2" style={{ backgroundColor: "rgba(143, 3, 3, 0.774)" }} >
            <div className={styles.modalImage} >
                {/* <img 
                    src={pizzaLogo} 
                    alt="p!zza logo"
                    height="280px"
                    width="80%"
                    className="rounded"
                /> */}
            </div>
            <div className="d-flex flex-row justify-content-evenly my-2">
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
                        onMouseOver={handleOver}
                        onMouseOut={handleOut}
                    />
                    <p style={{ color: "transparent" }}>{order.crust}</p>
                    {/* <p>{order.crust}</p> */}
                </div>
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
                        onMouseOver={handleOver}
                        onMouseOut={handleOut}
                    />
                    <p style={{ color: "transparent" }}>{order.sauce}</p>
                </div>
            </div>
            <div className="d-flex flex-column border border-light rounded mx-2 mb-2 px-4">
                <p className="mb-0 mt-2" >Your</p>
                <h3 className="mt-0 mb-2 text-decoration-underline" >Toppings:</h3>
                <div className="d-flex flex-row justify-content-between my-2 border-bottom border-light">
                    <div className="d-flex flex-row text-start" style={{ width: "40%" }}>
                        <p className="fw-bold text-center">Cheese:</p>
                        <ul>
                            {(order.toppings.cheese.length > 0) ?
                                order.toppings.cheese.map((cheese, idx) => {
                                    return(
                                        <li key={idx}>{cheese}</li>
                                    )
                                })
                                :
                                <li>N / A</li>
                            
                            }
                        </ul>
                    </div>
                    <div className="ms-3 border-start border-light my-2" style={{ height: "inherit", width: "1px" }}></div>
                    <div className="d-flex flex-row text-start" style={{ width: "40%" }}>
                        <p className="fw-bold text-center">Meat:</p>
                        <ul>
                            {(order.toppings.meat.length > 0) ?
                                order.toppings.meat.map((meat, idx) => {
                                    return(
                                        <li key={idx}>{meat}</li>
                                    )
                                })
                                :
                                <li>N / A</li>
                            
                            }
                        </ul>
                    </div>
                </div>
                <div className="d-flex flex-row text-center mx-3">
                    <p className="fw-bold">Other:</p>
                    <ul className="d-flex flex-row justify-content-evenly" style={{ width: "80%", padding: "0px" }}>
                        <div className="d-flex flex-column text-start ms-4" >
                            {(order.toppings.other.length > 1) ?
                                order.toppings.other.slice(0, Math.floor(order.toppings.other.length/2)).map((other, idx) => {
                                    return(
                                        <li key={idx}>{other}</li>
                                    )
                                })
                                :
                                (order.toppings.other.length === 1) ?
                                <li>{order.toppings.other[0]}</li>
                                :
                                <li>N / A</li>
                            
                            }
                        </div>
                        <div className="d-flex flex-column text-start ms-4" >
                            {(order.toppings.other.length > 1) ?
                                order.toppings.other.slice(Math.floor(order.toppings.other.length/2)).map((other, idx) => {
                                    return(
                                        <li key={idx}>{other}</li>
                                    )
                                })
                            :
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
