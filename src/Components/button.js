import googleLogo from "../../src/images/googleLogo.png";
import facebookLogo from "../../src/images/googleLogo.png";

export default function Button(props) {
  return (
    <div className="button">
      {props.logo === "google" ? (
        <img src={googleLogo} alt="Logo" className="google" />
      ) : (
        <img src={facebookLogo} alt="Logo" className="facebook" />
      )}

      <button>{props.text.toUpperCase()}</button>
    </div>
  );
}
