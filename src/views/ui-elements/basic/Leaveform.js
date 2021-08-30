import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Leaveform = () => {
    const [leavesData, setLeavesData] = useState({
        name: '',
        phone: '',
        toDate: '',
        formDate: '',
        reason: ''
    });

    let [leavesDataError, setLeavesDataError] = useState({
        nameError: '',
        phoneError: '',
        toDateError: '',
        formDateError: '',
        reasonError: ''
    });

    // validate User
    let validateName = (e) => {
        setLeavesData({ ...leavesData, name: e.target.value });
        let regExp = /^[a-zA-Z0-9_]{5,10}$/;
        !regExp.test(e.target.value)
            ? setLeavesDataError({
                  ...leavesDataError,
                  nameError: 'Enter a Proper Name'
              })
            : setLeavesDataError({ ...leavesDataError, nameError: '' });
    };

    let validatePhone = (e) => {
        setLeavesData({ ...leavesData, phone: e.target.value });
        let regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        !regExp.test(e.target.value)
            ? setLeavesDataError({
                  ...leavesDataError,
                  phoneError: 'Enter a Proper Number'
              })
            : setLeavesDataError({ ...leavesDataError, phoneError: '' });
    };

    let validateToDate = (e) => {
        setLeavesData({ ...leavesData, toDate: e.target.value });
        // let regExp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        !e.target.value
            ? setLeavesDataError({
                  ...leavesDataError,
                  toDateError: 'Enter a Proper ToDate'
              })
            : setLeavesDataError({ ...leavesDataError, toDateError: '' });
    };

    let validateFormDate = (e) => {
        setLeavesData({ ...leavesData, formDate: e.target.value });
        // let regExp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        !e.target.value
            ? setLeavesDataError({
                  ...leavesDataError,
                  formDateError: 'Enter a Proper FormDate'
              })
            : setLeavesDataError({ ...leavesDataError, formDateError: '' });
    };

    let validateReason = (e) => {
        setLeavesData({ ...leavesData, reason: e.target.value });
        // let regExp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        !e.target.value
            ? setLeavesDataError({
                  ...leavesDataError,
                  reasonError: 'Enter a Proper Reason'
              })
            : setLeavesDataError({ ...leavesDataError, reasonError: '' });
    };

    const submit = (e) => {
        e.preventDefault();
        console.log('leaves', leavesData);
    };

    return (
        <div>
            <h3 className="mb-3 mt-3">Leaves</h3>
            <Form>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                name="name"
                                className={`${leavesDataError.nameError.length > 0 ? 'is-invalid' : ''}`}
                                onChange={validateName}
                            />
                            {leavesDataError.nameError.length > 0 ? (
                                <small className="text-danger font-weight-bold">{leavesDataError.nameError}</small>
                            ) : (
                                ''
                            )}
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                onChange={validatePhone}
                                placeholder="Phone"
                                className={`${leavesDataError.phoneError.length > 0 ? 'is-invalid' : ''}`}
                            />
                            {leavesDataError.phoneError.length > 0 ? (
                                <small className="text-danger font-weight-bold">{leavesDataError.phoneError}</small>
                            ) : (
                                ''
                            )}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>To</Form.Label>
                            <Form.Control
                                type="date"
                                name="toDate"
                                className={`${leavesDataError.toDateError.length > 0 ? 'is-invalid' : ''}`}
                                onChange={validateToDate}
                            />
                            {leavesDataError.toDateError.length > 0 ? (
                                <small className="text-danger font-weight-bold">{leavesDataError.toDateError}</small>
                            ) : (
                                ''
                            )}
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>From</Form.Label>
                            <Form.Control
                                type="date"
                                name="formDate"
                                className={`${leavesDataError.formDateError.length > 0 ? 'is-invalid' : ''}`}
                                onChange={validateFormDate}
                            />
                            {leavesDataError.formDateError.length > 0 ? (
                                <small className="text-danger font-weight-bold">{leavesDataError.formDateError}</small>
                            ) : (
                                ''
                            )}
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Reason</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="reason"
                        onChange={validateReason}
                        placeholder="Leave a comment here"
                        className={`${leavesDataError.reasonError.length > 0 ? 'is-invalid' : ''}`}
                        style={{ height: '100px' }}
                    />
                    {leavesDataError.reasonError.length > 0 ? (
                        <small className="text-danger font-weight-bold">{leavesDataError.reasonError}</small>
                    ) : (
                        ''
                    )}
                </Form.Group>
                <Button variant="primary" className="w-50" type="submit" onClick={submit}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Leaveform;
