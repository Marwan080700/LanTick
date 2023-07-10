import { createContext, useReducer } from "react";

// create Context
export const UserContext = createContext();

const initialState = {
  isLogin: false,
  user: "",
};

// untuk memanipulasi data initial state
const reducer = (state, action) => {
  // object destruction
  const { type, payload } = action;
  // // array destruction
  // const [test, test] = action;

  switch (type) {
    case "ADMIN_LOGIN_SUCCESS":
      return {
        isLogin: true,
        status: true,
        user: payload,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        isLogin: true,
        status: false,
        user: payload,
      };
    case "LOGOUT_SUCCESS":
      return {
        isLogin: false,
        status: false,
        user: "",
      };
    default:
      throw new Error();
  }
};

export const UserContextProvider = ({ children }) => {
  // useReducer untuk menghubungi data manipulasi dengan fungsi data manipulasi
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
