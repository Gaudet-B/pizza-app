import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Collapse from 'react-bootstrap/Collapse'
import downArrow from '../assets/down-arrow-icon-white.png'
import upArrow from '../assets/up-arrow-icon-white.png'
import axios from 'axios'


const RegisterModal = () => {

    const [show, setShow] = useState(false)
    const [open, setOpen] = useState(false)

    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")

    const [formState, setFormState] = useState({})
    const [addressState, setAddressState] = useState({})

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const navigate = useNavigate()

    const handleFormChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleAddressChange = e => {
        setAddressState({
            ...addressState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        axios.post("http://localhost:8000/api/user/register", {formState, addressState})
            .then(res => {
                navigate("/shop")
            })
            .catch(err => console.log(err))
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
                            <Form.Group className="px-4">
                                <Form.Label htmlFor="firstName">First Name:</Form.Label>
                                <Form.Control name="firstName" type="text" onChange={handleFormChange} />
                                <Form.Label htmlFor="lastName">Last Name:</Form.Label>
                                <Form.Control name="lastName" type="text" onChange={handleFormChange} />
                                <Form.Label htmlFor="email">Email Address:</Form.Label>
                                <Form.Control name="email" type="email" onChange={handleFormChange} />
                                <Form.Label htmlFor="password">Password:</Form.Label>
                                <Form.Control name="password" type="password" onChange={handleFormChange} />
                                <Form.Label htmlFor="confirmPassword">Confirm Password:</Form.Label>
                                <Form.Control name="confirmPassword" type="password" onChange={handleFormChange} />
                            </Form.Group>
                            <h5 className="my-3">Optional:</h5>
                            <div className="bg-secondary border rounded p-1 mx-1 text-light" >
                                <p className="m-1 text">Add Address</p>
                                <Collapse in={open}>
                                    <div id="collapse-form">
                                        <div className="px-3 mt-3">
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
