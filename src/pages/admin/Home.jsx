import "../../styles/admin/Admin.css";
function Home() {
  return (
      <section id="hoome">
        <div className="main-content">
          <h1>User Data</h1>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0829</td>
                  <td>Octa</td>
                  <td>Oct@relfa</td>
                  <td className="actions">
                    <form action="" method="POST">
                      <button type="submit" className="delete-btn">
                        Hapus
                      </button>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
  );
}

export default Home;
