import React from 'react';
import { Link } from 'gatsby';

import * as headerStyles from './header.module.css'

const Header = () => {
	return (
		<header className={headerStyles.header}>
			<h1>
				<Link className={headerStyles.title} to='/'>
					Non-Fungible Humans
				</Link>
			</h1>
			<nav>
				<ul className={headerStyles.navList}>
					<li>
							<Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Search</Link>
					</li>
					<li>
							<Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/upload'>Upload</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header