import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useNavigate } from 'react-router-dom'
import pizzaLogo from '../assets/pizza-logo-temp.jpg'
import Crust from './Crust'
import Review from './Review'
import Sauce from './Sauce'
import Toppings from './Toppings'


const PizzaModal = props => {

    const {order, setOrder, shoppingCart, setShoppingCart, addToShoppingCart, getSessionOrDefault, getLocalOrDefault} = props

    const [show, setShow] = useState(false)
    const [step, setStep] = useState(1)

    const navigate = useNavigate()

    // const [order, setOrder] = useState({
    //     crust: "",
    //     sauce: "",
    //     toppings: {
    //         cheese: [],
    //         meat: [],
    //         other: []
    //     }
    // })

    const handleClose = () => {
        setStep(1)
        setShow(false)
    }

    const handleShow = () => setShow(true)

    const handleNext = () => {
        setStep(step + 1)
    }

    const handleBack = () => {
        setStep(step - 1)
    }

    const handleSubmit = () => {
        addToShoppingCart()
        navigate.replace("/checkout")
    }

    const handleOrder = () => {
        addToShoppingCart()
        setStep(1)
    }

    return (
        <div className="d-flex flex-column text-center align-items-center bg-light border rounded flex-1" style={{ height: "fit-content", width: "55%" }}>
            <img className="rounded my-2"
                src={pizzaLogo} 
                alt="p!zza logo" 
                height="195px"
                width="195px"
            />
            <Button variant="danger" onClick={handleShow} className="m-3">
                Get Started
            </Button>
            <Modal show={show} onHide={handleClose}>
                {
                    (step <= 0) ?
                    handleClose()
                    :
                    (step > 4) ?
                    handleClose()
                    :
                    (step === 1) ?
                    <Container>
                        <Modal.Header closeButton>
                            <Container >
                                <Modal.Title>Step 1 - Choose Crust</Modal.Title>
                                <ProgressBar variant="danger" animated now={25} className="my-2" />
                            </Container>
                        </Modal.Header>
                        <Modal.Body>
                            <Crust order={order} setOrder={setOrder}/>
                        </Modal.Body>
                    </Container>
                    :
                    (step === 2) ?
                    <Container>
                        <Modal.Header closeButton>
                            <Container >
                                <Modal.Title>Step 2 - Choose Sauce</Modal.Title>
                                <ProgressBar variant="danger" animated now={50} className="my-2" />
                            </Container>
                        </Modal.Header>
                        <Modal.Body>
                            <Sauce order={order} setOrder={setOrder}/>
                        </Modal.Body>
                    </Container>
                    :
                    (step === 3) ?
                    <Container>
                        <Modal.Header closeButton>
                            <Container >
                                <Modal.Title>Step 3 - Choose Toppings</Modal.Title>
                                <ProgressBar variant="danger" animated now={75} className="my-2" />
                            </Container>
                        </Modal.Header>
                        <Modal.Body>
                            <Toppings order={order} setOrder={setOrder}/>
                        </Modal.Body>
                    </Container>
                    :
                    (step === 4) ?
                    <Container>
                        <Modal.Header closeButton>
                            <Container >
                                <Modal.Title>Step 4 - Review Pizza</Modal.Title>
                                <ProgressBar variant="danger" animated now={100} className="my-2" />
                            </Container>
                        </Modal.Header>
                        <Modal.Body>
                            <Review order={order} setOrder={setOrder} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
                        </Modal.Body>
                    </Container>
                    :
                        <p>Loading...</p>
                    }
                <Modal.Footer className="d-flex flex-row justify-content-between">
                    <Button variant="outline-secondary" onClick={handleBack}>
                        Back
                    </Button>
                    {
                        (step === 4) ?
                        <div className="d-flex flex-row">
                        <Button variant="outline-danger" onClick={handleOrder} className="mx-2">
                            Add to Cart and Make Another!
                        </Button>
                        <Button variant="danger" onClick={handleSubmit}>
                            Checkout
                        </Button>
                        </div>
                        :
                        <Button variant="outline-danger" onClick={handleNext}>
                            Continue
                        </Button>
                    }
                </Modal.Footer>
            </Modal>
        </div>
    );
}


export default PizzaModal