import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import styles from '../components/background.module.css'

import pizzaCart from '../assets/pizza-cart-icon.png'
import deepDishThumb from '../assets/deepDish-crust-thumb.png'
import nyStyleThumb from '../assets/nyStyle-crust-thumb.png'
import sicilianThumb from '../assets/sicilian-crust-thumb.png'
import whiteSauceThumb from '../assets/white-sauce-thumb.png'
import pizzaSauceThumb from '../assets/pizza-sauce-thumb.png'
import marinaraSauceThumb from '../assets/marinara-sauce-thumb.png'

import Payment from '../components/Payment'


const Checkout = props => {

    // props                                 <-- ** remove unused PROPS here and from parents
    const {order, setOrder, shoppingCart, setShoppingCart, addToShoppingCart, getSessionOrDefault, getLocalOrDefault} = props

    const [orderDetails, setOrderDetails] = useState(getLocalOrDefault("shoppingCart", shoppingCart))
    const [orderTotal, setOrderTotal] = useState(0)

    const [showDetails, setShowDetails] = useState(false)
    const [step, setStep] = useState(0)

    // instantiate useNavigate
    const navigate = useNavigate()

    // handler functions:
    const handleCloseDetails = () => setShowDetails(false)

    const handleShowDetails = () => setShowDetails(true)

    const handleNext = () => setStep(step + 1)

    const handleBack = () => setStep(step - 1)

    const handleNew = () => navigate("/shop")

    // functions to retreive images based on the "order" from props
    // crust
    const getCrustImg = order => {
        let crust = order.crust
        if (crust === "NY Style") return nyStyleThumb
        else if (crust === "Deep Dish") return deepDishThumb
        else return sicilianThumb
    }
    // sauce
    const getSauceImg = order => {
        let sauce = order.sauce
        if (sauce === "Pizza Sauce") return pizzaSauceThumb
        else if (sauce === "Marinara Sauce") return marinaraSauceThumb
        else return whiteSauceThumb
    }

    const getSum = () => {
        if (!orderDetails) return
        let sum = 0
        for (let i = 0; i < orderDetails.length; i++) {
            sum += orderDetails[i].price
        }
        return sum
    }

    useEffect(() => {
        let total = getSum()
        setOrderTotal(total)
    }, [])

    return (

        <div className={styles.shop} >
            <Container className="d-flex flex-column my-3" style={{ width: "360px", padding: "0px" }}>
                <div className="bg-light rounded text-secondary d-flex flex-column text-start my-2 p-3" style={{ width: "auto" }}>
                    
                    <h2 className="text-center my-2 display-5" >Your Order:</h2>

                    {/* handle displaying active orders to user, as well as plurality of the word "pizza" */}
                    {(orderDetails.length === 1) ?
                        <p className="fs-5 text-dark text-center my-3">You have <strong className="text-danger">{orderDetails.length} pizza </strong> in your cart.</p>
                        :
                        <p className="fs-5 text-dark text-center my-3">You have <strong className="text-danger">{orderDetails.length} pizzas </strong> in your cart.</p>
                    }

                    {/* order details modal */}
                    <Button variant="danger" onClick={handleShowDetails} className="my-3" style={{ width: "70%", margin: "auto" }}>
                        <p className="fs-6 mb-0">Click to view order details</p>
                    </Button>
                    <Modal size="sm" show={showDetails} onHide={handleCloseDetails}>
                    {(step < 0  || step > orderDetails.length) ?
                    handleCloseDetails()
                    :
                    <Container style={{ backgroundColor: "rgb(143, 3, 3)", padding: "0px" }}>
                        <Modal.Header className="bg-light" closeButton>
                            <div className="fs-4 fw-bold mb-0" style={{ color: "rgb(143, 3, 3)" }} ><p className={styles.cartHeader}>PIZZA #{step + 1}</p></div>
                            <img
                                src={pizzaCart}
                                alt="small pizza icon"
                                height="40px"
                                width="40px"
                                className="mx-4"
                            />
                            <div className="fs-4 fw-bold mb-0 ms-1" style={{ color: "rgb(143, 3, 3)" }} ><p className={styles.cartHeader}>${orderDetails[step].price}</p></div>
                        </Modal.Header>
                        <Modal.Body className="text-light">
                        {(!orderDetails[step]) ?
                        null
                        :
                        <div className="d-flex flex-column text-center border border-light rounded p-3" >
                            <div className="d-flex flex-row">
                                <img
                                    src={getCrustImg(orderDetails[step])}
                                    alt=""
                                    height="70px"
                                    width="70px"
                                    className="m-1 border border-light rounded"
                                />
                                <div className="d-flex flex-row">
                                    <p className="fs-2 ms-3 mb-0 mt-3 text-wrap" >{orderDetails[step].crust.name} crust</p>
                                </div>
                            </div>
                            <div className="d-flex flex-row my-3">
                                <img
                                    src={getSauceImg(orderDetails[step])}
                                    alt=""
                                    height="70px"
                                    width="70px"
                                    className="m-1 border border-light rounded"
                                />
                                <p className="fs-2 ms-3 mb-0 mt-3 text-wrap" >{orderDetails[step].sauce.name}</p>
                                
                            </div>
                            <div className="d-flex flex-row">
                                <p className="mt-0 mb-2 me-4 fs-3" >Cheese:</p>
                                <p className="fs-6 ms-4 mb-0 mt-2">
                                {orderDetails[step].toppings.cheese.map((cheese, idx) => {
                                    if (idx == orderDetails[step].toppings.cheese.length - 1) return(
                                        <span key={idx}>{cheese} </span>
                                        )
                                    else return(
                                        <span key={idx}>{cheese}, </span>
                                    )
                                })}
                                </p>
                            </div>
                            <div className="d-flex flex-row">
                            <p className="mt-0 mb-2 me-4 fs-3" >Meat:</p>
                                <p className="fs-6 ms-5 mb-0 mt-2">
                                {orderDetails[step].toppings.meat.map((meat, idx) => {
                                    if (idx == orderDetails[step].toppings.meat.length - 1) return(
                                        <span key={idx}>{meat} </span>
                                        )
                                    else return(
                                        <span key={idx}>{meat}, </span>
                                    )
                                })}
                                </p>
                            </div>
                            <div className="d-flex flex-row mt-2">
                            <p className="mt-0 mb-2 fs-4" >Toppings:</p>
                                <p className="fs-6 ms-3 mb-0">
                                {orderDetails[step].toppings.other.map((other, idx) => {
                                    if (idx == orderDetails[step].toppings.other.length - 1) return(
                                        <span key={idx}>{other} </span>
                                        )
                                    else return(
                                        <span key={idx}>{other}, </span>
                                    )
                                })}
                                </p>
                            </div>
                        </div>
                        }
                        </Modal.Body>
                    </Container>
                    }
                    <Modal.Footer className="d-flex flex-row justify-content-between">
                        <div>
                            {(step <= 0) ? null
                            :
                            <Button variant="danger" style={{ backgroundColor: "rgb(143, 3, 3)" }} onClick={handleBack}>
                                Back
                            </Button>
                            }
                        </div>
                        <div>
                            {(step >= orderDetails.length - 1) ? null
                            :
                            <Button variant="danger" style={{ backgroundColor: "rgb(143, 3, 3)" }} onClick={handleNext}>
                                Next
                            </Button>
                            }
                        </div>
                    </Modal.Footer>
                    </Modal>


                    {/* itemized orders (w/o details) */}
                    <div className="d-flex flex-column my-4" style={{ width: "60%", margin: "auto" }}>
                    {orderDetails.map((order, idx) => {
                        return(
                            <div key={idx} className="d-flex flex-row justify-content-between" >
                                <p>pizza #{idx + 1}</p>
                                <p>{order.price}</p>
                            </div>
                        )
                    })}
                        <div className="border-top border-danger"></div>
                        <div className="d-flex flex-row justify-content-between mt-3" >
                            <p className="text-dark fs-5">Total</p>
                            <p className="text-dark fw-bold fs-5">${orderTotal}</p>
                        </div>
                    </div>

                    <Payment subTotal={orderTotal}/>

                </div>

            {/* returns user to pizza modal */}
            <div className="bg-light rounded text-center text-secondary fw-bold d-flex flex-column text-center my-2 px-3 py-4" style={{ width: "auto", height: "fit-content" }}>
                <p> . . . or</p>
                <Button className="p-2" variant="outline-danger" onClick={handleNew}>
                    Make Another Pizza!
                </Button>
            </div>
            </Container>
        </div>
    )
}

export default Checkout
