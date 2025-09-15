    import { BrowserRouter, Routes, Route } from "react-router-dom";
    import AdminLayout from "./components/admin/AdminLayout";
    import UserLayout from "./components/user/UserLayout";
    import Home from "./pages/admin/Home";
    import OptionData from "./pages/admin/OptionData";
    import AddData from "./pages/admin/AddData";
    import Data from "./pages/admin/Data";
    import UserHome from "./pages/user/Home";
    import Train from "./pages/user/Train";
    import Prog from "./pages/user/Prog";
    import Login from "./pages/auth/Login";
    import Regis from "./pages/auth/Regis";

    function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Home />} />
              <Route path="Adding" element={<Data />} />
              <Route path="Data" element={<Home />} />
              <Route path="AddData" element={<AddData />} />
              <Route path="training" element={<OptionData />} />
              <Route path="program" element={<OptionData />} />
            </Route>

            <Route path="/user" element={<UserLayout />}>
              <Route index element={<UserHome />} />
              <Route path="train" element={<Train />} />
              <Route path="prog" element={<Prog />} />
            </Route>

            <Route path="/auth">
              <Route index element={<Login />} /> 
              <Route path="masuk" element={<Login />} /> 
              <Route path="daftar" element={<Regis />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
    }

    export default App;
