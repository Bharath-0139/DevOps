import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeServices from "../Services/EmployeeServices";

const ViewEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        EmployeeServices.getEmployeeById(id).then((res) => {
            setEmployee(res.data);
            console.log(employee);
        }).catch(err => console.log(err));
    }, []);

    return (
        <>
            <div className="card" style={{ width: "18rem", marginTop: "4rem", marginLeft: "auto", marginRight: "auto" }}>
                <img className="card-img-top" style={{ border: "2px solid" }} src="https://svgrepo.com" alt="Card image" />
                
                <div className="card-body">
                    <h5 className="card-title">Employee details </h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">First Name: {employee.firstName}</li>
                        <li className="list-group-item">Last Name: {employee.lastName}</li>
                        <li className="list-group-item">Email: {employee.email}</li>
                    </ul>
                    <button onClick={() => { navigate('/') }} className="btn btn-primary">back</button>
                </div>
            </div>
        </>
    );
};

export default ViewEmployee;