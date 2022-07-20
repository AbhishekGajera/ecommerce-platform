import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import SignUpModal from './SignUpModal';

const LoginModal = ({ show, handleClose,setShow }) => {
    const [SignUpshow, setSignUpshow] = React.useState(false);

    const handleCloseSignUp = () =>setSignUpshow(false);
    const handleShowSignUp = () => {
        setSignUpshow(true)
        setShow(false)
    };
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
             </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                    <div style={{ display: 'flex', alignItems: 'center',justifyContent:'space-between' }}>
                        <div>
                            <Form.Check
                                type="checkbox"
                                defaultChecked
                                label="Stay signed in"

                            />
                        </div>
                        <div>
                            <Button variant="link">Forgot Your Password</Button>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShowSignUp}>
                        Register
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Sign In
                    </Button>
                </Modal.Footer>
            </Modal>

            <SignUpModal 
            handleCloseSignUp={handleCloseSignUp}
            SignUpshow={SignUpshow}/>
        </div>
    )
}

export default LoginModal