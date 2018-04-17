import React from 'react';

const PortfolioItem = ({ image, title, link, skills, description, github }) => (
  <div className="PortfolioItem">
    <img src={image} alt={title} className="PortfolioItem__image" />
    <div className="PortfolioItem__text">
      <h3 className="PortfolioItem__header heading">
        <a href={link || github}>{title}</a>
      </h3>
      <p className="PortfolioItem__skills">I used {skills}</p>
      <p className="PortfolioItem__description">{description}</p>
      {/* Only render if a link prop is passed */}
      {link ? (
        <a className="PortfolioItem__link" href={link}>
          Visit Site
        </a>
      ) : null}
      {/* Only render if a github prop is passed */}
      {github ? (
        <a className="PortfolioItem__link" href={github}>
          View on Github
        </a>
      ) : null}
    </div>
  </div>
);

export default PortfolioItem;
