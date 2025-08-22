import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";  

function UserLayout() {
  return (
    <>
      <Navbar />
        <Outlet /> {/* Di sini konten halaman admin akan muncul */}
    </>
  );
}

export default UserLayout;
