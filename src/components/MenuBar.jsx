import React from 'react';
import { NavLink } from 'react-router-dom';

// Imports Menu Icons
import ProfileIcon from 'react-icons/lib/md/face';
import ContactIcon from 'react-icons/lib/md/mail-outline';
import PortfolioIcon from 'react-icons/lib/fa/code';

const MenuBar = () => (
	<div className="MenuBar">
		<NavLink
			exact
			to="/"
			className="MenuBar__item"
			activeClassName="MenuBar__item--active"
		>
			<ProfileIcon alt="Profile icon" className="MenuBar__icon" />
			<br />About
		</NavLink>
		<NavLink
			to="/portfolio"
			className="MenuBar__item"
			activeClassName="MenuBar__item--active"
		>
			<PortfolioIcon alt="Portfolio icon" className="MenuBar__icon" />
			<br />Portfolio
		</NavLink>
		<NavLink
			to="/contact"
			className="MenuBar__item"
			activeClassName="MenuBar__item--active"
		>
			<ContactIcon alt="Contact icon" className="MenuBar__icon" />
			<br />Contact
		</NavLink>
	</div>
);

export default MenuBar;
