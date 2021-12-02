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

                {/* top: cheese and meat */}
                <div className="d-flex flex-row p-2 text-light mt-2 me-2">

                    {/* cheese inputs */}
                    <Form.Group className="d-flex flex-column text-start col p-2 border border-light rounded">
                        <h5>Cheese:</h5>
                        {
                            allCheese.map((cheese, idx) => {
                                return(
                                    <Form.Check key={idx} type="checkbox" id={cheese} className="my-1">
                                        <Form.Check.Input onChange={cheeseHandler} type="checkbox" name={cheese} />
                                        <Form.Check.Label className="mx-2" htmlFor={cheese} >{cheese}</Form.Check.Label>
                                    </Form.Check>
                                )
                            })
                        }
                    </Form.Group>

                    {/* meat inputs */}
                    <Form.Group className="d-flex flex-column text-start col ms-2 p-2 border border-light rounded">
                        <h5>Meat:</h5>
                        {
                            allMeat.map((meat, idx) => {
                                return(
                                    <Form.Check key={idx} type="checkbox" id={meat} className="my-1">
                                        <Form.Check.Input onChange={meatHandler} type="checkbox" name={meat} />
                                        <Form.Check.Label className="mx-2" htmlFor={meat} >{meat} <strong>+$1</strong></Form.Check.Label>
                                    </Form.Check>
                                )
                            })
                        }
                    </Form.Group>

                </div>

                {/* bottom: other toppings */}
                <div className="d-flex flex-column p-2 text-light border border-light rounded me-3 ms-1 mt-2">
                    <h5 className="text-start" >Other:</h5>
                    <div className="d-flex flex-row">

                    {/* first half of other inputs  */}
                    <Form.Group className="d-flex flex-column text-start col ms-2">
                        {
                            allOther.slice(0, 4).map((item, idx) => {
                                return(
                                    <Form.Check key={idx} type="checkbox" id={item} className="my-1">
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

                    {/* second half of other inputs */}
                    <Form.Group className="d-flex flex-column text-start col ms-2">
                        {
                            allOther.slice(4).map((item, idx) => {
                                return(
                                    <Form.Check key={idx} type="checkbox" id={item} className="my-1">
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
                </div>
            </Form>
        </div>
    )
}

export default Toppings
