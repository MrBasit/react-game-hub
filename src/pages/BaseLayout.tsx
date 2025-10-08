import { Outlet } from "react-router";
import AppHeader from "../components/app-header";

const BaseLayout = () => {
  return (
    <>
      <AppHeader></AppHeader>
      <Outlet></Outlet>
    </>
  );
};

export default BaseLayout;
