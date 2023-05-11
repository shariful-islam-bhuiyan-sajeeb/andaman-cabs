import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Share/Header";
import Drawer from "../Share/Headers/Drawer";
import Drawer2 from "../Share/Headers/Drawer2";

const Main = () => {
  return (
    <div>
      {/* <Drawer /> */}
      <Drawer2 />

      {/* <Header />
      <Outlet /> */}
    </div>
  );
};

export default Main;
