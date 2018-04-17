import React from 'react';

import MenuBar from './MenuBar';

const Header = props => (
  <nav className="Header heading">
    <div className="Header__title">
      <h1 className="Header__text Header__name">Kai Barnes</h1>
      <h2 className="Header__text Header__job">Web Developer</h2>
    </div>
    <MenuBar history={props.history} />
  </nav>
);

export default Header;
