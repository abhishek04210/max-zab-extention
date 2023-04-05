import React, {useState, useEffect} from 'react'
import { decryptText , encryptText } from "../utils/crypto";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false)
   const [Deckey, setDeckey] = useState("");
   const [password , setPassword] = useState('')

   useEffect(() => {
     let secretKey = localStorage.getItem("secretKey");
 
     if (secretKey !== null) {
       var originalText = decryptText(secretKey);
       setDeckey(originalText);
     //   console.log({ secretKey, originalText, tOF: typeof originalText });
     }
   }, []);


   const manageLogin = () => {
    let secret_password =  localStorage.getItem("secret-password");
   
    var originalText = decryptText(secret_password);

    if(originalText === password) {
        localStorage.setItem("secret-user-logged-in", true)
        navigate('/home')
    }
   }

   const resetApp = () => {
    localStorage.removeItem("secret-password");
    localStorage.removeItem("secret-user-logged-in")
    localStorage.removeItem("secretKey")
    window.location.reload()
  }

  return (
    <header className="App-header"> 
      <button onClick={resetApp}>Re-Set App</button>
     <div>Enter Your Password for the key :</div> 
     <div style={{ color: "#96ed92" }}>{Deckey}</div>
     <div className="password-container">
     <input type={showPassword ? "text" : "password"}  placeholder="Enter your password" 
     value={password}
     onChange={e =>setPassword(e.target.value)}
     /> <button onClick={()=>setShowPassword(prev=> !prev)}>{showPassword ? "Hide" :  "Show"}</button>
     </div>
   
     <button onClick={()=> manageLogin()}>Login</button>
     </header>
  
  )
}
