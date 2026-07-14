import { useEffect, useState } from "react";
import EmployeeServices from "../Services/EmployeeServices";
import { useNavigate } from "react-router-dom";

function ListEmployee() {

    const navigate = useNavigate();

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeeServices.getEmployees()
            .then((res) => {
                setEmployees(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const editEmployee = (employeeId) => {
        navigate(`/add-employee/${employeeId}`);
    };

    const deleteEmployee = (employeeId) => {
        EmployeeServices.deleteEmployee(employeeId)
            .then(() => {
                setEmployees(
                    employees.filter((emp) => emp.id !== employeeId)
                );
            })
            .catch((err) => console.log(err));
    };

    const viewEmployee = (employeeId) => {
        navigate(`/view-employee/${employeeId}`);
    };


    return (
      

        <div>
            <h2 className="text-center">Employees</h2>

            <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button
                                        className="btn btn-info"
                                        onClick={() => editEmployee(employee.id)}
                                    >
                                        Update
                                    </button>

                                    <button
                                        className="btn btn-danger"
                                        style={{ marginLeft: "10px" }}
                                        onClick={() => deleteEmployee(employee.id)}
                                    >
                                        Delete
                                    </button>

                                    <button
                                        className="btn btn-secondary"
                                        style={{ marginLeft: "10px" }}
                                        onClick={() => viewEmployee(employee.id)}
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
     
    );
}

export default ListEmployee;