import { Row, Col, Card, Form, Button } from "react-bootstrap";

const NewTimeSheet = () => {
    return (
        <div className="container my-5">
            <Card>
                <Card.Body>
                    <h4 className="header-title mt-0 text-center ">
                        Time Sheet Form
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
                                       Date
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control
                                            type="text"
                                            id="simpleinput"
                                            placeholder="Enter date"
                                        />
                                    </Col>
                                </Form.Group>

                               

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label
                                        column
                                        lg={4}
                                        htmlFor="simpleinput"
                                    >
                                        Projects
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control
                                            type="number"
                                            id="simpleinput"
                                            placeholder="Enter projects"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label
                                        column
                                        lg={4}
                                        htmlFor="simpleinput"
                                    >
                                        Assigned Hours
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control
                                            type="number"
                                            id="simpleinput"
                                            placeholder="Enter assigned hours"
                                        />
                                    </Col>
                                </Form.Group>

                               

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label
                                        column
                                        lg={4}
                                        htmlFor="simpleinput"
                                    >
                                        Company
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control
                                            type="text"
                                            id="simpleinput"
                                            placeholder="Enter company"
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

export default NewTimeSheet;
