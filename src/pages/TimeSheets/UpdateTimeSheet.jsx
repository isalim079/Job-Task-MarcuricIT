import { Card, Button,  Form } from "react-bootstrap";

const UpdateTimeSheet = () => {
    return (
        <div className="container my-5">
        <Card>
            <Card.Body>
                <h4 className="header-title">
                    Update Time Sheet Form
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
                        <Form.Label>New Date</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter new date"
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
                        <Form.Label>Projects</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter projects name"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid projects.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="validationCustom05"
                    >
                        <Form.Label>Assigned Hours</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter projects name"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid time.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="validationCustom05"
                    >
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter projects name"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid company.
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

export default UpdateTimeSheet;