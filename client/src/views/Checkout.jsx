import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router-dom'
import styles from '../components/background.module.css'


const Checkout = props => {

    // props                                 <-- ** remove unused PROPS here and from parents
    const {order, setOrder, shoppingCart, setShoppingCart, addToShoppingCart, getSessionOrDefault, getLocalOrDefault} = props

    const [orderDetails, setOrderDetails] = useState(getLocalOrDefault("shoppingCart", shoppingCart))
    
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

    return (

        <div className={styles.shop} >
            <Container className="d-flex flex-row justify-content-between my-3" style={{ width: "inherit", padding: "0px" }}>
                <div className="bg-light rounded text-secondary d-flex flex-column text-start my-2 p-3" style={{ width: "auto" }}>
                <h2 className="text-center my-2" >Your Order:</h2>

                {/* handle displaying active orders to user, as well as plurality of the word "pizza" */}
                {(orderDetails.length === 1) ?
                    <p className="fs-6 text-dark text-center my-3">You have <strong className="text-danger">{orderDetails.length} pizza </strong> in your cart.</p>
                    :
                    <p className="fs-6 text-dark text-center my-3">You have <strong className="text-danger">{orderDetails.length} pizzas </strong> in your cart.</p>
                }

                {/* order details modal */}
                <Button variant="outline-danger" onClick={handleShowDetails} className="m-3 text-wrap">
                    Click to view order details
                </Button>
                <Modal size="sm" show={showDetails} onHide={handleCloseDetails}>
                {(step < 0  || step > orderDetails.length) ?
                handleCloseDetails()
                :
                <Container>
                    <Modal.Header closeButton>
                        PIZZA #{step + 1}
                    </Modal.Header>
                    <Modal.Body>
                    {(!orderDetails[step]) ?
                    null
                    :
                    <div className="d-flex flex-column text-center border border-light rounded">
                        <div className="d-flex flex-row">
                            <h3 className="mt-0 mb-2 text-decoration-underline" >Crust:</h3>
                            <p>{orderDetails[step].crust}</p>
                        </div>
                        <div className="d-flex flex-row">
                            <h3 className="mt-0 mb-2 text-decoration-underline" >Sauce:</h3>
                            <p>{orderDetails[step].sauce}</p>
                        </div>
                        <div className="d-flex flex-row">
                            <h3 className="mt-0 mb-2 text-decoration-underline" >Cheese:</h3>
                            <div className="d-flex flex-column">
                            {orderDetails[step].toppings.cheese.map((cheese, idx) => {
                                return(
                                    <p key={idx}>{cheese}</p>
                                    )
                            })}
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <h3 className="mt-0 mb-2 text-decoration-underline" >Meat:</h3>
                            <div className="d-flex flex-column">
                            {orderDetails[step].toppings.meat.map((meat, idx) => {
                                return(
                                    <p key={idx}>{meat}</p>
                                    )
                            })}
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <h3 className="mt-0 mb-2 text-decoration-underline" >Other Toppings:</h3>
                            <div className="d-flex flex-column">
                            {orderDetails[step].toppings.other.map((other, idx) => {
                                return(
                                    <p key={idx}>{other}</p>
                                    )
                            })}
                            </div>
                        </div>
                    </div>
                    }
                    </Modal.Body>
                </Container>
                }
                <Modal.Footer className="d-flex flex-row justify-content-between">
                    <Button variant="secondary" onClick={handleBack}>
                        Back
                    </Button>
                    <Button variant="secondary" onClick={handleNext}>
                        Next
                    </Button>
                </Modal.Footer>
                </Modal>
            </div>

            {/* returns user to pizza modal */}
            <div className="bg-light rounded text-center text-danger fw-bold d-flex flex-column text-start mt-5 px-3 py-4 ms-3" style={{ width: "auto", height: "fit-content" }}>
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
