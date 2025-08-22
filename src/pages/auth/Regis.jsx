import "../../styles/auth/Log.css";
import { Link } from "react-router-dom";

function Regis() {
  return (
    <>
      <div className="wrapper">
        <form action="" method="POST">
          <h2 className="company-name">Kalistenik</h2>
          <h4>REGISTER</h4>
          <div className="input-box">
            <input type="text" name="name" placeholder="Username" required />
          </div>
          <div className="input-box">
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password_confirmation"
              placeholder="Confirm Password"
              required
            />
          </div>
          <Link to="/auth/masuk" className="ada">
            Sudah Ada Akun
          </Link>
          <div>
            <button type="submit" className="bttn">
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Regis;
