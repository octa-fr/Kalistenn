import "../../styles/admin/Admin.css";
function Data() {
  return (
      <div id="hoome">
        <div className="container">
          <form action="" method="POST" enctype="multipart/form-data">
            <label for="nama">Nama</label>
            <input
              className="warp"
              type="text"
              name="nama"
              placeholder="nama"
              required
            />
            <label for="nama">Detail</label>
            <input
              className="warp"
              type="text"
              name="harga"
              placeholder="detail"
              required
            />
            <label for="nama">Manfaat untuk</label>
            <input
              className="warp"
              type="text"
              name="manfaat"
              placeholder="detail"
              required
            />
            <label for="nama">Tutorial</label>
            <input
              className="warp"
              type="text"
              name="tutor"
              placeholder="detail"
              required
            />
            <label for="nama">Foto</label>
            <input
              className="warp"
              type="file"
              name="foto"
              placeholder="foto"
              required
            />
            <button className="btn" type="submit">
              Simpan
            </button>
          </form>
        </div>
      </div>
  );
}

export default Data;
