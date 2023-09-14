import Bell from "./assets/Icons/Bell";
import Checklist from "./assets/Icons/Checklist";
import Dollar from "./assets/Icons/Dollar";
import Home from "./assets/Icons/Home";
import Receipt from "./assets/Icons/Receipt";
import Role from "./assets/Icons/Role";
import User from "./assets/Icons/User";
import UserGroup from "./assets/Icons/UserGroup";
import LoginPage from "./modules/Auth/pages";
import MainLogin from "./modules/Auth/pages/MainLogin";
import UserProfile from "./modules/Auth/pages/UserProfile";
import Dashboard from "./modules/Dashboard/pages";
import Shop from "./modules/Shop/pages";
import ProductDetails from "./modules/Shop/pages/ProductDetails";
import RFQSuccess from "./modules/Shop/pages/RFQSuccess";
import SearchProduct from "./modules/Shop/pages/SearchProduct";
import SendRFQ from "./modules/Shop/pages/SendRFQ";
import Wishlist from "./modules/Shop/pages/Wishlist";
import UserGroupManagement from "./modules/UserGroupManagement/pages";
import UserManagement from "./modules/UserManagement/pages";
import UserRoleManagement from "./modules/UserRoleManagement/pages";
import { RouteDetailsT } from "./types";

export const adminRoutes: RouteDetailsT[] = [
  {
    name: "Dashboard",
    icon: <Home classes='w-6 h-6 text-inherit' />,
    path: "dashboard",
    component: <Dashboard />,
    section: "menus",
  },
  {
    name: "Users",
    icon: <User classes='w-6 h-6 text-inherit' />,
    path: "users",
    component: <UserManagement />,
    section: "user_management",
  },
  {
    name: "Users Group",
    icon: <UserGroup classes='w-6 h-6 text-inherit' />,
    path: "users-group",
    component: <UserGroupManagement />,
    section: "user_management",
  },
  {
    name: "Roles",
    icon: <Role classes='w-6 h-6 text-inherit' />,
    path: "roles",
    component: <UserRoleManagement />,
    section: "user_management",
  },

  {
    name: "Notification",
    icon: <Bell classes='w-6 h-6 text-inherit' />,
    path: "notification",
    component: <Dashboard />,
    section: "procurement_management",
  },
  {
    name: "Payments",
    icon: <Dollar classes='w-6 h-6 text-inherit' />,
    path: "payments",
    component: <Dashboard />,
    section: "procurement_management",
  },
  {
    name: "Invoices",
    icon: <Receipt classes='w-6 h-6 text-inherit' />,
    path: "invoices",
    component: <Dashboard />,
    section: "procurement_management",
  },
  {
    name: "Payment History",
    icon: <Checklist classes='w-6 h-6 text-inherit' />,
    path: "payment-history",
    component: <Dashboard />,
    section: "procurement_management",
  },
  {
    name: "Order History",
    icon: <Receipt classes='w-6 h-6 text-inherit' />,
    path: "order-history",
    component: <Dashboard />,
    section: "procurement_management",
  },
  {
    name: "Shop",
    icon: <></>,
    path: "shop",
    component: <Shop />,
    section: "",
  },
  {
    name: "Product Details",
    icon: <></>,
    path: "shop/:id",
    component: <ProductDetails />,
    section: "",
  },
  {
    name: "Search Product",
    icon: <></>,
    path: "shop/search",
    component: <SearchProduct />,
    section: "",
  },
  {
    name: "Product Wishlist",
    icon: <></>,
    path: "shop/wishlist",
    component: <Wishlist />,
    section: "",
  },
  {
    name: "Send RFQ",
    icon: <></>,
    path: "shop/send-rfq",
    component: <SendRFQ />,
    section: "",
  },
  {
    name: "Success RFQ",
    icon: <></>,
    path: "shop/rfq-success",
    component: <RFQSuccess />,
    section: "",
  },
];

export const loginRoutes: RouteDetailsT[] = [
  {
    name: "Login",
    icon: <></>,
    path: "",
    component: <MainLogin />,
    section: "",
  },
  {
    name: "Login",
    icon: <></>,
    path: "hotel",
    component: <LoginPage />,
    section: "",
  },
  {
    name: "Login",
    icon: <></>,
    path: "vendor",
    component: <LoginPage />,
    section: "",
  },
  {
    name: "Login",
    icon: <></>,
    path: "profile/:username",
    component: <UserProfile />,
    section: "",
  },
];

export const shopRoutes: RouteDetailsT[] = [
  {
    name: "Shop",
    icon: <></>,
    path: "",
    component: <Shop />,
    section: "",
  },
];
