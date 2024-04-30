import { Row, Col, Card, Form, Button } from "react-bootstrap";

const AddShift = () => {
    return (
        <div className="container my-5">
            <Card>
                <Card.Body>
                    <h4 className="header-title mt-0 text-center ">
                        Schedule Form
                    </h4>
                    <p className="sub-header text-center ">
                        Fill out all the field
                    </p>

                    <Form className="form-horizontal">
                        <Row className="d-flex justify-content-center ">
                            <Col md={6}>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label
                                        column
                                        lg={4}
                                        htmlFor="simpleinput"
                                    >
                                        Name
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control
                                            type="text"
                                            id="simpleinput"
                                            placeholder="Enter name"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label
                                        column
                                        lg={4}
                                        htmlFor="simpleinput"
                                    >
                                        Schedule Shift
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control
                                            type="text"
                                            id="simpleinput"
                                            placeholder="Enter Shift"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label
                                        column
                                        lg={4}
                                        htmlFor="simpleinput"
                                    >
                                        Date
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control
                                            type="text"
                                            id="simpleinput"
                                            placeholder="Sat 27"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label
                                        column
                                        lg={4}
                                        htmlFor="simpleinput"
                                    >
                                        Time
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control
                                            type="text"
                                            id="simpleinput"
                                            placeholder="9:30 am - 7:30 pm (8 hrs)"
                                        />
                                    </Col>
                                </Form.Group>

                               
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-center align-items-center my-5">
                            <Button type="submit">Submit</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AddShift;
