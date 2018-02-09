import React from 'react';
import resume from '../files/KaiBarnes-resume.pdf';

class About extends React.Component {
  // Scrolls the page to the top when the component will mount
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="About">
        <p className="About__intro heading">
          I am an aspiring front end web developer living in Tokyo and I'm
          currently looking for work.
        </p>
        <p className="heading">
          If you want to learn more about me, you can also{' '}
          <a href={resume} download>
            download my resume
          </a>
        </p>
        <div className="About__text">
          <div className="About__section">
            <h2 className="heading">My skills</h2>
            <ul className="About__list">
              <li className="About__list-item">HTML</li>
              <li className="About__list-item">CSS/SASS</li>
              <li className="About__list-item">Javascript</li>
              <li className="About__list-item">jQuery</li>
              <li className="About__list-item">React</li>
              <li className="About__list-item">MongoDB</li>
              <li className="About__list-item">Wordpress</li>
              <li className="About__list-item">Git</li>
            </ul>
          </div>
          <div className="About__profile">
            <h2 className="heading">A bit about me</h2>
            <p>
              I have been teaching myself front end web development since Autumn
              2016.
            </p>
            <p>
              Since then, I have spent the majority of my free time studying,
              reading, watching, and building pretty much anything I can to
              develop my skills.
            </p>
            <p>
              I am looking to start my career in front end web development with
              any suitable positions in the Tokyo area.
            </p>
            <p>
              I am self-taught and have learned a lot already. But, I know that
              I still have a lot more to learn.
            </p>
            <p>I can't wait!!</p>
          </div>
          <div className="About__section">
            <h2 className="heading">My hobbies</h2>
            <ul className="About__list">
              <li className="About__list-item">Travelling</li>
              <li className="About__list-item">Drinking</li>
              <li className="About__list-item">Gaming</li>
              <li className="About__list-item">Attending Meetups</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
