import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import styles from './background.module.css'


const Toppings = props => {

    const {order, setOrder} = props

    // toppings are hard-coded here for demo version of the application 
    const [allCheese, setAllCheese] = useState(["mozzarella", "fresh mozzarella", "ricotta", "parmigiano-reggiano"])
    const [allMeat, setAllMeat] = useState(["pepperoni", "chicken", "meatballs", "sausage", "bacon"])
    const [allOther, setAllOther] = useState(["bell peppers", "oinion", "mushrooms", "fresh basil", "jalapeno", "calabrian chiles", "olive oil", "tomatoes"])
    const [currentToppings, setCurrentToppings] = useState({cheese: [], meat: [], other: []})

    // handlers for each category array

    // cheese
    const cheeseHandler = e => {
        let cheese = e.target.id
        // add to the cheese array if form input is checked
        if (e.target.checked === true) {
            currentToppings.cheese.push(cheese)
        // if form input is not checked (or un-checked), remove from the cheese array
        } else {
            let index = currentToppings.cheese.indexOf(e.target.id)
            currentToppings.cheese.splice(index, 1)
        }
        // update order on each change 
        setOrder({
            ...order,
            toppings: {
                cheese: currentToppings.cheese,
                meat: currentToppings.meat,
                other: currentToppings.other
            }
        })
        // stores the post-change order to session
        sessionStorage.setItem("order", JSON.stringify(order))
    }
    // meat
    const meatHandler = e => {
        let meat = e.target.id
        // add to the meat array if form input is checked
        if (e.target.checked === true) {
            currentToppings.meat.push(meat)
        // if form input is not checked (or un-checked), remove from the meat array
        } else {
            let index = currentToppings.meat.indexOf(e.target.id)
            currentToppings.meat.splice(index, 1)
        }
        // update order on each change 
        setOrder({
            ...order,
            toppings: {
                cheese: currentToppings.cheese,
                meat: currentToppings.meat,
                other: currentToppings.other
            }
        })
        // stores the post-change order to session
        sessionStorage.setItem("order", JSON.stringify(order))
    }
    // other
    const otherHandler = e => {
        let other = e.target.id
        let label = e.target.parentNode.lastChild.lastChild
        console.log(label)
        // add to the meat array if form input is checked
        if (e.target.checked === true) {
            // label.setAttribute("style", "transparent")
            console.log(label.style.color)
            label.style.color = "transparent"
            currentToppings.other.push(other)
        // if form input is not checked (or un-checked), remove from the other array
        } else {
            let index = currentToppings.other.indexOf(e.target.id)
            currentToppings.other.splice(index, 1)
        }
        // update order on each change 
        setOrder({
            ...order,
            toppings: {
                cheese: currentToppings.cheese,
                meat: currentToppings.meat,
                other: currentToppings.other
            }
        })
        // stores the post-change order to session
        sessionStorage.setItem("order", JSON.stringify(order))
    }

    return (
        <div className="d-flex flex-column text-center rounded py-3 ps-2" style={{ backgroundColor: "rgba(143, 3, 3, 0.774)" }}>

            {/* large pizza image */}
            <div className={styles.modalImage} > </div>

            <Form className="d-flex flex-column">

                {/* cheese inputs */}
                <Form.Group className="d-flex flex-column p-2 text-light border border-light rounded me-3 ms-1 mt-2">
                    <h5 className="display-5">Cheese:</h5>
                    {
                        allCheese.map((cheese, idx) => {
                            return(
                                <Form.Check key={idx} type="checkbox" id={cheese} className="my-1 d-flex flex-row justify-content-between text-end" style={{ minWidth: "65%", maxWidth: "215px", margin: "auto" }}>
                                    <Form.Check.Input onChange={cheeseHandler} type="checkbox" name={cheese} />
                                    <Form.Check.Label className="mx-2" htmlFor={cheese} >{cheese}</Form.Check.Label>
                                </Form.Check>
                            )
                        })
                    }
                </Form.Group>

                {/* meat inputs */}
                <Form.Group className="d-flex flex-column p-2 text-light border border-light rounded me-3 ms-1 mt-2">
                    <h5 className="display-5">Meat:</h5>
                    {
                        allMeat.map((meat, idx) => {
                            return(
                                <Form.Check key={idx} type="checkbox" id={meat} className="my-1 d-flex flex-row justify-content-between text-end" style={{ minWidth: "65%", maxWidth: "215px", margin: "auto" }}>
                                    <Form.Check.Input onChange={meatHandler} type="checkbox" name={meat} />
                                    <Form.Check.Label className="mx-2" htmlFor={meat} >{meat} <strong>+$1</strong></Form.Check.Label>
                                </Form.Check>
                            )
                        })
                    }
                </Form.Group>

                {/* other toppings */}
                <div className="d-flex flex-column p-2 text-light border border-light rounded me-3 ms-1 mt-2">
                    <h5 className="display-5" >Other:</h5>

                    {/* other inputs  */}
                    <Form.Group className="d-flex flex-column text-wrap col ms-2">
                        {
                            // allOther.slice(0, 4).map((item, idx) => {
                            allOther.map((item, idx) => {
                                return(
                                    <Form.Check key={idx} type="checkbox" id={item} className="my-1 d-flex flex-row justify-content-between text-end" style={{ minWidth: "65%", maxWidth: "215px", margin: "auto" }}>
                                        <Form.Check.Input onChange={otherHandler} type="checkbox" name={item} />
                                        {(order.toppings && order.toppings.other.length >= 3 && document.getElementById(item).checked === false) ?
                                        <Form.Check.Label className="mx-2" htmlFor={item} >{item} <strong style={{ color: "" }}>+$1</strong></Form.Check.Label>
                                        :
                                        <Form.Check.Label className="mx-2" htmlFor={item} >{item} <strong style={{ color: "transparent" }}>+$1</strong></Form.Check.Label>
                                        }
                                    </Form.Check>
                                )
                            })
                        }
                    </Form.Group>
                    
                </div>
            </Form>
        </div>
    )
}

export default Toppings
