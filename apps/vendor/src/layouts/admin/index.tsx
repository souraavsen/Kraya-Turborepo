import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cross from "../../assets/Icons/Cross";
import Sidebar from "../../components/Sidebar";
import { adminRoutes } from "../../routes";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [isCollaps, setIsCollaps] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    if (
      window.location.pathname === "/admin" ||
      window.location.pathname === "/admin/"
    )
      navigate("/admin/dashboard");
  }, []);

  const handleSidebarCollaps = () => {
    setIsCollaps(!isCollaps);
  };

  useEffect(() => {
    if (isCollaps) {
      const sectionTitles = document.getElementsByClassName("section_title");
      for (const element of sectionTitles) {
        element.classList.add("hidden");
      }
    } else {
      const sectionTitles = document.getElementsByClassName("section_title");
      for (const element of sectionTitles) {
        element.classList.remove("hidden");
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

      {/* For Dektop Sidebar Trigger */}
      <div
        className={`${
          isCollaps
            ? "w-full xl:w-[calc(100vw-5.5rem)] left-0 xl:left-[5.5rem]"
            : "w-full xl:w-[calc(100vw-14rem)] left-0 xl:left-[14rem]"
        } min-h-screen fixed transition-all duration-300`}
      >
        <div className='hidden xl:block absolute top-6 -left-2'>
          {!isCollaps ? (
            <MenuFoldOutlined
              className='text-content-primary opacity-60 text-xl relative right-0'
              onClick={handleSidebarCollaps}
            />
          ) : (
            <MenuUnfoldOutlined
              className='text-content-primary opacity-60 text-xl relative right-0'
              onClick={handleSidebarCollaps}
            />
          )}
        </div>

        {/* For Mobile Sidebar Trigger */}
        <div className='block xl:hidden absolute top-5'>
          <MenuFoldOutlined
            className='rotate-180'
            onClick={() => setIsSidebarOpen(true)}
          />
        </div>

        <Outlet />
        {/* <Routes>{getRoutes()}</Routes> */}
      </div>
    </div>
  );
};

export default AdminLayout;
