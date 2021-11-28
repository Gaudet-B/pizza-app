import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Collapse from 'react-bootstrap/Collapse'
import downArrow from '../assets/down-arrow-icon-white.png'
import upArrow from '../assets/up-arrow-icon-white.png'
import axios from 'axios'


const RegisterModal = () => {

    // state hook for modal
    const [show, setShow] = useState(false)

    // state hook to expand/collapse address inputs
    const [open, setOpen] = useState(false)

    // state hooks for form inputs 
    const [formState, setFormState] = useState({})
    // address is handled separately since it is not required to register an account
    const [addressState, setAddressState] = useState({})

    // state hook for form validation
    const [validState, setValidState] = useState({})

    // instantiate useNavigate
    const navigate = useNavigate()

    // handlers for modal
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    // sets state as user input changes
    const handleFormChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    // separate handler for address input
    const handleAddressChange = e => {
        setAddressState({
            ...addressState,
            [e.target.name]: e.target.value
        })
        // adds 'address' object to formState
        setFormState({
            ...formState,
            address: addressState
        })
    }

    // handles form submission to database
    const handleSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/user/register", formState)
            // redirect to 'shop' view if successful
            .then(res => {
                navigate("/shop")
            })
            // if not, parse through error data and create an object to be passed to the validState hook
            .catch(err => {
                const {errors} = err.response.data
                let errObj = {}
                for (const [key, value] of Object.entries(errors)) {
                    errObj[key] = value.message
                }
                // sets the validState hook - errors will be displayed to user
                setValidState(errObj)
            })
    }

    return (
        <div className="border border-danger rounded m-3 p-2 text-center">
            <p>Not a member? Sign up for an account.</p>
            <Button variant="outline-danger" onClick={handleShow}>
                Register
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Container>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: "rgba(143, 3, 3, 0.774)" }}>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            {/* required group */}
                            <Form.Group className="px-4">

                                <Form.Label htmlFor="firstName">First Name:</Form.Label>
                                <Form.Control name="firstName" type="text" onChange={handleFormChange} />
                                {(validState.firstName) ? <p className="text-danger"> { validState.firstName } </p> : null }

                                <Form.Label htmlFor="lastName">Last Name:</Form.Label>
                                <Form.Control name="lastName" type="text" onChange={handleFormChange} />
                                {(validState.lastName) ? <p className="text-danger"> { validState.lastName } </p> : null }

                                <Form.Label htmlFor="email">Email Address:</Form.Label>
                                <Form.Control name="email" type="email" onChange={handleFormChange} />
                                {(validState.email) ? <p className="text-danger"> { validState.email } </p> : null }

                                <Form.Label htmlFor="password">Password:</Form.Label>
                                <Form.Control name="password" type="password" onChange={handleFormChange} />
                                {(validState.password) ? <p className="text-danger"> { validState.password } </p> : null }

                                <Form.Label htmlFor="confirmPassword">Confirm Password:</Form.Label>
                                <Form.Control name="confirmPassword" type="password" onChange={handleFormChange} />
                                {(validState.confirmPassword) ? <p className="text-danger"> { validState.confirmPassword } </p> : null }

                            </Form.Group>

                            <h5 className="my-3">Optional:</h5>
                            <div className="bg-secondary border rounded p-1 mx-1 text-light" >
                                <p className="m-1 text">Add Address</p>

                                {/* collapse component for optional form entry */}
                                <Collapse in={open}>
                                    <div id="collapse-form">
                                        <div className="px-3 mt-3">
                                            {/* optional group */}
                                            <Form.Group>
                                                <Form.Label htmlFor="street">Street:</Form.Label>
                                                <Form.Control name="street" type="text" onChange={handleAddressChange} />
                                                <Form.Label htmlFor="city">City:</Form.Label>
                                                <Form.Control name="city" type="text" onChange={handleAddressChange} />
                                                <Form.Label htmlFor="state">State:</Form.Label>
                                                <Form.Control name="state" type="text" onChange={handleAddressChange} />
                                                <Form.Label htmlFor="zip">Zip Code:</Form.Label>
                                                <Form.Control name="zip" type="text" onChange={handleAddressChange} />
                                            </Form.Group>
                                        </div>
                                    </div>
                                </Collapse>
                                <Button
                                    className="my-2"
                                    onClick={() => setOpen(!open)}
                                    aria-controls="collapse-form"
                                    aria-expanded={open}
                                    variant="secondary"
                                    size="sm"
                                    style={{ height: "fit-content", minWidth: "fit-content", width: "100px" }}
                                >
                                    {/* handle arrow image change */}
                                    {
                                    (!open) ? 
                                    <img
                                        src={downArrow}
                                        alt=""
                                        height="20px"
                                        width="40px"
                                        className="ms-1"
                                    />
                                    :
                                    <img
                                        src={upArrow}
                                        alt=""
                                        height="20px"
                                        width="40px"
                                        className="ms-1"
                                    />
                                    }
                                </Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Container>

                <Modal.Footer className="pe-5">
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="outline-danger" onClick={handleSubmit}>
                        Register
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default RegisterModal
