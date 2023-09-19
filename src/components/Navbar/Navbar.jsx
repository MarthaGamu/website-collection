import React from 'react';
import profile from '../../assets/img_avatar.png';
import {
	LogoContainer,
	ImageWrapper,
	UnorderedList,
	StyledNavbar
} from './Navbar.styled';

function Navbar() {
	return (
		<StyledNavbar>
			<LogoContainer>
				<ImageWrapper>
					<img src={profile} alt='Profile' />
				</ImageWrapper>

				<span>Martha G Mandizvidza</span>
			</LogoContainer>
			<UnorderedList>
				<li>
					<a href='#home'>HOME</a>
				</li>
				<li>
					{' '}
					<a href='#About'>ABOUT</a>
				</li>
				<li>
					<a href='#Project'>PROJECT</a>
				</li>
				<li>
					<a href='#Contact'>CONTACT</a>
				</li>
			</UnorderedList>
		</StyledNavbar>
	);
}

export default Navbar;
