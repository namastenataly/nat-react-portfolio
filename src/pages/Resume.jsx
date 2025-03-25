export default function Resume() {
  return (
    <div className="container">
      <div className="p-3">
        <h2>
          <a href="/">My Resume</a>
          <p><small>In the works</small></p>
        </h2>
      </div>
      <div className="mt-3 mb-3 skills-list">
        <h3>Front-End Proficiencies</h3>
        <ul className="list-unstyled">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="mt-3 skills-list">
        <h3>Back-End Proficiencies</h3>
        <ul className="list-unstyled">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL - Sequelize</li>
          <li>MongoDB - Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}