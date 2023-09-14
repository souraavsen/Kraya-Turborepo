import { Route, Routes } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./App.css";
import AdminLayout from "./layouts/admin";
// import {Layouts} from "ui";
import { HandleRedirectToAuth } from "./layouts/auth/HandleRedirectToAuth";
import LandingPage from "./modules/LandingPage/pages";
import AuthLayout from "./layouts/auth";

function App() {
  // const {Layouts}=Shared

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='admin/*' element={<AdminLayout/>} />
        <Route path='login/*' element={<HandleRedirectToAuth />} />
        <Route path='auth/*' element={<AuthLayout />} />
      </Routes>
    </div>
  );
}

export default App;
