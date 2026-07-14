import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateOrUpdateEmployee from "./Services/CreateOrUpdateemployee";
import ViewEmployee from "./Services/ViewEmployee";
import HeaderComponent from "./Services/HeaderComponent";
import ListEmployee from "./Services/ListEmployee";
import EmployeeServices from "./Services/EmployeeServices";

function App() {
  return (
    <div>

      <Router>

        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListEmployee />} />
            <Route path="/add-employee/:id" element={<CreateOrUpdateEmployee />} />
            <Route path="/view-employee/:id" element={<ViewEmployee />} />
          </Routes>
        </div>
      
      </Router>
    </div>
  );
}

export default App;