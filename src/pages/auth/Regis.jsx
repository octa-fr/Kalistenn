import "../../styles/auth/Log.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Regis() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("http://localhost:8000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  if (res.ok) {
    navigate("/auth/login");
  } else {
    setError("Register gagal, coba lagi");
  }
};


  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h2 className="company-name">Kalistenik</h2>
        <h4>REGISTER</h4>

        {error && <p style={{ color: "red" }}>{error}</p>}


        <div className="input-box">
          <input type="text"
          name="name"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          />
        </div>

        <div className="input-box">
          <input type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <button type="submit" className="bttn">
            REGISTER
          </button>
        </div>

         <Link to="/auth/login" className="ada">
          Sudah Ada Akun
        </Link>
        
      </form>
    </div>
  );
}

export default Regis;

{/* <div className="input-box">
          <input
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            required
          />
        </div> */}