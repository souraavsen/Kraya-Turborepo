import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./modules/LandingPage/pages";
import LoginPage from "./modules/Auth/pages";
import AdminLayout from "./layouts/admin";
import ShopLayout from "./layouts/shop";
import { adminRoutes } from "./routes";

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='admin/*' element={<AdminLayout />}>
        {getAdminRoutes()}
      </Route>
      <Route path='shop/*' element={<ShopLayout />} />
      <Route path='login' element={<LoginPage />} />
    </Routes>
  );
}

export default App;

const getAdminRoutes = () => {
  return adminRoutes.map((prop: any, key: number) => {
    return <Route path={`${prop.path}`} element={prop.component} key={key} />;
  });
};
