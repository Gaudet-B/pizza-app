import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import pizzaLogo from '../assets/pizza-logo-temp.jpg'
import pizzaReview from '../assets/pizza-review-temp.png'
import styles from './background.module.css'


const Toppings = props => {

    const {order, setOrder} = props

    const [allCheese, setAllCheese] = useState(["mozzarella", "fresh mozzarella", "ricotta", "parmigiano-reggiano"])
    const [allMeat, setAllMeat] = useState(["pepperoni", "chicken", "meatballs", "sausage", "bacon"])
    const [allOther, setAllOther] = useState(["bell peppers", "oinion", "mushrooms", "fresh basil", "jalapeno", "calabrian chiles", "olive oil", "tomatoes"])
    const [currentToppings, setCurrentToppings] = useState({cheese: [], meat: [], other: []})

    const cheeseHandler = e => {
        let cheese = e.target.id
        if (e.target.checked === true) {
            currentToppings.cheese.push(cheese)
        } else {
            let index = currentToppings.cheese.indexOf(e.target.id)
            currentToppings.cheese.splice(index, 1)
        }
        setOrder({
            ...order,
            toppings: {
                cheese: currentToppings.cheese,
                meat: currentToppings.meat,
                other: currentToppings.other
            }
        })
        sessionStorage.setItem("order", JSON.stringify(order))
    }

    const meatHandler = e => {
        let meat = e.target.id
        if (e.target.checked === true) {
            currentToppings.meat.push(meat)
        } else {
            let index = currentToppings.meat.indexOf(e.target.id)
            currentToppings.meat.splice(index, 1)
        }
        setOrder({
            ...order,
            toppings: {
                cheese: currentToppings.cheese,
                meat: currentToppings.meat,
                other: currentToppings.other
            }
        })
        sessionStorage.setItem("order", JSON.stringify(order))
    }

    const otherHandler = e => {
        let other = e.target.id
        if (e.target.checked === true) {
            currentToppings.other.push(other)
        } else {
            let index = currentToppings.other.indexOf(e.target.id)
            currentToppings.other.splice(index, 1)
        }
        setOrder({
            ...order,
            toppings: {
                cheese: currentToppings.cheese,
                meat: currentToppings.meat,
                other: currentToppings.other
            }
        })
        sessionStorage.setItem("order", JSON.stringify(order))
    }

    return (
        <div className="d-flex flex-column text-center rounded py-3 ps-2" style={{ backgroundColor: "rgba(143, 3, 3, 0.774)" }}>
            <div className={styles.modalImage} >
                {/* <img 
                    src={pizzaReview} 
                    alt="p!zza logo"
                    height="280px"
                    width="80%"
                    className="rounded"
                /> */}
            </div>
            <Form className="d-flex flex-column">
                <div className="d-flex flex-row p-2 text-light mt-2 me-2">
                    <Form.Group className="d-flex flex-column text-start col p-2 border border-light rounded">
                        <h5>Cheese:</h5>
                        {
                            // (allCheese) ?
                            allCheese.map((cheese, idx) => {
                                return(
                                // (idx === 0) ?
                                //     <Form.Check key={idx} type="checkbox" id={cheese} className="my-1">
                                //         <Form.Check.Input onChange={cheeseHandler} type="checkbox" name={cheese} checked/>
                                //         <Form.Check.Label className="mx-2" htmlFor={cheese} >{cheese}</Form.Check.Label>
                                //     </Form.Check>
                                // :
                                    <Form.Check key={idx} type="checkbox" id={cheese} className="my-1">
                                        <Form.Check.Input onChange={cheeseHandler} type="checkbox" name={cheese} />
                                        <Form.Check.Label className="mx-2" htmlFor={cheese} >{cheese}</Form.Check.Label>
                                    </Form.Check>
                                )
                            })
                        }
                    </Form.Group>
                    <Form.Group className="d-flex flex-column text-start col ms-2 p-2 border border-light rounded">
                        <h5>Meat:</h5>
                        {
                            // (allMeat) ?
                            allMeat.map((meat, idx) => {
                                return(
                                    <Form.Check key={idx} type="checkbox" id={meat} className="my-1">
                                        <Form.Check.Input onChange={meatHandler} type="checkbox" name={meat} />
                                        <Form.Check.Label className="mx-2" htmlFor={meat} >{meat}</Form.Check.Label>
                                    </Form.Check>
                                )
                            })
                        }
                    </Form.Group>
                </div>
                <div className="d-flex flex-column p-2 text-light border border-light rounded me-3 ms-1 mt-2">
                    <h5 className="text-start" >Other:</h5>
                    <div className="d-flex flex-row">
                    <Form.Group className="d-flex flex-column text-start col ms-2">
                        {
                            allOther.slice(0, 4).map((item, idx) => {
                                return(
                                    <Form.Check key={idx} type="checkbox" id={item} className="my-1">
                                        <Form.Check.Input onChange={otherHandler} type="checkbox" name={item} />
                                        <Form.Check.Label className="mx-2" htmlFor={item} >{item}</Form.Check.Label>
                                    </Form.Check>
                                )
                            })
                        }
                    </Form.Group>
                    <Form.Group className="d-flex flex-column text-start col ms-2">
                        {
                            allOther.slice(4).map((item, idx) => {
                                return(
                                    <Form.Check key={idx} type="checkbox" id={item} className="my-1">
                                        <Form.Check.Input onChange={otherHandler} type="checkbox" name={item} />
                                        <Form.Check.Label className="mx-2" htmlFor={item} >{item}</Form.Check.Label>
                                    </Form.Check>
                                )
                            })
                        }
                    </Form.Group>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default Toppings
