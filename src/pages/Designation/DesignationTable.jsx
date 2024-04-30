import { Button, Card, Col, Row } from "react-bootstrap";
import { records as data } from "./data";
import Table from "../../components/Table";
import { Link } from "react-router-dom";

const columns = [
    {
        Header: "ID",
        accessor: "id",
        sort: true,
    },
    {
        Header: "Name",
        accessor: "name",
        sort: true,
    },
    {
        Header: "Department",
        accessor: "department",
        sort: true,
    },
    {
        Header: "Designation",
        accessor: "designation",
        sort: true,
    },
    {
        Header: "Phone Number",
        accessor: "phone",
        sort: false,
    },
    {
        Header: "Age",
        accessor: "age",
        sort: true,
    },
    {
        Header: "Company",
        accessor: "company",
        sort: false,
    },
];

const sizePerPageList = [
    {
        text: "5",
        value: 5,
    },
    {
        text: "10",
        value: 10,
    },
    {
        text: "25",
        value: 25,
    },
    {
        text: "All",
        value: data.length,
    },
];

const DesignationTable = () => {
    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <Row className="container">
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="d-flex  justify-content-between align-items-center ">
                                <h4 className="header-title">Designation</h4>
                                <div className="">
                                    <Button className="btn-danger me-3 ">
                                        <Link
                                            className="text-decoration-none text-white "
                                            to="/addDesignation"
                                        >
                                            Add Designation
                                        </Link>
                                    </Button>
                                    <Button className="btn-danger">
                                        <Link
                                            className="text-decoration-none text-white "
                                            to="/updateDesignation"
                                        >
                                            Update Designation
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <p className="text-muted fs-14 mb-4">
                                This is the table of employee designation
                            </p>

                            <Table
                                columns={columns}
                                data={data}
                                pageSize={5}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default DesignationTable;
