import { Link } from "react-router-dom";
import "@/styles/admin/Navbar.css";

function Nvbar() {
  return (
    // <nav>
      <div className="sidebar">
        <h2>Admin</h2>
        <Link to="/admin/AddData" className="add-btn">
          + Data
        </Link>
        <Link to="/admin/Data">
          Data User
        </Link>
        <ul>
          <p>Training</p>
          <li>
            <Link to="/admin/training">PushDay</Link>
          </li>
        </ul>
        <ul>
          <p>Proram</p>
          <li>
            <Link to="/admin/program">Lower Day</Link>
          </li>
        </ul>
      </div>
    // </nav>
  );
}

export default Nvbar;
