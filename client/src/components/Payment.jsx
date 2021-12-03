import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import PaymentForm from './PaymentForm'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import styles from '../components/background.module.css'

const Payment = props => {

    const { subTotal } = props

    // instantiate useNavigate
    const navigate = useNavigate()

    const [showPayment, setShowPayment] = useState(false)
    const [formState, setFormState] = useState({})
    const [squareLoaded, setSquareLoaded] = useState(false)
    const [step, setStep] = useState(0)

    const handleNext = () => setStep(step + 1)
    
    const handleClosePayment = () => setShowPayment(false)
    
    const handleShowPayment = () => setShowPayment(true)
    
    const getTax = amount => (amount * 0.0775).toFixed(2)

    // handler for address input
    const handleFormChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        navigate("/confirm")
    }

    const getTotal = (amount, tax) => {
        let amt = Number(amount)
        let tx = Number(tax)
        return (amt + tx + 15.95).toFixed(2)
    }

    const tax = getTax(subTotal)
    const total = getTotal(subTotal, tax)

    useEffect(() => {

        const script = document.createElement("script")
        script.src = "https://js.squareup.com/v2/paymentform.js"
        script.type = "text/javascript"
        script.async = false
        script.onload = () => setSquareLoaded(true)
        document.body.appendChild(script)

        // return () => document.removeChild(script)

    }, [])

    return (
        <div style={{ width: "inherit" }}>

            {/*  */}
            <Button variant="danger" onClick={handleShowPayment} className="mt-1 mb-4 p-3 fs-4 text-wrap btn-lg"  style={{ width: "100%" }}>
                        Checkout!
            </Button>
            <Modal show={showPayment} onHide={handleClosePayment}>
                <Container style={{ padding: "0px" }}>
                    <Modal.Header className={styles.cartHeader} closeButton>
                        {(step === 0) ?
                        <p className="mb-0 fs-5" style={{ color: "rgb(143, 3, 3)" }}>Payment Confirmation </p>
                        : (step === 1) ?
                        <p className="mb-0 fs-5" style={{ color: "rgb(143, 3, 3)" }}>Shipping Confirmation </p>
                        : null
                        }
                    </Modal.Header>
                    <Modal.Body className="px-5">
                        <div className="d-flex flex-row justify-content-between">
                            <p>Subtotal</p>
                            <p>{subTotal}</p>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <p>Est. Tax</p>
                            <p>{tax}</p>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <p>Delivery</p>
                            <p>$15.95</p>
                        </div>
                        <div className="border-top border-danger"></div>
                        <div className="d-flex flex-row justify-content-between mt-3">
                            <p className="text-dark fs-5">Total</p>
                            <p className="text-dark fs-5 fw-bold">${total}</p>
                        </div>
                    </Modal.Body>
                </Container>

                {(step === 0) ?
                <Modal.Footer>
                    {(squareLoaded) ?
                    <PaymentForm paymentForm={window.SqPaymentForm} handleNext={handleNext}/>
                    : null
                    }
                </Modal.Footer>
                : (step === 1) ?
                <Modal.Footer>
                    <Form style={{ width: "90%", margin: "auto" }}>
                    <Form.Group className="d-flex flex-row justify-content-between my-2">
                        <Form.Label htmlFor="street">Street:</Form.Label>
                        <Form.Control name="street" type="text" onChange={handleFormChange} style={{ width: "300px" }} />
                    </Form.Group>
                    <Form.Group className="d-flex flex-row justify-content-between my-2">
                        <Form.Label htmlFor="city">City:</Form.Label>
                        <Form.Control name="city" type="text" onChange={handleFormChange} style={{ width: "300px" }} />
                    </Form.Group>
                    <Form.Group className="d-flex flex-row justify-content-between my-2">
                        <Form.Label htmlFor="state">State:</Form.Label>
                        <Form.Control name="state" type="text" onChange={handleFormChange} style={{ width: "300px" }} />
                    </Form.Group>
                    <Form.Group className="d-flex flex-row justify-content-between my-2">
                        <Form.Label htmlFor="zip">Zip Code:</Form.Label>
                        <Form.Control name="zip" type="text" onChange={handleFormChange} style={{ width: "300px" }} />
                    </Form.Group>
                    <Button variant="danger" size="lg" onClick={handleSubmit} style={{ width: "100%" }} className="my-5">
                        Confirm Order
                    </Button>
                    </Form>
                </Modal.Footer>
                : null
                }
            </Modal>
        </div>
    )
}

export default Payment
