import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/user/Footer";
import { homeSection } from "../../data/user/HomeSection";
import { courseSection } from "../../data/user/CourseSection";
import download from "../../assets/download.jpeg";
import upper from "../../assets/Lower.png";
import parse from "html-react-parser";
import "../../User.css";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });

      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  return (
    <>
      <div className="wrrapper">
        <section id="home">
          <div className="homs">{parse(homeSection.content)}</div>
          <img src={homeSection.Image} className="imag" alt="home" />
        </section>

        <div className="teks_warp1">{parse(courseSection.content1)}</div>
        <div className="teks_warp2">{parse(courseSection.content2)}</div>

        <div className="overlay">
          <img src={download} className="bg-img" alt="training background" />
          <div className="text_content">
            <section id="Training">
              <h3>TRAINING</h3>
              <div className="container">
                <div className="body">
                  <img src={upper} alt="Upper" />
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/user/train");
                    }}
                  >
                    <p>Lay Up</p>
                  </a>
                </div>
              </div>
            </section>
            <section id="Program">
              <h3>PROGRAM</h3>
              <div className="container2">
                <div className="body2">
                  <img src={upper} alt="Upper" />
                  <p>Push Up</p>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/user/prog");
                    }}
                  >Details</a>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section id="Footer">
          <div className="title">
            <h1>About Us</h1>
          </div>
          <div className="con_warp">
            <h1>FOA</h1>
            <p>
              (Focus On Athletism) is a platform dedicated to helping anyone who
              wants to start, deepen, or perfect their calisthenics training. We
              believe that everyone can be their best version of themselves
              through natural body movement, without having to rely on expensive
              equipment or gyms.
            </p>
            <p>At FOA, we provide:</p>
            <ul>
              <li>
                Safe and effective calisthenics technique guidance, from
                beginner to advanced.
              </li>
              <li>Structured and flexible daily training schedules</li>
              <li>
                Fitness tips & education that focus on long-term progress and
                overall health.
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
