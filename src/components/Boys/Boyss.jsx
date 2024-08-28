import React from "react";
import { Route, Routes } from "react-router-dom";
import Boys from "../Hero/Boys";
import Andy from "./Andy";
import Brett from "./Brett";
import Pepe from "./Pepe";
import Landwolf from "./Landwolf";
import Bdog from "./Bdog";

function Boyss() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/boys" element={<Boys />}></Route>
          <Route path="/boys/andy" element={<Andy />}></Route>
          <Route path="/boys/brett" element={<Brett />}></Route>
          <Route path="/boys/pepe" element={<Pepe />}></Route>
          <Route path="/boys/landwolf" element={<Landwolf />}></Route>
          <Route path="/boys/bdog" element={<Bdog />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default Boyss;
