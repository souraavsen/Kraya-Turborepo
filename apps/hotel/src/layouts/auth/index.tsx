import React from "react";
import { Route, Routes } from "react-router-dom";
import { loginRoutes } from "../../routes";

const AuthLayout: React.FC = () => {
  const getRoutes = () => {
    return loginRoutes.map((prop: any, key: number) => {
      return (
        <Route path={`/${prop.path}`} element={prop.component} key={key} />
      );
    });
  };
  return (
    <div>
      <Routes>{getRoutes()}</Routes>
    </div>
  );
};

export default AuthLayout;
