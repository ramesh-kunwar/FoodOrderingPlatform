import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>Home Page</Layout>} />
      <Route path="/user-profile" element={<div>User profile page</div>} />
      <Route
        path="/*"
        element={
          <div>
            <Navigate to={"/"} />
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
