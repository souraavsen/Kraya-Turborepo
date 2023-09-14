import React from "react";
import { shopRoutes } from "../../routes";
import { Route, Routes } from "react-router-dom";
import ShopNavbar from "../../components/Navbar/ShopNavbar";
import ShopFooter from "../../components/Footer/ShopFooter";

const ShopLayout: React.FC = () => {
  const getRoutes = () => {
    return shopRoutes.map((prop: any, key: number) => {
      return (
        <Route path={`/${prop.path}`} element={prop.component} key={key} />
      );
    });
  };

  return (
    <div>
      <ShopNavbar />
      <Routes>{getRoutes()}</Routes>
      <ShopFooter />
    </div>
  );
};

export default ShopLayout;
