import { useState } from 'react'
import Container from "react-bootstrap/Container"
import whiteSauce from '../assets/white-sauce-temp.jpg'
import pizzaSauce from '../assets/pizza-sauce-temp.jpg'
import marinaraSauce from '../assets/marinara-sauce-temp.jpg'
import whiteSauceThumb from '../assets/white-sauce-thumb.png'
import pizzaSauceThumb from '../assets/pizza-sauce-thumb.png'
import marinaraSauceThumb from '../assets/marinara-sauce-thumb.png'
import CurrentSauce from './CurrentSauce'
import styles from './background.module.css'


const Sauce = props => {

    // props set globally at App.js level
    const {order, setOrder} = props

    const [currentSauce, setCurrentSauce] = useState({name: "Pizza Sauce", image: pizzaSauce})

    // sauces hard-coded here for demo version of the application
    const [allSauces, setAllSauces] = useState([
        {
            name: "Pizza Sauce",
            image: pizzaSauceThumb
        },
        {
            name: "Marinara Sauce",
            image: marinaraSauceThumb
        },
        {
            name: "White Sauce",
            image: whiteSauceThumb
        }
    ])

    // handles change as user input selects/changes preferred sauce, as well as handles the color change to display the change to user
    const changeHandler = e => {

        // allows user to click on the overall container to change input - see line 70 for exception handling
        if (e.target.id === "Pizza Sauce" || e.target.id === "Marinara Sauce" || e.target.id === "White Sauce") {
            // sets the selected sauce
            setCurrentSauce(e.target.id)
            // adds selected sauce to the current order
            setOrder({
                ...order,
                sauce: e.target.id
            })
            // stores the post-change order to session
            sessionStorage.setItem("order", JSON.stringify(order))
            // handles UI color changes
            e.target.style.backgroundColor = "rgba(143, 3, 3, 0.774)"
            e.target.lastChild.className = "text-light"
            if(e.target.id === e.target.parentNode.childNodes[0].id){
                e.target.nextSibling.style.backgroundColor = "whitesmoke" 
                e.target.nextSibling.lastChild.className = "" 
                e.target.nextSibling.nextSibling.style.backgroundColor = "whitesmoke" 
                e.target.nextSibling.nextSibling.lastChild.className = "" 
            } else if (e.target.id === e.target.parentNode.childNodes[1].id) {
                e.target.nextSibling.style.backgroundColor = "whitesmoke"
                e.target.nextSibling.lastChild.className = ""
                e.target.previousSibling.style.backgroundColor = "whitesmoke"
                e.target.previousSibling.lastChild.className = ""
            } else if (e.target.id === e.target.parentNode.childNodes[2].id) {
                e.target.previousSibling.style.backgroundColor = "whitesmoke"
                e.target.previousSibling.lastChild.className = ""
                e.target.previousSibling.previousSibling.style.backgroundColor = "whitesmoke"
                e.target.previousSibling.previousSibling.lastChild.className = ""
            }

        // exception handler - allows user to click on the image or the overall container
        } else {
            setCurrentSauce(e.target.parentNode.id)
            setOrder({
                ...order,
                sauce: e.target.parentNode.id
            })
            sessionStorage.setItem("order", JSON.stringify(order))
            e.target.parentNode.style.backgroundColor = "rgba(143, 3, 3, 0.774)"
            e.target.parentNode.lastChild.className = "text-light"
            if(e.target.parentNode.id === e.target.parentNode.parentNode.childNodes[0].id){
                e.target.parentNode.nextSibling.style.backgroundColor = "whitesmoke"
                e.target.parentNode.nextSibling.lastChild.className = ""
                e.target.parentNode.nextSibling.nextSibling.style.backgroundColor = "whitesmoke"
                e.target.parentNode.nextSibling.nextSibling.lastChild.className = ""
            } else if (e.target.parentNode.id === e.target.parentNode.parentNode.childNodes[1].id) {
                e.target.parentNode.nextSibling.style.backgroundColor = "whitesmoke"
                e.target.parentNode.nextSibling.lastChild.className = ""
                e.target.parentNode.previousSibling.style.backgroundColor = "whitesmoke"
                e.target.parentNode.previousSibling.lastChild.className = ""
            } else if (e.target.parentNode.id === e.target.parentNode.parentNode.childNodes[2].id) {
                e.target.parentNode.previousSibling.style.backgroundColor = "whitesmoke"
                e.target.parentNode.previousSibling.lastChild.className = ""
                e.target.parentNode.previousSibling.previousSibling.style.backgroundColor = "whitesmoke"
                e.target.parentNode.previousSibling.previousSibling.lastChild.className = ""
            }
        }
    }

    // this handles the exception that only one sauce (marinara) will be offered if the user selects "Deep Dish" crust

    if (order.crust === "Deep Dish") {

        return (
            <Container className="rounded" >

                {/* component to display large image to user based on sauce selection */}
                <CurrentSauce sauce={currentSauce} />

                <div className="d-flex flex-row rounded justify-content-evenly" style={{ backgroundColor: "whitesmoke" }}>

                    {/* checks for allSauces object and maps each one to the UI */}
                    {(allSauces) ?
                        allSauces.map((sauce, idx) => {
                            return(

                                // if "Deep Dish" was the selected crust, pizza sauce and white sauce are unavailable
                                (idx === 0 || idx === 2) ?
                                <div key={idx} id={sauce.name} className="d-flex flex-column text-center p-2 rounded" style={{ maxWidth: "33.33%", cursor: "pointer" }}>
                                    <div id="mask" className={styles.bgImg}></div>
                                </div>
                                :

                                // display marinara sauce as the only option
                                <div key={idx} id={sauce.name} onClick={changeHandler} className="d-flex flex-column text-center p-2 rounded" style={{ maxWidth: "33.33%", cursor: "pointer" }}>
                                    <img
                                        id="childImg"
                                        src={sauce.image}
                                        alt={`${sauce.name} image`}
                                        href="/"
                                        height="120px"
                                        width="inherit"
                                        margin="auto"
                                        className="rounded"
                                    />
                                    <p id="ignore" className="" >{sauce.name}</p>
                                </div>
                            )
                        })
                        : null
                    }
                </div>
            </Container>
        )


    // this renders the normal component if the user does NOT select "Deep Dish" crust

    } else {

        return (
            <Container className="rounded" >

                {/* component to display large image to user based on sauce selection */}
                <CurrentSauce sauce={currentSauce} /> 

                <div className="d-flex flex-row rounded justify-content-evenly" style={{ backgroundColor: "whitesmoke" }}>

                    {/* checks for allSauces object and maps each one to the UI */}
                    {(allSauces) ?
                        allSauces.map((sauce, idx) => {
                            return(
                                <div key={idx} id={sauce.name} onClick={changeHandler} className="d-flex flex-column text-center p-2 rounded" style={{ maxWidth: "33.33%", cursor: "pointer" }}>
                                    <img
                                        id="childImg"
                                        src={sauce.image}
                                        alt={`${sauce.name} image`}
                                        href="/"
                                        height="120px"
                                        width="inherit"
                                        margin="auto"
                                        className="rounded"
                                    />
                                    <p id="ignore" className="" >{sauce.name}</p>
                                </div>
                            )
                        })
                        : null
                    }
                </div>
            </Container>
        )
    }

}

export default Sauce
