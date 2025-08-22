import "@/styles/user/Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h1 className="logoo">FOA</h1>
            <p>Weight training, Free Body. FoA</p>
          </div>
          <div className="footer-mid">
            <div className="footer-section">
              <h3>Sosmed</h3>
              <p> @exmpl_</p>
              <p> @exmpl_</p>
            </div>
            <div className="footer-section">
              <h3>Address</h3>
              <p>Rudbeckia Hill. 43</p>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p>+1 878 7866 3408</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Pain is temporary, but pride is forever</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
