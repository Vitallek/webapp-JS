import React from "react";
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Main from "./Main";
import GuestPanel from "./GuestPanel";
import UserPanel from "./generalPanels/UserPanel";
import EmpPanel from "./generalPanels/EmpPanel";
import AdminPanel from "./generalPanels/AdminPanel";

import WheelList from "./components/wheels/wheels-list.component";
import ManufacturerList from "./components/manufacturers/manufacturers-list.component";
import EngineList from "./components/engines/engines-list.component";
import EmployeeList from "./components/employees/employees-list.component";
import OrderTypeList from "./components/order_types/order_types-list.component";
import VehicleModelList from "./components/vehicle_models/vehicle_models-list.component";
import OrdersList from "./components/orders/orders-list.component";
import PaymentTypeList from "./components/payment_types/payment_types-list.component";
import QualificationsList from "./components/qualifications/qualifications-list.component";
import TransmissionsList from "./components/transmissions/transmissions-list.component";
import TurboList from "./components/turbos/turbos-list.component";
import VehicleTypeList from "./components/vehicle_types/vehicle_types-list.component";
import UsersList from "./components/userrrs/users-list.component";
function App() {
  return(
    <div class="app">
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/guest' element={<GuestPanel/>}/>
          <Route path='/admin' element={<AdminPanel/>}>
            <Route path={`/admin/wheels`} element={<WheelList/>}/>
            <Route path={`/admin/manufacturers`} element={<ManufacturerList/>} />
            <Route path={`/admin/engines`} element={<EngineList/>} />
            <Route path={`/admin/employees`} element={<EmployeeList/>} />
            <Route path={`/admin/order_types`} element={<OrderTypeList/>} />
            <Route path={`/admin/vehicle_models`} element={<VehicleModelList/>} />
            <Route path={`/admin/orders`} element={<OrdersList/>} />
            <Route path={`/admin/payment_types`} element={<PaymentTypeList/>} />
            <Route path={`/admin/qualifications`} element={<QualificationsList/>} />
            <Route path={`/admin/transmissions`} element={<TransmissionsList/>} />
            <Route path={`/admin/turbos`} element={<TurboList/>} />
            <Route path={`/admin/vehicle_types`} element={<VehicleTypeList/>} />
            <Route path={`/admin/users`} element={<UsersList/>} />
            </Route>
          <Route path='/user' element={<UserPanel/>}>

            </Route>

          
        </Routes>
      </Router>
    </div>
  )
}

export default App;