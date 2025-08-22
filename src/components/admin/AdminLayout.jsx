import { Outlet } from "react-router-dom";
import Navbar from "./Nvbar";


function AdminLayout() {
  return (
    <div>
      <Navbar />
        <Outlet /> 
    </div>
  );
}

export default AdminLayout;
