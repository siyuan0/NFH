import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import * as headerStyles from './header.module.css'

const Header = () => {
	return (
		<header className={headerStyles.header}>
			<div style={{display: `inline-flex`}}>
			<h1>
				<Link className={headerStyles.title} to='/'>
					Non-Fungible Humans
				</Link> &nbsp;&nbsp;
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
			</h1>
			</div>
			<div style={{display: `inline`, alignItems: `center`}}>
				<StaticImage
						src="../images/logo.png"
						width={100}
						quality={90}
						alt="logo"
				/>
			</div>
			
		
		</header>
	)
}

export default Header