import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import BurgerMenu from "../../assets/Icons/BurgerMenu";
import Cross from "../../assets/Icons/Cross";
import Sidebar from "../../components/Sidebar";
import { adminRoutes } from "../../routes";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [isCollaps, setIsCollaps] = useState<boolean>(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    if (
      window.location.pathname === "/admin" ||
      window.location.pathname === "/admin/"
    )
      navigate("/admin/dashboard");
  }, []);

  const getRoutes = () => {
    return adminRoutes.map((prop: any, key: number) => {
      return (
        <Route path={`/${prop.path}`} element={prop.component} key={key} />
      );
    });
  };

  const handleSidebarCollaps = () => {
    setIsCollaps(!isCollaps);
  };

  useEffect(() => {
    const sectionTitles = document.getElementsByClassName("section_title");
    const sectionDivider = document.getElementsByClassName("section_divider");

    if (isCollaps) {
      for (const element of sectionTitles) {
        element.classList.add("xl:hidden");
      }
      for (const divider of sectionDivider) {
        divider.classList.add("xl:mx-auto");
      }
    } else {
      for (const element of sectionTitles) {
        element.classList.remove("xl:hidden");
      }
      for (const divider of sectionDivider) {
        divider.classList.remove("xl:mx-auto");
      }
    }
  }, [isCollaps]);

  return (
    <div className='flex bg-bkg-primary'>
      {/* For Desktop Sidebar */}
      <div className='fixed left-0 hidden xl:block'>
        <Sidebar sidebarOptions={adminRoutes} isCollaps={isCollaps} />
      </div>

      {/* For Mobile Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "left-0" : "-left-[150vw]"
        } transition-all duration-1000 delay-200 absolute top-0 z-50`}
      >
        <div className='relative '>
          <Sidebar
            sidebarOptions={adminRoutes}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <div className='p-2 absolute z-50 top-0 right-0'>
            <div onClick={() => setIsSidebarOpen(false)}>
              <Cross classes='w-4 h-4 cursor-pointer' />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isCollaps
            ? "w-full laptop:w-[calc(100vw-5.5rem)] left-0 laptop:left-[5.5rem]"
            : "w-full laptop:w-[calc(100vw-14rem)] left-0 laptop:left-[14rem]"
        } min-h-screen fixed transition-all duration-300`}
      >
        <div className='hidden laptop:block z-50 absolute top-6 2xl:top-5 3xl:top-8 left-2 3xl:left-4'>
          <div onClick={handleSidebarCollaps}>
            <BurgerMenu classes='w-6 h-6 text-content-primary cursor-pointer' />
          </div>
        </div>
        {/* For Mobile Devices */}
        <div className='block laptop:hidden absolute top-5 left-4'>
          <div onClick={() => setIsSidebarOpen(true)}>
            <BurgerMenu classes='w-6 h-6 text-content-primary cursor-pointer' />
          </div>
        </div>

        {/* ?tab=dashboard */}
        
        <Routes>{getRoutes()}</Routes>
      </div>
    </div>
  );
};

export default AdminLayout;
