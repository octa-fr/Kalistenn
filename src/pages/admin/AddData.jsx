import "../../styles/admin/AdminAdd.css";
function AddData() {
  return (
    <div id="hoome">
      <div className="container">
            <form action="" method="POST" enctype="multipart/form-data">
                <label for="Nama" className="warps-teks">Nama Data kategori</label>
                <input required type="text" name="nama" className="form-control" id="Nama" placeholder="nama" />
                <h4>Pilih Kategori:</h4>
                <label><input type="checkbox" name="menu[]" value="training"/> Training</label>
                <label><input type="checkbox" name="menu[]" value="program"/> Program</label>
                <div className="warp">
                    <label for="foto" class="warps-teks">Image</label>
                    <div>
                        <input className="form-control" type="file" name="foto" id="foto" accept="image/*" />
                    </div>
                </div>
                <button type="submit" name="aks" value="add" className="butn">Tambahkan</button>
            </form>
      </div>
    </div>
  )
}

export default AddData
