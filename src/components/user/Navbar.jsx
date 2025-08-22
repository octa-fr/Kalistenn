import "@/styles/user/Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    if (location.pathname !== "/user") {
      navigate("/user", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <div className="logo">FOA</div>
      <div className="menu_kanan">
        <button onClick={() => goToSection("home")}>Home</button>
        <button onClick={() => goToSection("Training")}>Training</button>
        <button onClick={() => goToSection("Program")}>Program</button>
        <button onClick={() => goToSection("Footer")}>About us</button>
      </div>
    </nav>
  );
}

export default Navbar;
