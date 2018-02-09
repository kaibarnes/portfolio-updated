import React from 'react';
import PortfolioItem from './PortfolioItem';

// Import screenshots of each project in the portfolio
import todoScreenshot from '../images/todo-screenshot.png';
import partyPlannerScreenshot from '../images/party-planner-screenshot.png';
import weatherScreenshot from '../images/weather-screenshot.png';
import findingsummersendScreenshot from '../images/findingsummersend-screenshot.png';
import candymarcheScreenshot from '../images/candymarche-screenshot.png';
import shinpuruScreenshot from '../images/shinpuru-screenshot.png';
import gameScreenshot from '../images/game-screenshot.png';

// An array of each project to be included in the portfolio
const projects = [
  {
    image: shinpuruScreenshot,
    title: 'Shinpuru - English to Japanese Dictionary',
    skills: 'React Native',
    description:
      'An app I developed to practice React Native. It uses an API to translate English words, then gives the option to save favorites to later be viewed on another page.',
    github: 'https://github.com/kaibarnes/shinpuru'
  },
  {
    image: gameScreenshot,
    title: 'A tap adventure game',
    skills: 'React Native',
    description:
      'A game I am developing to practice React Native. This game is still a work in progress and I am still adding new features',
    github: 'https://github.com/kaibarnes/tapadventure'
  },
  {
    image: partyPlannerScreenshot,
    title: 'Party Planner App',
    skills: 'Firebase, React, Bootstrap',
    description:
      'A small site I made to help plan parties with coworkers. It uses Firebase to store the data and update it in real time.',
    link: 'http://party-planner.surge.sh',
    github: 'https://github.com/kaibarnes/party-planner'
  },
  {
    image: candymarcheScreenshot,
    title: 'Candy Marche',
    skills: 'PHP, Bootstrap',
    description:
      'A site I was hired to make freelance. I was provided with Photoshop files and a style guide, and consulted with the designer to complete the project.',
    link: 'http://www.candymarche.com'
  },

  {
    image: weatherScreenshot,
    title: 'Weather App',
    skills: 'Axios, React, Foundation',
    description:
      'A searchable weather app that grabs the weather of your chosen location from the Open Weather Map API using Axios.',
    link: 'http://kaibarnes-weather.surge.sh',
    github: 'https://github.com/kaibarnes/react-weather'
  },
  {
    image: todoScreenshot,
    title: 'Todo list',
    skills: 'Redux, React, Expect, Foundation',
    description:
      'A todo app using Redux to manage state and Expect to run tests. It uses local storage so todos can be checked and added to at any time.',
    link: 'http://kaibarnes-todolist.surge.sh',
    github: 'https://github.com/kaibarnes/react-todo'
  },
  {
    image: findingsummersendScreenshot,
    title: 'Finding Summers End Blog',
    skills: 'Wordpress, PHP, CSS',
    description:
      'Set up and customized a theme and plugins for an aspiring blogger',
    link: 'http://findingsummersend.com'
  }
];

const PortfolioList = () => (
  <div className="Portfolio__list">
    {/* Makes a new PortfolioItem for each of the projects from the Projects array in order */}
    {projects.map(project => {
      const { image, title, skills, description, link, github } = project;
      return (
        <PortfolioItem
          image={image}
          title={title}
          skills={skills}
          description={description}
          link={link}
          github={github}
          key={title}
        />
      );
    })}
  </div>
);

export default PortfolioList;
