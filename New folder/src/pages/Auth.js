import React, { useState } from "react";
import Login from "../components/auth/login";
import Signup from "../components/auth/signup";
import "./auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  console.log(isLogin);
  return (
    <div className="auth">
      <p>{isLogin ? "Login" : "Register"}</p>
      {isLogin ? <Login /> : <Signup />}
      {isLogin ? (
        <div className="auth__desc">
          <p>New User/admin ? </p>
          <p onClick={() => setIsLogin(false)}>Sign Up</p>
        </div>
      ) : (
        <div className="auth__desc">
          <p>Already a user ? </p>
          <p onClick={() => setIsLogin(true)}>Login</p>
        </div>
      )}
    </div>
  );
};

export default Auth;
