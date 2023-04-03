import "98.css";
import "../icons/5686.png";

export default function Login() {
  return (
    <>
      <div className="flex-container">
        <div className="window" style={{ width: "300px" }}>
          <div className="title-bar">
            <div className="title-bar-text">Login</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <div className="field-row-stacked" style={{ width: "200px" }}>
              <label for="text22">Email</label>
              <input id="text22" type="email" value="" />
            </div>
            <div className="field-row-stacked" style={{ width: "200px" }}>
              <label for="text23">Password</label>
              <input id="text23" type="password" value="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
