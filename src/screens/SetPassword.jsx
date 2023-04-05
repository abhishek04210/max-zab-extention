import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { encryptText } from "../utils/crypto";

export default function SetPassword() {
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const setPassword = () => {
    setIsSubmit(true);
    if (
      passwords.password.length >= 4 &&
      passwords.password === passwords.confirmPassword
    ) {
      console.log("Password set");

      let encPassword = encryptText(passwords.password);
      localStorage.setItem("secret-password", encPassword);
      navigate("/login");
    }
  };

  return (
    <header className="App-header">
      <div>Set Your Password</div>
      <div className="password-container">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={passwords.password}
          onChange={(e) =>
            setPasswords((prev) => ({ ...prev, password: e.target.value }))
          }
        />{" "}
        <button onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {isSubmit && passwords.password.length < 4 && (
        <p className="error-text">Passwords must be atlest 4 characters</p>
      )}
      <div className="password-container">
        <input
          type={showConPassword ? "text" : "password"}
          placeholder="Confirm your password"
          value={passwords.confirmPassword}
          onChange={(e) =>
            setPasswords((prev) => ({
              ...prev,
              confirmPassword: e.target.value,
            }))
          }
        />{" "}
        <button onClick={() => setShowConPassword((prev) => !prev)}>
          {showConPassword ? "Hide" : "Show"}
        </button>
      </div>
      {isSubmit && passwords.password !== passwords.confirmPassword && (
        <p className="error-text">Passwords not match</p>
      )}
      <button onClick={() => setPassword()}>Set Password</button>
    </header>
  );
}
