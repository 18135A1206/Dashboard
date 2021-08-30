// import React from 'react';
import { Row, Col, Button, Alert } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
// import React, { useState } from 'react';
// import { useHistory } from 'react-router';
import { useHistory } from 'react-router-dom';

import * as Yup from 'yup';
import { Formik } from 'formik';
import useAuth from '../../../hooks/useAuth';
import useScriptRef from '../../../hooks/useScriptRef';

// const [email, setemail] = useState();
// const [password, setpassword] = useState();

// const [value, setValue] = useState({});

const FirebaseLogin = ({ className, ...rest }) => {
    const scriptedRef = useScriptRef();

    const { firebaseEmailPasswordSignIn, firebaseGoogleSignIn } = useAuth();

    const googleHandler = async () => {
        try {
            await firebaseGoogleSignIn();
        } catch (err) {
            console.error(err);
        }
    };
    const [inputField, setInputField] = useState({
        email: '',
        password: ''
    });

    const history = useHistory();
    const submitting = (e) => {
        e.preventDefault();
        // setInputField({ email });
        // setInputField({ password });
        history.push('/app/dashboard/default');
        console.log('hello');
    };

    return (
        <React.Fragment>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required')
                })}
                // onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                //     try {
                //         await firebaseEmailPasswordSignIn(values.email, values.password);

                //         if (scriptedRef.current) {
                //             setStatus({ success: true });
                //             setSubmitting(true);
                //         }
                //     } catch (err) {
                //         console.error(err);
                //         if (scriptedRef.current) {
                //             setStatus({ success: false });
                //             setErrors({ submit: err.message });
                //             setSubmitting(false);
                //         }
                //     }
                // }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate className={className} {...rest}>
                        <div className="form-group mb-3">
                            <input
                                // email={email}
                                className="form-control"
                                error={touched.email && errors.email}
                                label="Email Address / Username"
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="email"
                                placeholder="Email"
                                value={values.email}
                                onsubmitting={(e) => setInputField(e.target.email)}
                                // onSubmitting={() => setemail(.target.value)}
                                //  {onSubmit={(e)}=>setValue({...value,[e.target.email]:e.target.value})}
                            />
                            {touched.email && errors.email && <small class="text-danger form-text">{errors.email}</small>}
                        </div>
                        <div className="form-group mb-4">
                            <input
                                // password={password}
                                className="form-control"
                                error={touched.password && errors.password}
                                label="Password"
                                name="password"
                                placeholder="Password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="password"
                                value={values.password}
                                onsubmitting={(e) => setInputField(e.target.password)}
                                // onSubmitting={(e) => setpassword(e.target.value)}
                            />
                            {touched.password && errors.password && <small class="text-danger form-text">{errors.password}</small>}
                        </div>

                        {errors.submit && (
                            <Col sm={12}>
                                <Alert variant="danger">{errors.submit}</Alert>
                            </Col>
                        )}

                        <div className="custom-control custom-checkbox  text-left mb-4 mt-2">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">
                                Save credentials.
                            </label>
                        </div>

                        <Row>
                            <Col mt={2}>
                                <Button
                                    className="btn-block"
                                    color="primary"
                                    disabled={isSubmitting}
                                    size="large"
                                    type="submit"
                                    variant="primary"
                                    onClick={submitting}
                                >
                                    Signin
                                </Button>
                            </Col>
                        </Row>
                    </form>
                )}
            </Formik>

            <Row>
                {/* <Col sm={12}>
                    <h5 className="my-3"> OR </h5>
                </Col> */}
            </Row>

            <Row>
                <Col sm={12}>
                    {/* <Button onClick={googleHandler} variant="danger">
                        <i className="fa fa-lock" /> Sign in with Google
                    </Button> */}
                </Col>
            </Row>

            <hr />
        </React.Fragment>
    );
};

export default FirebaseLogin;
