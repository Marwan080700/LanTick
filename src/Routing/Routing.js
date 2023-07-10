import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "../pages/Home";
import TicketPrev from "../pages/TicketPrev";
import TicketApr from "../pages/TicketApr";
import Invoice from "../pages/Invoice";
import DetailTick from "../components/Modal/DetailTick";
import ListTrans from "../pages/ListTrans";
import AddTicket from "../pages/AddTicket";

import { UserContextProvider } from "../components/Context/UseContext";
import PrivateRoute from "../components/Private/PrivateRoute";

function Routing() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />

            {/* user private route */}
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/logged/TikPrev" element={<TicketPrev />} />
              <Route exact path="/logged/TikApr" element={<TicketApr />} />
              <Route exact path="/logged/Invoice" element={<Invoice />} />
              <Route
                exact
                path="/logged/TikApr/Detail"
                element={<DetailTick />}
              />
            </Route>

            {/* admin */}
            <Route exact path="/logged/Admin" element={<ListTrans />} />
            <Route
              exact
              path="/logged/Admin/AddTicket"
              element={<AddTicket />}
            />
          </Routes>
        </Router>
      </UserContextProvider>
    </>
  );
}

export default Routing;
