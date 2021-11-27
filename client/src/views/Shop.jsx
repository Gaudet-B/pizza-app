import PizzaModal from '../components/PizzaModal'
import Container from 'react-bootstrap/Container'
import styles from '../components/background.module.css'
import Button from 'react-bootstrap/Button'

const Shop = props => {

    // props passed from parent (App.js) will be passed to children
    const {order, setOrder, shoppingCart, setShoppingCart, addToShoppingCart, getSessionOrDefault, getLocalOrDefault} = props

    return (
        <div className={styles.shop}>
            <Container className="d-flex flex-row justify-content-between my-3" style={{ width: "inherit", padding: "0px" }}>
                <PizzaModal order={order} setOrder={setOrder} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} addToShoppingCart={addToShoppingCart} getSessionOrDefault={getSessionOrDefault} getLocalOrDefault={getLocalOrDefault}/>
                <Container className="d-flex flex-column flex-1" style={{ width: "40%", margin: "0px", padding: "0px" }} >
                    <div className="bg-light rounded p-2">
                        <p className="fs-4">Future Content to come...</p>
                        <p>Suggestions</p>
                    </div>
                    <div className=" my-4 bg-light rounded p-3" >

                        {/* handle displaying active orders to user, as well as plurality of the word "pizza" */}
                        {(shoppingCart.length === 1) ?
                        <p className="fs-6">You have <strong>{shoppingCart.length}</strong> pizza in your cart.</p>
                        :
                        <p className="fs-6">You have <strong>{shoppingCart.length}</strong> pizzas in your cart.</p>
                        }

                        <Button href="/checkout" variant="outline-danger">
                            Checkout &gt;
                        </Button>
                    </div>
                </Container>
            </Container>
        </div>
    )
}

export default Shop
