import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Modal from "./components/Modal";

function App() {
  const location = useLocation();
  const [person, setPerson] = useState({ base: "", toppings: [] });

  const [showModal, setShowModal] = useState(false);
  const addBase = (base) => {
    setPerson({ ...person, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!person.toppings.includes(topping)) {
      newToppings = [...person.toppings, topping];
    } else {
      newToppings = person.toppings.filter((item) => item !== topping);
    }
    setPerson({ ...person, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route
            path="/base"
            element={<Base addBase={addBase} person={person} />}
          />
          <Route
            path="/toppings"
            element={<Toppings addTopping={addTopping} person={person} />}
          />
          <Route
            path="/order"
            element={<Order person={person} setShowModal={setShowModal} />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
