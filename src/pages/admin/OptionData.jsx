import { Link } from "react-router-dom";
import "../../styles/admin/Admin.css";

function OptionData() {
  const dummyData = [
    {
      id: 1,
      name: "Push Up",
      image: null, 
      detail: "Latihan dada",
      digunakanUntuk: "Otot Dada",
      tutorial: "1.2.3.4",
    },
  ];

  return (
          <div id="hoome">
    <div className="main">
      <div className="main-content">
        <h1>Train?Prog</h1>
        <Link to="/admin/Adding" className="add-btn">
          + Tambah Data
        </Link>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Image</th>
              <th>Detail</th>
              <th>Di Gunakan Untuk</th>
              <th>Tutorial</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <img
                    src={item.image || "/default.png"}
                    alt={item.name}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{item.detail}</td>
                <td>{item.digunakanUntuk}</td>
                <td>{item.tutorial}</td>
                <td>
                  <a href="#" className="edit-btn">
                    Edit
                  </a>
                  <form action="" method="POST" style={{ display: "inline" }}>
                    <button type="submit" className="delete-btn">
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default OptionData;
