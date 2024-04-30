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
        Header: "Date",
        accessor: "timeSheet",
        sort: true,
    },
    
    {
        Header: "Projects",
        accessor: "projects",
        sort: false,
    },
    {
        Header: "Assigned Hours",
        accessor: "assignedHours",
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

const TimeSheetsTable = () => {
    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
        <Row className="container">
            <Col>
                <Card>
                    <Card.Body>
                        <div className="d-flex  justify-content-between align-items-center ">
                            <h4 className="header-title">Employer time sheets</h4>
                            <div className="">
                                <Button className="btn-danger me-3 ">
                                    <Link
                                        className="text-decoration-none text-white "
                                        to="/newTimeSheet"
                                    >
                                        New time sheets
                                    </Link>
                                </Button>
                                <Button className="btn-danger">
                                    <Link
                                        className="text-decoration-none text-white "
                                        to="/updateTimeSheet"
                                    >
                                        Update time sheets
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <p className="text-muted fs-14 mb-4">
                            This is the table of employer time sheets
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

export default TimeSheetsTable;