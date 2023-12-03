import * as jwt from "jsonwebtoken";
import { redirect } from 'next/navigation';

export const logout = () => {
//   sessionStorage.removeItem("jwtToken");
//   redirect("/");
};

const validateJWT = (token) => {
  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY);
    return true;
  } catch (ex) {
    console.log(ex)
    // sessionStorage.removeItem("jwtToken");
    return false;
  }
};

export const hasAuthenticated = () => {
  try {
    const token = sessionStorage.getItem("jwtToken");
    return Boolean(token && validateJWT(token));
  } catch (error) {
    console.log(error)
    return false;
  }
};
