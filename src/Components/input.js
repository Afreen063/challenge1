import "../../src/App.css";
import errorImg from "../images/errorImage.svg";

export default function Input(props) {
  function showErrorMsg() {
    return (
      <div className="errorMsg">
        <img src={errorImg} alt="error" className="errorImg" />
        <p className="msg">{props.errorMsg}</p>
      </div>
    );
  }
  return (
    <div className="input_div">
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="inputs"
        value={props.value}
        onChange={(event) => {
          props.setValue(event.target.value);
        }}
      />
      {props.error ? showErrorMsg() : null}
    </div>
  );
}
