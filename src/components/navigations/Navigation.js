import React, { useContext, useState } from "react";
import { Nav, Navbar, Container, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import { UserContext } from "../Context/UseContext";

// call modal
import Login from "../Modal/Login";
import Daftar from "../Modal/Daftar";

// call data dummy
import { userData } from "../DummyData/DummyData";

// import image
import iconLogin from "../../assets/img/boyicon.png";
import LogoName from "../../assets/img/Land-Tick.png";
import LogoTrain from "../../assets/img/train-facing-right 1.png";
import LogoutSide from "../../assets/img/Logout.png";
import AddTicket from "../../assets/img/AddTicket.png";
import tiketMe from "../../assets/img/Ticket.png";
import payment from "../../assets/img/Bill.png";

function Navigation() {
  // menerika keadaan awal dan mengembalikan 2 nilai
  const [showLogin, setShowLogin] = useState(false);
  const [showDaftar, setShowDaftar] = useState(false);

  // use Context from useContext have it before
  const [state, dispatch] = useContext(UserContext);

  // logout
  const logout = () => {
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="shadow  ">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Brand href="/" className="main-logo-text">
                <img
                  src={LogoName}
                  style={{ width: "80px", height: "22px", marginRight: "5px" }}
                />
                <img
                  src={LogoTrain}
                  style={{ width: "50px", height: "50px" }}
                />
              </Navbar.Brand>
            </Nav>

            {state.status ? (
              <>
                <Dropdown data-bs-theme="body shadow">
                  <Dropdown.Toggle
                    id="dropdown-button-dark-example1"
                    variant="body"
                    className="d-flex align-items-center gap-2"
                  >
                    <h5 className="text-danger">Admin</h5>
                    <img
                      className="border border-4 border-danger pt-1 pe-1 px-1 rounded-pill"
                      src={iconLogin}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <Link to={"/Logged/Admin/AddTicket"}>
                        <img
                          src={AddTicket}
                          style={{ width: "110px", height: "27px" }}
                        />
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">
                      <Link to={"/"} onClick={logout}>
                        <img src={LogoutSide} style={{ width: "80px" }} />
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : state.isLogin ? (
              <>
                {userData.map((user) => (
                  <Dropdown data-bs-theme="body shadow" key={user.id}>
                    <Dropdown.Toggle
                      id="dropdown-button-dark-example1"
                      variant="body"
                      className="d-flex align-items-center gap-2"
                    >
                      <h5 className="text-danger">{user.name}</h5>
                      <img
                        className="border border-4 border-danger pt-1 pe-1 px-1 rounded-pill"
                        src={iconLogin}
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        <Link to={"/logged/TikPrev"}>
                          <img
                            src={tiketMe}
                            style={{ width: "110px", height: "27px" }}
                          />
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <Link to={"/logged/Invoice"}>
                          <img
                            src={payment}
                            style={{ width: "100px", height: "27px" }}
                          />
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-3">
                        <Link to={"/"} onClick={logout}>
                          <img src={LogoutSide} style={{ width: "80px" }} />
                        </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ))}
              </>
            ) : (
              <>
                <Button
                  className="btn-outline-danger bg-gradient fs-6 pe-4 px-4 me-3 pt-2 pb-2 rounded"
                  style={{ backgroundColor: "white" }}
                  onClick={() => setShowDaftar(true)}
                >
                  Daftar
                </Button>

                {/* this is for login at navbar */}
                <Button
                  className="bg-danger bg-gradient fs-6 pe-4 px-4 pt-2 pb-2 rounded "
                  style={{ border: "none" }}
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </Button>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Login
        show={showLogin}
        showLogin={setShowLogin}
        showDaftar={setShowDaftar}
      />

      <Daftar show={showDaftar} showDaftar={setShowDaftar} />
    </>
  );
}

export default Navigation;
