import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "./Root";
import DesignationTable from "../pages/Designation/DesignationTable";
import TimeSheetsTable from "../pages/TimeSheets/TimeSheetsTable";
import ShiftAndScheduleTable from "../pages/ShiftAndSchedule/ShiftAndScheduleTable";
import OverTime from "../pages/OverTime/OverTime";
import AddDesignationForm from "../pages/Designation/AddDesignationForm";
import UpdateDesignation from "../pages/Designation/UpdateDesignation";
import AddDepartments from "../pages/Departments/AddDepartments";
import UpdateDepartments from "../pages/Departments/UpdateDepartments";
import NewTimeSheet from "../pages/TimeSheets/NewTimeSheet";
import UpdateTimeSheet from "../pages/TimeSheets/UpdateTimeSheet";
import AddShift from "../pages/ShiftAndSchedule/AddShift";
import UpdateShift from "../pages/ShiftAndSchedule/UpdateShift";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/designation',
                element: <DesignationTable />
            },
            {
                path: '/timeSheets',
                element: <TimeSheetsTable />
            },
            {
                path: '/shiftAndSchedule',
                element: <ShiftAndScheduleTable />
            },
            {
                path: '/overTime',
                element: <OverTime />
            },
            {
                path: '/addDesignation',
                element: <AddDesignationForm />
            },
            {
                path: '/updateDesignation',
                element: <UpdateDesignation />
            },
            {
                path: '/addDepartments',
                element: <AddDepartments />
            },
            {
                path: '/updateDepartments',
                element: <UpdateDepartments />
            },
            {
                path: '/newTimeSheet',
                element: <NewTimeSheet />
            },
            {
                path: '/updateTimeSheet',
                element: <UpdateTimeSheet />
            },
            {
                path: '/addSchedule',
                element: <AddShift />
            },
            {
                path: '/updateSchedule',
                element: <UpdateShift />
            },
        ]
    }
])

export default router