import React from "react";
import { Link } from "react-router-dom";

import DaftarTicket from "../components/DaftarTicket";
import Banner from "../components/Banner";
import CardInputTicket from "../components/CardInputTicket";
import Footer from "../components/Footer";

const LoggedHome = () => {
  return (
    <>
      <div>
        <header></header>
        <main>
          <Banner />
          <CardInputTicket />
          <Link to={"/Logged/TikPrev"} style={{ textDecoration: "none" }}>
            <DaftarTicket />
          </Link>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default LoggedHome;
