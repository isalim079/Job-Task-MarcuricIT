const Navbar = () => {
    return (
        <div className="d-flex justify-content-center align-items-center bg-body-tertiary">
            <nav className="navbar navbar-expand-lg ">
                <div className="container ">
                    <div>
                        <a className="navbar-brand fw-bold " href="#">
                            OE
                        </a>
                    </div>
                    <div>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavDropdown"
                    >
                        <ul className="navbar-nav ms-5 ">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Employees
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            Departments
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/designation">
                                            Designation
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/timeSheets">
                                            Time Sheets
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/shiftAndSchedule">
                                            Shift and Schedule
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/overtime">
                                            Overtime
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
