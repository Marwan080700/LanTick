import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

// import component
import Navigation from "../components/navigations/Navigation";
import DaftarTicket from "../components/DaftarTicket";
import Banner from "../components/Banner";
import CardInputTicket from "../components/CardInputTicket";
import Footer from "../components/Footer";
import Login from "../components/Modal/Login";

const Home = () => {
  return (
    <>
      <div>
        <Navigation />

        <main>
          <Banner />
          <CardInputTicket />
          <DaftarTicket />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
