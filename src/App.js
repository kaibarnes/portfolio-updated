import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import './styles/App.css';
import './styles/Header.css';
import './styles/MenuBar.css';
import './styles/About.css';
import './styles/Portfolio.css';
import './styles/Contact.css';

const App = withRouter(({ location }) => {
	const currentKey = location.pathname.split('/')[1] || '/';

	return (
		<div className="App">
			<div>
				<Header />
				<div className="wrapper">
					<TransitionGroup>
						<CSSTransition classNames="fade" timeout={200} key={currentKey}>
							<Switch location={location}>
								<Route path="/portfolio" component={Portfolio} />
								<Route path="/contact" component={Contact} />
								<Route path="/" component={About} />
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				</div>
			</div>
		</div>
	);
});

export default App;
