import React, { Component } from 'react';
// import Details from "./details";

// import './App.css';
import { withRouter } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import details from './Details';
import { Form, Button, Row, Col, Container, Table } from 'react-bootstrap';

class PaySlip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            designation: '',
            employeeId: '',
            month: '',
            year: '',
            basicSalary: '',
            providentFund: '',
            hraAllowance: '',
            esi: '',
            otherAllowance: '',
            tds: '',
            conveyanceAllowance: '',
            totalGrosspay: '',
            totalDeductions: '',
            netSalary: '',
            date: '',
            nameOftheBank: '',
            signatureOftheemployee: ''
        };
    }

    componentDidMount() {
        console.log(this.state, this.props, 'state');

        const details = this.props.location.state;
        this.setState({
            employee: details?.employee,
            month: details?.month,
            year: details?.year,
            employeeId: details?.employeeId,
            designation: details?.designation,
            salary: details?.salary
        });
    }

    printDocument() {
        const input = document.getElementById('divToPrint');

        html2canvas(input, { windowWidth: 800, height: 1000 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('portrait', 'mm', 'a4');
            pdf.scaleFactor = 2;

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgData.height * pdfWidth) / imgData.width;

            pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, pdfWidth, pdfHeight);
            // pdf.output('dataurlnewwindow');
            pdf.save('download.pdf');
        });
    }

    render() {
        console.log(this.state, 'state');
        return (
            <div id="divToPrint" className="mt4">
                <Container fluid="md">
                    <Row>
                        <Col md={{ span: 5, offset: 4 }}>
                            <Row>
                                <h3> NUEVE IT SOLUTIONS PVT LTD </h3>
                            </Row>
                        </Col>
                        <Col md={{ span: 5, offset: 4 }}>
                            NUEVE IT SOLUTIONS PVT LTD, 3rd Floor, Kallepalli Building, NGGO's Colony, Pattabhi Reddy Thota, Visakhapatnam,
                            Andhra Pradesh-530007, Telno :081977177, Email id: abc@gsff.com
                        </Col>
                    </Row>
                </Container>
                {/* <div className="line"> */}
                <div class="divider py-1 bg-dark"></div>
                {/* <div className="heading">
                        <h3> NUEVE IT SOLUTIONS PVT LTD </h3>

                        <p>3rd Floor, Kallepalli Building, </p>

                        <p>NGGO's Colony, Pattabhi Reddy Thota, </p>
                        <p>Visakhapatnam, Andhra Pradesh-530007</p>

                        <p>Telno :081977177</p>

                        <p>Email id: abc@gsff.com</p>
                    </div> */}

                <Container fluid="md">
                    <Row>
                        <Col md={{ span: 5, offset: 5 }}>
                            <Row>
                                <h3>Salary slip </h3>{' '}
                            </Row>
                        </Col>
                        <Col md={{ span: 5, offset: 5 }}>
                            <Row>
                                Employee Name <a className="space" /> : <a className="spacen" />
                                {this.state.employee}
                            </Row>

                            <Row>
                                Designation <a className="desig" /> : <a className="design" />
                                {this.state.designation}{' '}
                            </Row>

                            <Row>
                                Employee ID <a className="emp" /> : <a className="empi" /> {this.state.employeeId}
                            </Row>

                            <Row>
                                Month
                                <a className="mon" /> :<a className="mont" />
                                {this.state.month}
                            </Row>

                            <Row>
                                Year
                                <a className="yr" /> : <a className="yea" />
                                {this.state.year}{' '}
                            </Row>
                        </Col>
                    </Row>
                </Container>

                {/* <div className="details">
                        <h4> Salary slip</h4>

                        <p>
                            Employee Name <a className="space" />:<a className="spacen" />
                            {this.state.employee}
                        </p>

                        <p>
                            Designation <a className="desig" />: <a className="design" />
                            {this.state.designation}{' '}
                        </p>

                        <p>
                            Employee ID <a className="emp" /> : <a className="empi" /> {this.state.employeeId}
                        </p>

                        <p>
                            Month
                            <a className="mon" /> :<a className="mont" />
                            {this.state.month}
                        </p>

                        <p>
                            Year
                            <a className="yr" />: <a className="yea" />
                            {this.state.year}{' '}
                        </p>
                    </div> */}

                <Table bordered hover size="sm">
                    <caption style={{ captionSide: 'bottom' }}>-The 12% PF amount will be credited to PF every month</caption>

                    <thead>
                        <tr>
                            <th colspan="2" width="600">
                                Earnings
                            </th>
                            <th colspan="2" width="600">
                                Deductions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Basic salary {this.state.basicSalary}</td>
                            <td> {this.state.salary}</td>
                            <td>Provident Fund{this.state.providentFund}</td>
                            <td>1234</td>
                        </tr>
                        <tr>
                            <td>HRA Allowance{this.state.hraAllowance}</td>
                            <td>1234</td>
                            <td>ESI{this.state.esi}</td>
                            <td>1234</td>
                        </tr>
                        <tr>
                            <td>Other Allowance{this.state.otherAllowance}</td>
                            <td>1234</td>
                            <td>TDS {this.state.tds}</td>
                            <td>1234</td>
                        </tr>
                        <tr>
                            <td>Conveyance Allowance {this.state.conveyanceAllowance}</td>
                            <td>1234</td>
                            <td> </td>
                            <td>1234</td>
                        </tr>
                        <tr>
                            <td>Total Gross pay{this.state.totalGrosspay}</td>
                            <td>1234</td>
                            <td>Total Deductions{this.state.totalDeductions}</td>
                            <td>1234</td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td> </td>
                            <td>NET Salary{this.state.netSalary}</td>
                            <td> </td>
                        </tr>
                    </tbody>
                </Table>

                {/* <div>
                        <table className="table" style={{ width: '80%' }} align="center">
                            <caption style={{ captionSide: 'bottom' }}>-The 12% PF amount will be credited to PF every month</caption>
                            <tr>
                                <th colspan="2">Earnings</th>
                                <th colspan="2">Deductions</th>
                            </tr>
                            <tr>
                                <td>Basic salary {this.state.basicSalary}</td>
                                <td> {this.state.salary}</td>
                                <td>Provident Fund{this.state.providentFund}</td>
                                <td>1234</td>
                            </tr>
                            <tr>
                                <td>HRA Allowance{this.state.hraAllowance}</td>
                                <td>1234</td>
                                <td>ESI{this.state.esi}</td>
                                <td>1234</td>
                            </tr>
                            <tr>
                                <td>Other Allowance{this.state.otherAllowance}</td>
                                <td>1234</td>
                                <td>TDS {this.state.tds}</td>
                                <td>1234</td>
                            </tr>
                            <tr>
                                <td>Conveyance Allowance {this.state.conveyanceAllowance}</td>
                                <td>1234</td>
                                <td> </td>
                                <td>1234</td>
                            </tr>
                            <tr>
                                <td>Total Gross pay{this.state.totalGrosspay}</td>
                                <td>1234</td>
                                <td>Total Deductions{this.state.totalDeductions}</td>
                                <td>1234</td>
                            </tr>
                            <tr>
                                <td> </td>
                                <td> </td>
                                <td>NET Salary{this.state.netSalary}</td>
                                <td> </td>
                            </tr>
                        </table>
                    </div> */}
                <Container fluid="md">
                    <Row>
                        <Col>
                            <Row>
                                <Col md={6}>Date: {this.state.date}</Col>
                                <Col aria-modal={6}>Name of the bank: ICICI Bank {this.state.nameOftheBank}</Col>
                            </Row>

                            <Row>
                                <Col md={6}>Signature of the Employee:{this.state.signatureOftheemployee}</Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Row>
                                        <Button variant="primary" size="sm" onClick={this.printDocument} className="print w-50">
                                            Print
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

                {/* <div>
                        <div className="date">Date: {this.state.date} </div>
                        <div className="bank"> Name of the bank: ICICI Bank {this.state.nameOftheBank}</div>
                        <div className="sig">Signature of the Employee:{this.state.signatureOftheemployee}</div>
                    </div> */}
                {/* <div>
                        <button onClick={this.printDocument} className="print">
                            Print
                        </button>
                    </div>
                </div>
            </div> */}
            </div>
        );
    }
}

export default withRouter(PaySlip);
