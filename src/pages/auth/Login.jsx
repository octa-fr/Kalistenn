import "../../styles/auth/Log.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../api";
  
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await login({ email, password });

    if (res.token) {
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      if (res.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } else {
      alert("Login gagal, cek email & password");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h2 className="company-name">Kalistenik</h2>
        <h4>LOGIN</h4>

        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
                navigate("/auth/register");
              }}
              className="text-blue-600 hover:underline"
            >
              Daftar di sini
            </a>
          </p>
      </form>
    </div>
  );
}

export default Login;



// import "../../styles/auth/Log.css";
// import { useNavigate } from "react-router-dom";
// import { login } from "../../api";

// function Login() {
//   const navigate = useNavigate();

//   return (
//     <>
//       <div className="wrapper">
//         <form action="" method="POST">
//           <h2 className="company-name">Kalistenik</h2>
//           <h4> LOGIN </h4>
//           <div className="input-box">
//             <input type="email" name="email" placeholder="Email" required />
//           </div>
//           <div className="input-box">
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               required
//             />
//           </div>
//           <button type="submit" className="bttn">
//             LOGIN
//           </button>
          
//         </form>
//       </div>
//     </>
//   );
// }

// export default Login;
