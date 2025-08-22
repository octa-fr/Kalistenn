import "../../styles/auth/Log.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <form action="" method="POST">
          <h2 className="company-name">Kalistenik</h2>
          <h4> LOGIN </h4>
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
          <button type="submit" className="bttn">
            LOGIN
          </button>
          <p className="mt-3 text-sm text-center">
            Belum punya akun?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/auth/daftar");
              }}
              className="text-blue-600 hover:underline"
            >
              Daftar di sini
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
