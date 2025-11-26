import FcfsScheduler from "./FcfsScheduler";

function Projects() {
  return (
    <div className="card">
      <h2 className="section-title">Projects</h2>
      <p className="section-intro">
        A quick look at some simple projects that reflect my interests and
        growth as a developer.
      </p>
      <div className="projects-grid">
        <div className="project-item">
          <h3 className="project-title">FCFS CPU Scheduling</h3>
          <p className="project-description">
            A First-Come, First-Serve CPU scheduling project that simulates how
            processes are handled in order of arrival, helping visualize average
            waiting time and turnaround time.
          </p>
        </div>
        <div className="project-item">
          <h3 className="project-title">Personal Portfolio</h3>
          <p className="project-description">
            A minimal single-page portfolio built with React, focusing on clean
            layout and simple navigation.
          </p>
        </div>
        <div className="project-item">
          <h3 className="project-title">Profile Card UI</h3>
          <p className="project-description">
            A responsive profile card showcasing basic information, skills, and
            contact links.
          </p>
        </div>
        <div className="project-item">
          <h3 className="project-title">Practice Components</h3>
          <p className="project-description">
            Small React components used to practice props, state, and layout
            patterns.
          </p>
        </div>
      </div>

      <FcfsScheduler />
    </div>
  );
}

export default Projects;


