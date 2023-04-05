import React, { useEffect, useState } from "react";
import { decryptText } from "../utils/crypto";
import { v4 } from "uuid";
import { encryptText } from "../utils/crypto";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [Deckey, setDeckey] = useState("");
 const navigate = useNavigate()

  useEffect(() => {
    let secretKey = localStorage.getItem("secretKey");
    if (secretKey !== null) {
      var originalText = decryptText(secretKey);
      setDeckey(originalText);
    }
  }, []);


  const regenrateSecrate =()=>{
    let secKey = v4();
    let encryptedSecret = encryptText(secKey);
    console.log({ secKey, encryptedSecret });
    localStorage.setItem("secretKey", encryptedSecret);
  setDeckey(secKey)
  }

  const LoggedOut = ()=>{
    // localStorage.removeItem("secret-password");
    localStorage.setItem("secret-user-logged-in",false)
    // localStorage.removeItem("secretKey")
    // window.location.reload()
    navigate("/")
  }

  return (
    <header className="App-header">
      <div>YOU ARE LOGGED IN</div>
      <p style={{ color: "#96ed92" }}>{Deckey}</p>
      <button style={{ margin: " 5px 0" }} onClick={()=>regenrateSecrate() }>Regenerate Secret</button>
      <button onClick={()=>LoggedOut()}>Logout</button>
    </header>
  );
}
