// import DatePicker from 'react-datepicker';
import React, { Component } from 'react';
// import Select from 'react-select';
// import 'react-datepicker/dist/react-datepicker.css';

// import './App.css';
import { withRouter } from 'react-router-dom';
import { ValidatorForm } from 'react-form-validator-core';
// import Form from 'react-validation/build/form';
import { Form } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Input from 'react-validation/build/input';

const employeeNames = [
    {
        label: 'ALLA LOKESH VENKATA KRISHNA SAI KIRAN',
        value: 'ALLA LOKESH VENKATA KRISHNA SAI KIRAN',
        id: 'NIS031'
    },
    {
        label: 'ATHTHI SUDHA LAVANYA',
        value: 'ATHTHI SUDHA LAVANYA',
        id: 'NIS037'
    },
    {
        label: 'BANGARU JYOTHI SWAROOP',
        value: 'BANGARU JYOTHI SWAROOP',
        id: 'NIS026'
    },
    { label: 'JANNI NAVYA SRI SAI', value: 'JANNI NAVYA SRI SAI', id: 'NIS030' },
    {
        label: 'KAKI VEERA VENKATA SURYANARAYANA',
        value: 'KAKI VEERA VENKATA SURYANARAYANA',
        id: 'NIS011'
    },
    {
        label: 'KANCHI PRABHAKARA VENKATA DURGAPRASAD',
        value: 'KANCHI PRABHAKARA VENKATA DURGAPRASAD',
        id: 'NIS017'
    },
    { label: 'KATUMALLA KISHORE', value: 'KATUMALLA KISHORE', id: 'NIS022' },
    { label: 'KELLA MOUNIKA', value: 'KELLA MOUNIKA', id: 'NIS014' },
    {
        label: 'KONDAVEETY JAYANTH ADITYA',
        value: 'KONDAVEETY JAYANTH ADITYA',
        id: 'NIS034'
    },
    { label: 'PITTA RAMU', value: 'PITTA RAMU', id: 'NIS027' },
    {
        label: 'POLLAYI MANDALA LAXMI SIRISHA',
        value: 'POLLAYI MANDALA LAXMI SIRISHA',
        id: 'NIS032'
    },
    {
        label: 'PORIPIREDDY BALA VENKATA KRISHNA',
        value: 'PORIPIREDDY BALA VENKATA KRISHNA',
        id: 'NIS001'
    },
    {
        label: 'PORIPIREDDY PADMA TULASI',
        value: 'PORIPIREDDY PADMA TULASI',
        id: 'NIS002'
    },
    {
        label: 'PRAVEEN KUMAR VYKUNTAPU',
        value: 'PRAVEEN KUMAR VYKUNTAPU',
        id: 'NIS036'
    },
    { label: 'UBIDA JASWANTH', value: 'UBIDA JASWANTH', id: 'NIS035' },
    { label: 'SHAIK MUNEER', value: 'SHAIK MUNEER', id: 'NIS039' },
    { label: 'SRIDHAR REDDY PALLE', value: 'SRIDHAR REDDY PALLE', id: 'NIS038' },
    { label: 'GAYATHRI BADDA', value: 'GAYATHRI BADDA', id: 'NIS040' },
    { label: 'DEVI TANALA', value: 'DEVI TANALA', id: 'NIS041' },
    { label: 'ZAKIR MOHHAMED', value: 'ZAKIR MOHHAMED', id: 'NIS042' },
    { label: 'RAJENDRA NUDUPURI', value: 'RAJENDRA NUDUPURI', id: 'NIS043' },
    {
        label: 'SINDHU BHARGAVI ARUNA',
        value: 'SINDHU BHARGAVI ARUNA',
        id: 'NIS044'
    }
];
const months = [
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' }
];
const years = [
    { label: '2018', value: '2018' },
    { label: '2019', value: '2019' },
    { label: '2020', value: '2020' },
    { label: '2021', value: '2021' },
    { label: '2022', value: '2022' },
    { label: '2023', value: '2023' },
    { label: '2024', value: '2024' },
    { label: '2025', value: '2025' },
    { label: '2026', value: '2026' },
    { label: '2027', value: '2027' },
    { label: '2028', value: '2028' }
];

class Details extends Component {
    constructor() {
        super();
        this.state = {
            employee: null,
            month: null,
            year: null,
            startDate: new Date(),

            salary: '',
            employeeId: '',
            designation: '',
            number: '',
            formErrors: {}
        };
        this.initialState = this.state;
    }
    handleFormValidation() {
        const { employee, employeeId, designation, month, year, Date, salary } = this.state;
        let formErrors = {};
        let formIsValid = true;
        if (!employee) {
            formIsValid = false;
            formErrors['employeeErr'] = 'employee Name is required.';
        }
        if (!designation) {
            formIsValid = false;
            formErrors['designationErr'] = 'designation is required.';
        }
        if (!employeeId) {
            formIsValid = false;
            formErrors['employeeIdErr'] = 'employeeid is required.';
        }
        if (!month) {
            formIsValid = false;
            formErrors['monthErr'] = 'month is required.';
        }
        if (!year) {
            formIsValid = false;
            formErrors['yearErr'] = 'year is required.';
        }
        if (!salary) {
            formIsValid = false;
            formErrors['salaryErr'] = 'salary is required';
        }

        this.setState({ formErrors: formErrors });
        return formIsValid;
    }
    handleChange = (e) => {
        console.log('changed sridhar ', e.target);
        const { name, value } = e.target;
        console.log('value is ', e.target.value, 'sridar name is ', e.target.name);
        this.setState({ [name]: value });
        // console.log("employee name is ",e.target.value);
        //     this.setState({employee:e.target.value});
    };

    handelSelectEmployeeName(event) {
        console.log(event?.target?.value, 'event');
        this.setState({ employee: event?.target?.value });
    }
    handleSelectmonths(e) {
        console.log(e?.target?.value, 'month');
        this.setState({ month: e?.target?.value });
    }
    handleSelectyears(year) {
        console.log(year?.target?.value, 'year');
        this.setState({ year: year?.target?.value });
    }
    onInputSalary(e) {
        this.setState({
            salary: e.target.value
        });
    }
    onInputemployeeId(e) {
        console.log(e.target, 'eee');
        this.setState({
            employeeId: e.target.value
        });
    }
    onInputdesignation(e) {
        this.setState({
            designation: e.target.value
        });
    }
    handleSubmit() {
        console.log(this.state, 'state');

        if (this.handleFormValidation()) {
            console.log('helo');
            this.setState(this.initialState);

            this.props.history.push({
                pathname: '/payslip',
                state: this.state
            });
        }
    }
    render() {
        console.log(this.state, 'state');
        const { employeeErr, designationErr, employeeIdErr, monthErr, yearErr, dateErr, salaryErr } = this.state.formErrors;
        return (
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Employee Name
                    </Form.Label>
                    <Col sm={10}></Col>
                    <Form.Select
                        required
                        aria-label="Employee Name"
                        name="employee"
                        onSubmit={this.handleSubmit}
                        onChange={this.handleChange}
                        className={employeeErr ? ' showError' : ''}
                        value={this.state.employee}
                        // onChange={(e) => this.handelSelectEmployeeName(e)}
                        size="lg"
                    >
                        <>
                            {' '}
                            <option selected disabled value="">
                                Select the employee name
                            </option>
                        </>
                        <div style={{ color: 'red' }}>{this.state.employee}</div>
                        {employeeNames.map((option) => (
                            <>
                                <option value={option.value}>{option.label}</option>
                            </>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontal">
                    <Form.Label column sm={2}>
                        Employee ID
                    </Form.Label>
                    <Col sm={10}></Col>
                    <Form.Control
                        placeholder="Employee ID"
                        size="sm"
                        className={employeeIdErr ? ' showError' : ''}
                        value={this.state.employeeId}
                        onChange={(e) => this.onInputemployeeId(e)}
                    />
                    {employeeIdErr && <div style={{ color: 'red', paddingBottom: 10 }}>{employeeIdErr}</div>}
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="designation">
                    <Form.Label column sm={2}>
                        Designation
                    </Form.Label>
                    <Col sm={10}></Col>
                    <Form.Control
                        type="text"
                        placeholder="Designation"
                        className={designationErr ? ' showError' : ''}
                        value={this.state.designation}
                        onChange={(e) => this.onInputdesignation(e)}
                    />{' '}
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="Month">
                    <Form.Label column sm={2}>
                        Month
                    </Form.Label>
                    <Col sm={10}></Col>
                    <Form.Select
                        required
                        aria-label="Month"
                        name="month"
                        onSubmit={this.handleSubmit}
                        onChange={this.handleChange}
                        className={monthErr ? ' showError' : ''}
                        value={this.state.month}
                        // onChange={(month) => this.handleSelectmonths(month)}
                        size="lg"
                    >
                        <>
                            {' '}
                            <option selected disabled value=" ">
                                Select month
                            </option>
                        </>
                        <div style={{ color: 'red' }}>{this.state.months}</div>
                        {months.map((option) => (
                            <>
                                <option value={option.value}>{option.label}</option>
                            </>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="year">
                    <Form.Label column sm={2}>
                        Year
                    </Form.Label>
                    <Col sm={10}></Col>
                    <Form.Select
                        onSubmit={this.handleSubmit}
                        aria-label="year"
                        name="year"
                        value={this.state.year}
                        // onChange={(year) => this.handleSelectyears(year)}
                        onChange={this.handleChange}
                        className={yearErr ? ' showError' : ''}
                    >
                        {yearErr && <div style={{ color: 'red', paddingBottom: 10 }}>{yearErr}</div>}
                        <>
                            {' '}
                            <option selected disabled value=" ">
                                Select Year
                            </option>
                        </>

                        {years.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="detailsdate">
                    <Form.Label column sm={2}>
                        Date
                    </Form.Label>
                    <Col sm={10}></Col>
                    <Form.Control required type="date" placeholder="Date" />
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="salary">
                    <Form.Label column sm={2}>
                        Salary
                    </Form.Label>
                    <Col sm={10}></Col>
                    <Form.Control
                        onSubmit={this.handleSubmit}
                        placeholder="Salary"
                        name="salary"
                        value={this.state.salary}
                        onChange={this.handleChange}
                        // onChange={(e) => this.onInputSalary(e)}
                        class="col-xs-4"
                        className={salaryErr ? ' showError' : ''}
                    />{' '}
                    {salaryErr && <div style={{ color: 'red', paddingBottom: 10 }}>{salaryErr}</div>}
                </Form.Group>
                <button variant="primary" onClick={() => this.handleSubmit()} className="submit" type="submit">
                    Submit
                </button>
            </Form>
        );
    }
}
export default withRouter(Details);
