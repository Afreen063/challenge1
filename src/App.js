import backgroundImage from "./images/backgroundImage.png";
import amazonLogo from "./images/amazonLogo.png";
import treeLogo from "./images/treelogo.png";

import Input from "./Components/input";
import Button from "./Components/button";
import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function checkEmail() {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email === "") {
      setEmailError(true);
      setErrorMsg("The email field is required");
    } else if (!email.match(validRegex)) {
      setEmailError(true);
      setErrorMsg("Invaid Email");
    }
  }

  return (
    <div className="App">
      {/**for Background Image */}
      <img src={backgroundImage} alt="tree" className="background_image" />

      {/**For Login Card */}
      <div className="card">
        {/**For Amazon logo in the heading */}
        <div className="head">
          <div className="amazon">
            <img src={amazonLogo} alt="logo" className="amazonLogo" />
          </div>
        </div>

        {/**for Login Details Body */}
        <div className="body">
          {/**heading Logo */}
          <h1 className="login">Login</h1>

          {/**tree logo */}
          <img src={treeLogo} alt="tree logo" className="treeLogo" />

          {/**Input For email and password */}
          <Input
            type="email"
            placeholder="Email"
            errorMsg={errorMsg}
            setValue={setEmail}
            error={emailError}
            value={email}
          />
          <Input type="password" placeholder="Password" />

          {/** for SignIn Button */}
          <button className="signIn" onClick={checkEmail}>
            Sign In
          </button>

          {/**for Forgeot password */}
          <div className="forgotPassword">
            <p className="fontJosfinSan">Forgot Password?</p>
            <p className="fontJosfinSan colorD9">New User? Sign Up</p>
          </div>
          <p className="fontJosfinSan margin">or</p>

          {/**for Login with Google or facebook */}
          <Button text="continue with google" logo="google" />
          <Button text="continue with facebook" />
        </div>
      </div>
    </div>
  );
}

export default App;
