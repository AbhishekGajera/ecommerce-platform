import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = () => {

    }

    return (
        <div className='login-main-block'>
            <div className='login-inner-block'>
                <Form className='Auth-form' onSubmit={handleSubmit(onSubmit)}>
                    <div className='Auth-form-content'>
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="text-center  mb-3">
                            Not registered yet?{" "}
                            <Link className="link-primary" to='/register'>
                                Sign Up
                            </Link>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='label'>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"  {...register("email", {
                                required: true,
                                pattern: /^\S+@\S+$/i,
                            })} />
                            {errors &&
                                errors.email &&
                                errors.email.type === "required" && (
                                    <p className='error'>email is required field</p>
                                )}
                            {errors &&
                                errors.email &&
                                errors.email.type === "pattern" && (
                                    <p>invalid email formate</p>
                                )}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='label'>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                {...register("password", { required: true })}
                            />
                            {errors && errors.password && (
                                <p className='error'>password is required field</p>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" className='checkbox' />
                        </Form.Group>
                        <div className='d-grid gap-2 mt-3 button'>
                            <Button variant="primary" type="submit" disabled={!isDirty || !isValid}>
                                Submit
                            </Button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Forgot <Link to="#">password?</Link>
                        </p>
                    </div>
                </Form>

            </div>
        </div>
    )
}

export default Login