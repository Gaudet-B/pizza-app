import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import emptyCart from '../assets/shopping-cart-empty.png'
import fullCart from '../assets/shopping-cart-full.png'
import burger from '../assets/burger-menu.png'
import pizzaLogo from '../assets/pizza-logo-temp.jpg'
import styles from './background.module.css'


const Navigation = props => {

    // shopping cart props passed down from global level
    const { isEmpty, shoppingCart } = props

    return (
        <Navbar className="d-flex flex-row justify-content-between p-0 border rounded" bg="light" style={{ width: "inherit", maxHeight: "62px", marginTop: "5px" }} >
            
            {/* small brand logo */}
            <Navbar.Brand href="/" className="p-0" >
                <img 
                    src={pizzaLogo} 
                    alt="pizza logo"
                    width="50px"
                    height="50px"
                    style={{ margin: "6px" }}
                    />
            </Navbar.Brand>

            {/* title logo */}
            <div className={styles.title}>
                <p style={{ margin: "0px", fontSize: "36px" }} >P!ZZA</p>
            </div>

            <div className="p-0">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="align-self-end" >

                    {/* shopping cart dropdown */}
                        <Dropdown align="end">
                            <Dropdown.Toggle variant="dark" className="bg-light border-light ms-3" style={{ padding: "0px" }}>
                            
                            {/* handle image change when cart has order(s) */}
                            {(!isEmpty) ?
                            <img 
                                src={fullCart} 
                                alt="shopping cart icon" 
                                height="30px"
                                width="30px"
                                className="me-2"
                            />
                            :
                            <img 
                                src={emptyCart} 
                                alt="shopping cart icon" 
                                height="30px"
                                width="30px"
                                className="me-2"
                            />
                            }
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="text-light" bg="light" style={{ backgroundColor: "rgba(143, 3, 3)" }}>
                            {/*  */}
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

                        {/* menu dropdown */}
                        <Dropdown align="end">
                            <Dropdown.Toggle variant="light" style={{ padding: "0px" }}>
                                <img 
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


