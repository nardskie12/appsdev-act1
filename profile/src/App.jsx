import Header from "./components/Header";
import ProfilePicture from "./components/ProfilePicture";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        {/* Home */}
        <section id="home" className="section section--home">
          <div className="home-content">
            <div className="home-text">
              <p className="home-kicker">Portfolio</p>
              <h1 className="home-title">Bernard Bioco</h1>
              <p className="home-subtitle">
                Aspiring developer with a passion for building clean, simple, and
                user-friendly applications.
              </p>
              <div className="home-actions">
                <Button />
              </div>
            </div>
            <div className="home-photo">
              <ProfilePicture />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <AboutMe />
          <Skills />
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <Projects />
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
