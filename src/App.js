import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Andy from "./components/Boys/Andy";
import Pepe from "./components/Boys/Pepe";
import Brett from "./components/Boys/Brett";
import Landwolf from "./components/Boys/Landwolf";
import Bdog from "./components/Boys/Bdog";
import Plusechain from "./components/Chains/Plusechain";
import Base from "./components/Chains/Base";
import Plusechains from "./components/Bridge/Plusechains";
import Bases from "./components/Bridge/Bases";

const App = () => {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen w-full mx-auto bg-black">
        <Header />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/boys/andy" element={<Andy />} />
          <Route path="/boys/pepe" element={<Pepe />} />
          <Route path="/boys/brett" element={<Brett />} />
          <Route path="/boys/landwolf" element={<Landwolf />} />
          <Route path="/boys/bdog" element={<Bdog />} />
          <Route path="/chains/pulsechain" element={<Plusechain />} />
          <Route path="/chains/base" element={<Base />} />
          <Route path="/bridge/pulsechains" element={<Plusechains />} />
          <Route path="/bridge/base" element={<Bases />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
