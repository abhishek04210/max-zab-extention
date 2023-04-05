import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { decryptText } from "../utils/crypto";
import { useNavigate} from "react-router-dom";
import { v4 } from "uuid";
import { encryptText } from "../utils/crypto";

export default function Main() {
  const [Deckey, setDeckey] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let secretKey = localStorage.getItem("secretKey");
    let secret_password =  localStorage.getItem("secret-password");
    let secret_user_logged_in = localStorage.getItem("secret-user-logged-in")

    if (secretKey !== null) {
      var originalText = decryptText(secretKey);
      setDeckey(originalText);
    }
  
    if( secret_password !== null ){
        if(secret_user_logged_in === 'true'){
            console.log('/home')
            navigate('/home')
        }else{
            console.log('/login')
            navigate('/login')
        }
      }
  }, [navigate]);




  return (
    <header className="App-header">
      <p>Max Zab</p>
      <p>You are not Logged IN</p>
      <div className="secret-container">
        <h5>Your secret key: </h5>
        <Link
          className="App-link"
          to="/set-password"
        >
          {Deckey}
        </Link>
      </div>

      <p> click on the key to set password </p>
    </header>
  );
}
