import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./auth/SignIn";
import Profile from "./auth/Profile";
import CustomerLayout from "layouts/customer";
import AdminLayout from "layouts/admin";
import AddVehicle from "./admin/vehicles/AddVehicle";
import EditCustomer from "./admin/customers/components/EditCustomer";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="signin" element={<SignIn />} />
      <Route path="profile" element={<Profile />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="admin/vehicles/addvehicle" element={<AddVehicle />} />
      <Route path="customer/*" element={<CustomerLayout />} />
      <Route path="/" element={<Navigate to="/customer" replace />} />
      <Route path="edit-customer" element={<EditCustomer />} />
    </Routes>
  );
};

export default AllRoutes;
