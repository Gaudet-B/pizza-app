import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import deepDish from '../assets/deep-dish.jpg'
import nyStyle from '../assets/ny-style-temp.jpg'
import sicilian from '../assets/sicilian-crust-temp.png'
import deepDishThumb from '../assets/deepDish-crust-thumb.png'
import nyStyleThumb from '../assets/nyStyle-crust-thumb.png'
import sicilianThumb from '../assets/sicilian-crust-thumb.png'
import CurrentCrust from './CurrentCrust'


const Crust = props => {

    const {order, setOrder} = props

    const [currentCrust, setCurrentCrust] = useState({name: "NY Style", image: nyStyle})
    // const [otherCrusts, setOtherCrusts] = useState([
    //     {
    //         name: "Deep Dish",
    //         image: deepDish
    //     },
    //     {
    //         name: "Sicilian",
    //         image: sicilian
    //     }
    // ])
    const [allCrusts, setAllCrusts] = useState([
        {
            name: "NY Style",
            image: nyStyleThumb
        },
        {
            name: "Deep Dish",
            image: deepDishThumb
        },
        {
            name: "Sicilian",
            image: sicilianThumb
        }
    ])

    const changeHandler = e => {
        if (e.target.id === "NY Style" || e.target.id === "Deep Dish" || e.target.id === "Sicilian") {
            setCurrentCrust(e.target.id)
            setOrder({
                ...order,
                crust: e.target.id
            })
            sessionStorage.setItem("order", JSON.stringify(order))
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
        } else {
            setCurrentCrust(e.target.parentNode.id)
            setOrder({
                ...order,
                crust: e.target.parentNode.id
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

    return (
        <Container className="rounded" >
            <CurrentCrust crust={currentCrust} />    
            <div className="d-flex flex-row rounded" style={{ backgroundColor: "whitesmoke" }}>
                {
                    (allCrusts) ?
                    allCrusts.map((crust, idx) => {
                        return(
                            <div key={idx} id={crust.name} onClick={changeHandler} className="d-flex flex-column text-center p-2 rounded" style={{ maxWidth: "33.33%", cursor: "pointer" }}>
                                <img
                                    id="childImg"
                                    src={crust.image}
                                    alt={`${crust.name} image`}
                                    href="/"
                                    height="120px"
                                    width="inherit"
                                    margin="auto"
                                    className="rounded"
                                />
                                <p id="ignore" className="" >{crust.name}</p>
                            </div>
                        )
                    })
                    : null
                }
            </div>
        </Container>
    );
}

export default Crust
