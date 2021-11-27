import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import emptyCart from '../assets/shopping-cart-empty.png'
import fullCart from '../assets/shopping-cart-full.png'
import burger from '../assets/burger-menu.png'
import pizzaLogo from '../assets/pizza-logo-temp.jpg'
import styles from './background.module.css'


const Navigation = props => {

    const { isEmpty, shoppingCart } = props

    const [showCart, setShowCart] = useState(false)
    const [cartStep, setCartStep] = useState(0)

    const handleCloseCart = () => setShowCart(false)

    const handleShowCart = () => setShowCart(true)

    const handleNext = () => setCartStep(cartStep + 1)

    const handleBack = () => setCartStep(cartStep - 1)

    return (
        <Navbar className="d-flex flex-row justify-content-between p-0 border rounded" bg="light" style={{ width: "inherit", maxHeight: "62px", marginTop: "5px" }} >
            <Navbar.Brand href="/" className="p-0" >
                <img 
                    src={pizzaLogo} 
                    alt="pizza logo"
                    width="50px"
                    height="50px"
                    style={{ margin: "6px" }}
                    // className="d-inline-block align-top"
                    />
            </Navbar.Brand>
            <div className={styles.title}>
                <p style={{ margin: "0px", fontSize: "36px" }} >P!ZZA</p>
            </div>
            <div className="p-0">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="align-self-end" >
                        
                        {/* <Nav.Link href="/" style={{ padding: "0px" }} onClick={handleShowCart}>
                            {(!isEmpty) ?
                            <img 
                                src={fullCart} 
                                alt="shopping cart icon" 
                                height="30px"
                                width="30px"
                                // style={{ marginTop: "10px" }}
                                className="me-2"
                            />
                            :
                            <img 
                                src={emptyCart} 
                                alt="shopping cart icon" 
                                height="30px"
                                width="30px"
                                // style={{ marginTop: "10px" }}
                                className="me-2"
                            />
                            }
                        </Nav.Link> */}
                        
                        {/* <Modal size="sm" show={showCart} onHide={handleCloseCart}>
                        {(cartStep < 0  || cartStep > shoppingCart.length) ?
                        handleCloseCart()
                        :
                        <Container>
                            <Modal.Header closeButton>
                                PIZZA #{cartStep + 1}
                            </Modal.Header>
                            <Modal.Body>
                            {(!shoppingCart[cartStep]) ?
                            null
                            :
                            <div className="d-flex flex-column text-center border border-light rounded">
                                <div className="d-flex flex-row">
                                    <h3 className="mt-0 mb-2 text-decoration-underline" >Crust:</h3>
                                    <p>{shoppingCart[cartStep].crust}</p>
                                </div>
                                <div className="d-flex flex-row">
                                    <h3 className="mt-0 mb-2 text-decoration-underline" >Sauce:</h3>
                                    <p>{shoppingCart[cartStep].sauce}</p>
                                </div>
                                <div className="d-flex flex-row">
                                    <h3 className="mt-0 mb-2 text-decoration-underline" >Cheese:</h3>
                                    <div className="d-flex flex-column">
                                    {shoppingCart[cartStep].toppings.cheese.map((cheese, idx) => {
                                        return(
                                            <p key={idx}>{cheese}</p>
                                            )
                                    })}
                                    </div>
                                </div>
                                <div className="d-flex flex-row">
                                    <h3 className="mt-0 mb-2 text-decoration-underline" >Meat:</h3>
                                    <div className="d-flex flex-column">
                                    {shoppingCart[cartStep].toppings.meat.map((meat, idx) => {
                                        return(
                                            <p key={idx}>{meat}</p>
                                            )
                                    })}
                                    </div>
                                </div>
                                <div className="d-flex flex-row">
                                    <h3 className="mt-0 mb-2 text-decoration-underline" >Other Toppings:</h3>
                                    <div className="d-flex flex-column">
                                    {shoppingCart[cartStep].toppings.other.map((other, idx) => {
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
                        </Modal> */}

                        <Dropdown align="end">
                            <Dropdown.Toggle variant="dark" className="bg-light border-light ms-3" style={{ padding: "0px" }}>
                            {(!isEmpty) ?
                            <img 
                                src={fullCart} 
                                alt="shopping cart icon" 
                                height="30px"
                                width="30px"
                                // style={{ marginTop: "10px" }}
                                className="me-2"
                            />
                            :
                            <img 
                                src={emptyCart} 
                                alt="shopping cart icon" 
                                height="30px"
                                width="30px"
                                // style={{ marginTop: "10px" }}
                                className="me-2"
                            />
                            }
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="text-light" bg="light" style={{ backgroundColor: "rgba(143, 3, 3)" }}>
                                <h3 className="text-light ms-2">Your Cart</h3>
                                {shoppingCart.map((item, idx) => {
                                    return(
                                        <Container>
                                        <Dropdown.Divider />
                                        <Dropdown.Item key={idx}>
                                            <p className="fs-5 fw-bold text-light">Pizza #{idx + 1}</p>
                                            <p className="text-light">{item.crust}</p>
                                            <p className="text-light">{item.sauce}</p>
                                            <p className="text-light">toppings... (<strong>{item.toppings.cheese.length + item.toppings.meat.length + item.toppings.other.length}</strong>)</p>
                                        </Dropdown.Item>
                                        </Container>
                                    )
                                })}
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown align="end">
                            <Dropdown.Toggle variant="light" style={{ padding: "0px" }}>
                                <img 
                                // src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" 
                                src={burger}
                                width="35px" 
                                height="30px" 
                                alt="hambuger icon" 
                                className="ms-1"
                                />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="text-danger" bg="light">
                                <Dropdown.Item href="/">Your Orders</Dropdown.Item>
                                <Dropdown.Item href="/">Popular Orders</Dropdown.Item>
                                <Dropdown.Item href="/">Preferences</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item className="text-danger" href="/">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default Navigation


