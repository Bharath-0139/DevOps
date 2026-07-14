import axios from 'axios';

const EMPLOYEE_BASE_URL = "http://localhost:8080/api/employees"

class EmployeeServices
{
    getEmployees()
    {
        return axios.get(EMPLOYEE_BASE_URL);//select * from employees
    }

    createEmployee(employee)
    {
        return axios.post(EMPLOYEE_BASE_URL, employee)//insert java
    }

    getEmployeeById(employeeId) //5
    {
        return axios.get(EMPLOYEE_BASE_URL + '/' + employeeId);//select * from empoyee where id
    }

    updateEmployee(employeeId, employee)
    {
        return axios.put(EMPLOYEE_BASE_URL + '/' + employeeId, employee);//update java
    }

    DeleteEmployee(employeeId) {
        return axios.delete(EMPLOYEE_BASE_URL + '/' + employeeId);
    }
}
export default new EmployeeServices();