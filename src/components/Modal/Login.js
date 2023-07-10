import { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { UserContext } from "../Context/UseContext";
import { useNavigate } from "react-router-dom";

function Login({ show, showDaftar, showLogin }) {
  // deklarasi close modal
  const handleClose = () => showLogin(false);

  // deklarasi switch register
  const switchRegister = () => {
    handleClose();
    showDaftar(true);
  };

  // set login
  const [login, setLogin] = useState({});

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  // to navigate
  const navigate = useNavigate();

  // context
  const [state, dispatch] = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    let status;
    if ((email === "admin@gmail.com", password === "123")) {
      dispatch({
        type: "ADMIN_LOGIN_SUCCESS",
        status: true,
        payload: email,
      });
      alert("Admin login");
      navigate("/logged/Admin");
    } else {
      dispatch({
        type: "USER_LOGIN_SUCCESS",
        status: false,
        payload: email,
      });
      alert("User Login");
      navigate("/");
    }
  };

  return (
    <>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Container>
            <h3 className="text-center mt-4 mb-4">LOGIN</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  id="email"
                  name="email"
                  className="mb-4"
                  type="text"
                  placeholder="Input Your Email"
                  onChange={handleChange}
                ></Form.Control>

                <Form.Control
                  id="password"
                  name="password"
                  className="mb-4"
                  placeholder="Input Your Password"
                  Type="password"
                  onChange={handleChange}
                ></Form.Control>

                {/* <Link to={"/Logged"}> */}
                <Button
                  className="btn-input-login w-100 rounded rounded-4 border-0"
                  type="submit"
                  onClick={handleClose}
                >
                  Login
                </Button>
                {/* </Link> */}

                <Form.Group className="d-flex align-items-center mt-2">
                  <p>
                    Belum Punya Akun?
                    <a
                      onClick={switchRegister}
                      className="ms-2 fw-bold"
                      style={{
                        color: "black",
                        cursor: "pointer",
                        textDecoration: "none",
                      }}
                    >
                      klik disini
                    </a>
                  </p>
                </Form.Group>
              </Form.Group>
            </Form>
          </Container>
        </Modal>
      </div>
    </>
  );
}

export default Login;
