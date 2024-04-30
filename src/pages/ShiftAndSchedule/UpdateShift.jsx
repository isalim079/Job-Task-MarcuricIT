import { Card, Button,  Form } from "react-bootstrap";

const UpdateShift = () => {
    return (
        <div className="container my-5">
            <Card>
                <Card.Body>
                    <h4 className="header-title">
                        Update Schedule
                    </h4>
                    <p className="sub-header">
                        Fill out all the field
                    </p>

                    <Form noValidate>
                        <Form.Group
                            className="mb-3"
                            controlId="validationCustom01"
                        >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="Mark"
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>
                       
                        <Form.Group
                            className="mb-3"
                            controlId="validationCustom03"
                        >
                            <Form.Label>New Schedule</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Schedule"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid schedule shift.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="validationCustom04"
                        >
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Sat 27"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid date.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="validationCustom05"
                        >
                            <Form.Label>Time</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="9:30 am - 7:30 pm (8 hrs)"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid timing.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                id="validation-check"
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                            />
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UpdateShift;
