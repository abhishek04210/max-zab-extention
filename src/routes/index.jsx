import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 } from "uuid";
import { encryptText } from "../utils/crypto";

import Main from "../screens/Main";
import SetPassword from "../screens/SetPassword";
import Login from "../screens/Login";
import Home from "../screens/Home";

export default function AppRoute() {
  useEffect(() => {
    let secretKey = localStorage.getItem("secretKey");

    console.log("secretKey: " + secretKey);

    if (secretKey === null) {
      let secKey = v4();
      let encryptedSecret = encryptText(secKey);
      console.log({ secKey, encryptedSecret });
      localStorage.setItem("secretKey", encryptedSecret);
      localStorage.setItem("secret_user_logged_in", false);
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/set-password" element={<SetPassword />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
