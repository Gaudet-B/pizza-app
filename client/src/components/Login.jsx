import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Login = () => {
    return (
        <Form>
            <h5 className="display-5 text-danger ms-3">Login</h5>
            <Form.Group className="border border-danger rounded m-3 p-2">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control type="email" />
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" />
                <Button className="my-2" variant="danger" type="submit">Login</Button>
            </Form.Group>
        </Form>
    )
}

export default Login
